$gitExe = "C:\Users\user\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
Set-Location "D:\PUMPKIN\Spoonmap"

Write-Host "Running sync_data.ps1..." -ForegroundColor Cyan
& ".\sync_data.ps1"

$version = Get-Date -Format "yyyyMMddHHmm"
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$html = [System.IO.File]::ReadAllText("index.html", [System.Text.Encoding]::UTF8)
$updatedHtml = $html -replace '\?v=[\w\d]+', "?v=$version"
if ($html -ne $updatedHtml) {
    [System.IO.File]::WriteAllText("index.html", $updatedHtml, $utf8NoBOM)
    Write-Host "index.html version tags updated to $version" -ForegroundColor Green
}

Write-Host "Adding all files..." -ForegroundColor Cyan
& $gitExe add .

$msg = "Update Spoonmap site & data: " + (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
Write-Host "Committing: $msg" -ForegroundColor Cyan
& $gitExe commit -m $msg

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
& $gitExe push origin main

Write-Host "`nDone! Site will be updated in about 1 minute." -ForegroundColor Green
