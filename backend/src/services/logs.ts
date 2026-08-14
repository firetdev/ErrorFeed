import type { Log } from '../types/log.ts';

let logs: Log[] = [];

export function getLogs(): Log[] {
  return logs;
}

export function addLog(log: Log): void {
  logs.push(log);
}