param([int]$Port = 8000)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
    $listener.Start()
} catch {
    Write-Host "[!] Port $Port is already in use or requires permissions." -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

Write-Host "===================================================" -ForegroundColor Green
Write-Host " Spoonmap Local Server Started Successfully!" -ForegroundColor Cyan
Write-Host " Address: http://localhost:$Port" -ForegroundColor Yellow
Write-Host " Keep this window open while using the app." -ForegroundColor Gray
Write-Host "===================================================" -ForegroundColor Green

# Open browser automatically
try {
    Start-Process "http://localhost:$Port"
} catch {
    # Ignore if browser open fails
}

$mimeMap = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        if ($path -eq "/") { $path = "/index.html" }

        $localPath = Join-Path $PSScriptRoot ($path.TrimStart('/').Replace('/', '\'))

        if (Test-Path $localPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $contentType = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { "application/octet-stream" }

            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFoundText = "404 Not Found"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($notFoundText)
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        $response.OutputStream.Close()
    }
} catch {
    # Silence exit errors on shutdown
} finally {
    if ($listener.IsListening) { $listener.Stop() }
}
