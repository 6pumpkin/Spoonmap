# 0. Find Git Executable Path automatically
$gitCmd = "git"
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    $possiblePaths = @(
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files (x86)\Git\cmd\git.exe",
        "$env:LocalAppData\Programs\Git\cmd\git.exe",
        "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
    )
    foreach ($path in $possiblePaths) {
        if (Test-Path $path) {
            $gitCmd = $path
            break
        }
    }
}

# Ensure Git user identity is configured
& $gitCmd config user.name "Spoonmap User" 2>$null
& $gitCmd config user.email "user@spoonmap.local" 2>$null

Write-Host "1. Synchronizing CSV data to data.js..." -ForegroundColor Cyan
& "$PSScriptRoot\sync_data.ps1"
Write-Host ""

$version = Get-Date -Format "yyyyMMddHHmm"
Write-Host "2. Generating new cache-bust version tag: $version" -ForegroundColor Cyan

$indexPath = Join-Path $PSScriptRoot "index.html"
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$html = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)

$updatedHtml = $html -replace '\?v=[\w\d]+', "?v=$version"
if ($html -ne $updatedHtml) {
    [System.IO.File]::WriteAllText($indexPath, $updatedHtml, $utf8NoBOM)
    Write-Host "index.html version tags updated." -ForegroundColor Green
} else {
    Write-Host "index.html version tags already up to date." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "3. Git Operations starting (using $gitCmd)..." -ForegroundColor Cyan

Try {
    Write-Host "  - Staging modified files..." -ForegroundColor Gray
    & $gitCmd add .
    
    $commitMsg = "Update Spoonmap site & data: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    Write-Host "  - Committing changes: $commitMsg" -ForegroundColor Gray
    & $gitCmd commit -m $commitMsg
    
    Write-Host "  - Pushing to GitHub (origin main)..." -ForegroundColor Gray
    & $gitCmd push origin main
    
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " GitHub 업데이트가 완료되었습니다! (약 1분 후 반영됩니다)" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
} Catch {
    Write-Host "`nGitHub 업데이트 중 오류가 발생했습니다." -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Exit 1
}
