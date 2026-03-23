#!/bin/bash

echo "Starting all 7 Altered States variants..."

# 1. Start Vite apps (React)
echo "Starting Lovable on http://localhost:5173 ..."
npm run dev --prefix apps/lovable -- --host 0.0.0.0 > /dev/null 2>&1 &
PID_LOVABLE=$!

echo "Starting Bolt on http://localhost:5174 ..."
npm run dev --prefix apps/bolt -- --host 0.0.0.0 > /dev/null 2>&1 &
PID_BOLT=$!

# 2. Start Static HTML apps (using Python's built-in HTTP server)
echo "Starting Ahana on http://localhost:8001 ..."
python3 -m http.server 8001 --bind 0.0.0.0 --directory apps/ahana > /dev/null 2>&1 &
PID_AHANA=$!

echo "Starting Meditative on http://localhost:8002 ..."
python3 -m http.server 8002 --bind 0.0.0.0 --directory apps/meditative > /dev/null 2>&1 &
PID_MEDITATIVE=$!

echo "Starting Yoga on http://localhost:8003 ..."
python3 -m http.server 8003 --bind 0.0.0.0 --directory apps/yoga > /dev/null 2>&1 &
PID_YOGA=$!

echo "Starting Yogalax on http://localhost:8004 ..."
python3 -m http.server 8004 --bind 0.0.0.0 --directory apps/yogalax > /dev/null 2>&1 &
PID_YOGALAX=$!

echo "Starting Zogin on http://localhost:8005 ..."
python3 -m http.server 8005 --bind 0.0.0.0 --directory apps/zogin > /dev/null 2>&1 &
PID_ZOGIN=$!

echo ""
echo "======================================================="
echo "All 7 sites are running in the background!"
echo "Click the links below to open them (or check your IDE's 'Ports' tab):"
echo "======================================================="
echo "1. Lovable:    http://localhost:5173"
echo "2. Bolt:       http://localhost:5174"
echo "3. Ahana:      http://localhost:8001"
echo "4. Meditative: http://localhost:8002"
echo "5. Yoga:       http://localhost:8003"
echo "6. Yogalax:    http://localhost:8004"
echo "7. Zogin:      http://localhost:8005"
echo "======================================================="
echo "Press Ctrl+C to stop all servers."

# Trap Ctrl+C to kill all background processes
trap "echo 'Stopping all servers...'; kill $PID_LOVABLE $PID_BOLT $PID_AHANA $PID_MEDITATIVE $PID_YOGA $PID_YOGALAX $PID_ZOGIN; exit" INT

# Wait for all background processes
wait
