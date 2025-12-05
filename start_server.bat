@echo off
echo Starting VibeBuy Backend Server...
cd VibeBuy_backend
if not exist node_modules (
    echo Installing dependencies...
    call npm install
)
node server.js
pause
