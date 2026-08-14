import type { Log } from '../types/log';

export async function getLogs(): Promise<Log[]> {
  const response = await fetch('/api/logs');

  if (!response.ok) {
    throw new Error('Failed to fetch logs');
  }

  return response.json();
}

export function connectToLogStream(): WebSocket {
  return new WebSocket('ws://localhost:3000');
}