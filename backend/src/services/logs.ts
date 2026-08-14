import type { Log } from '../types/log.js';
import { broadcastLog } from '../websocket/server.js';

let logs: Log[] = [];

export function getLogs(): Log[] {
  return logs;
}

export function addLog(log: Log): void {
  logs.push(log);
  broadcastLog(log);
}

export function clearLogs(): void {
  logs.length = 0;
}