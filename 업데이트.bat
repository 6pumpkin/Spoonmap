@echo off
chcp 65001 > nul
echo ===================================================
echo   Spoonmap GitHub 자동 업데이트기
echo ===================================================
echo.

echo 1. 업데이트 및 캐시 초기화 진행 중...
powershell -ExecutionPolicy Bypass -File Update-Site.ps1
echo.

echo ===================================================
echo   업데이트가 완료되었습니다! (창을 닫으셔도 됩니다)
echo ===================================================
pause
