#!/bin/bash
curl -X POST http://localhost:3000/api/logs \
  -H "Content-Type: application/json" \
  -d '{"id":"test-info-2","timestamp":"2026-08-26T17:35:00Z","type":"info","message":"Standard information log"}'
curl -X POST http://localhost:3000/api/logs \
  -H "Content-Type: application/json" \
  -d '{"id":"test-warn-1","timestamp":"2026-08-26T17:35:00Z","type":"warn","message":"High memory usage detected"}'
 curl -X POST http://localhost:3000/api/logs \
  -H "Content-Type: application/json" \
  -d '{"id":"test-error-1","timestamp":"2026-08-26T17:35:00Z","type":"error","message":"Database connection failed"}'
