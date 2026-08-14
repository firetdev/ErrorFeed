import type { Log } from '../types/log';
import LogMessage from './LogMessage';

interface TerminalProps {
  logs: Log[];
}

export default function Terminal({ logs }: TerminalProps) {
  return (
    <div className="terminal">
      {logs.map(log => (
        <LogMessage
          key={log.id}
          log={log}
        />
      ))}
    </div>
  );
}