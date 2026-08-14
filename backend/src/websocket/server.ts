import { WebSocketServer, WebSocket } from 'ws';
import type { Server } from 'http';
import type { Log } from '../types/log.js';

const clients = new Set<WebSocket>();

export function initializeWebSocketServer(server: Server): void {
  const wss = new WebSocketServer({ server });

  wss.on('connection', (socket) => {
    console.log('Client connected');

    clients.add(socket);

    socket.on('close', () => {
      console.log('Client disconnected');
      clients.delete(socket);
    });
  });
}

export function broadcastLog(log: Log): void {
  const message = JSON.stringify(log);

  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }
}