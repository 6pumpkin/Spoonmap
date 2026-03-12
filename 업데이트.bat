@echo off
chcp 65001 > nul
echo ===================================================
echo   Spoonmap GitHub 자동 업데이트기
echo ===================================================
echo.

echo 1. 변경된 파일들을 장바구니에 담는 중...
git add .
echo.

echo 2. 변경 내용 포장 중...
git commit -m "Auto Update: %date% %time%"
echo.

echo 3. GitHub로 쏘아 올리는 중...
git push origin main
echo.

echo ===================================================
echo   업데이트가 완료되었습니다! (창을 닫으셔도 됩니다)
echo ===================================================
pause
