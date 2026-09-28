@echo off
chcp 65001 > nul
title Spoonmap 모바일 시뮬레이터 실행기

echo ===================================================
echo   Spoonmap 모바일 뷰포트 시뮬레이터 준비 중...
echo ===================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command "& { $port = 8000; $targetUrl = 'http://localhost:' + $port + '/mobile_preview.html'; $tcp = New-Object System.Net.Sockets.TcpClient; $running = $false; try { $tcp.Connect('127.0.0.1', $port); $running = $true; $tcp.Close(); } catch { $running = $false; }; if ($running) { Write-Host '  [V] 로컬 웹서버가 이미 실행 중입니다.' -ForegroundColor Green; Write-Host ('  [>] 시뮬레이터를 엽니다: ' + $targetUrl) -ForegroundColor Cyan; Start-Process $targetUrl; } else { Write-Host '  [>] 로컬 웹서버를 시작하고 모바일 시뮬레이터를 엽니다...' -ForegroundColor Cyan; Start-Process powershell -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-File', ('""' + (Join-Path $PSScriptRoot 'server.ps1') + '""'), '-Path', 'mobile_preview.html'; } }"
