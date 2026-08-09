$git = "C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
Set-Location "D:\PUMPKIN\Spoonmap"

Write-Host "=== Git Status ===" -ForegroundColor Cyan
& $git status

Write-Host "=== Last 3 Commits ===" -ForegroundColor Cyan
& $git log --oneline -3

Write-Host "=== Remote ===" -ForegroundColor Cyan
& $git remote -v

Write-Host "=== Pushing ===" -ForegroundColor Cyan
& $git push origin main

Write-Host "Push complete!" -ForegroundColor Green
