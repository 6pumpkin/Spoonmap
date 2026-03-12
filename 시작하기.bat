@echo off
echo Spoonmap 로컬 서버를 실행합니다...
echo 이 창을 끄지 마세요! 지도를 보려면 이 창이 켜져 있어야 합니다.
echo.
echo 주소: http://localhost:8000
echo.
python -m SimpleHTTPServer 8000
if %errorlevel% neq 0 (
    python -m http.server 8000
)
pause
