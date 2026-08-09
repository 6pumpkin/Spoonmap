# 1. Sync data first
& "$PSScriptRoot\sync_data.ps1"

# 2. Find Git executable if not in PATH
$gitCmd = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCmd) {
    $candidates = @(
        "C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe",
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files (x86)\Git\cmd\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
    )
    foreach ($cand in $candidates) {
        if (Test-Path $cand) {
            $gitDir = Split-Path $cand -Parent
            $env:PATH = "$gitDir;$env:PATH"
            Write-Host "Found Git at $cand" -ForegroundColor Gray
            break
        }
    }
}

# 3. Cache-busting version update
$version = Get-Date -Format "yyyyMMddHHmm"
Write-Host "🚀 New version tag generated: $version" -ForegroundColor Cyan

$indexPath = Join-Path $PSScriptRoot "index.html"
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$html = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
$updatedHtml = $html -replace '\?v=[\w\d]+', "?v=$version"

if ($html -ne $updatedHtml) {
    [System.IO.File]::WriteAllText($indexPath, $updatedHtml, $utf8NoBOM)
    Write-Host "✅ index.html version tags updated." -ForegroundColor Green
} else {
    Write-Host "ℹ️ index.html version tags up to date." -ForegroundColor Yellow
}

# 4. Git operations
Try {
    Write-Host "📦 Adding files to git..." -ForegroundColor Cyan
    git add .
    
    $commitMsg = "Update Spoonmap site & data: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    Write-Host "✍️ Committing changes: $commitMsg" -ForegroundColor Cyan
    git commit -m $commitMsg
    
    Write-Host "⬆️ Pushing to GitHub (origin main)..." -ForegroundColor Cyan
    git push origin main
    
    Write-Host "`n✨ All updates completed successfully! GitHub Pages will update in 1~2 minutes." -ForegroundColor Green
} Catch {
    Write-Host "`n❌ An error occurred during git operations." -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Exit 1
}
