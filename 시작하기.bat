@echo off
title Spoonmap Local Server

echo ===================================================
echo   Spoonmap Local Web Server Running...
echo   http://localhost:8000
echo ===================================================
echo.

powershell -NoExit -ExecutionPolicy Bypass -File "%~dp0server.ps1"
