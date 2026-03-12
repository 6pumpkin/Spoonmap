# 1. Generate unique version tag based on current time
$version = Get-Date -Format "yyyyMMddHHmm"
Write-Host "🚀 New version generated: $version" -ForegroundColor Cyan

$indexPath = Join-Path $PSScriptRoot "index.html"
$html = Get-Content $indexPath -Raw

# 2. Update version parameters in index.html using Regex
# This replaces anything matching ?v=... with the new version
$updatedHtml = $html -replace '\?v=[\w\d]+', "?v=$version"

if ($html -ne $updatedHtml) {
    Set-Content -Path $indexPath -Value $updatedHtml -Encoding UTF8
    Write-Host "✅ index.html version tags updated." -ForegroundColor Green
} else {
    Write-Host "ℹ️ No version tags found to update or already up to date." -ForegroundColor Yellow
}

# 3. Git operations
Try {
    Write-Host "📦 Adding files to git..." -ForegroundColor Cyan
    git add .
    
    $commitMsg = "Auto Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    Write-Host "✍️ Committing changes: $commitMsg" -ForegroundColor Cyan
    git commit -m $commitMsg
    
    Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Cyan
    git push origin main
    
    Write-Host "`n✨ All updates completed successfully! Site will be updated in about 1 minute." -ForegroundColor Green
} Catch {
    Write-Host "`n❌ An error occurred during git operations." -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Exit 1
}
