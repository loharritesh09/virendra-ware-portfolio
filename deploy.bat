@echo off
cd /d "%~dp0"
echo ========================================================
echo   Deploying Virendra Ware Portfolio to Vercel
echo ========================================================
echo.
echo 1. If this is your first time, Vercel will ask you to login.
echo 2. Press Enter to accept the defaults.
echo.
call npx vercel --prod
echo.
pause
