import type { Log } from '../types/log';
import LogMessage from './LogMessage';
import './Terminal.css';

interface TerminalProps {
  logs: Log[];
}

export default function Terminal({ logs }: TerminalProps) {
  return (
    <div className="terminal">
      <div id="terminal-header">Alert Terminal</div>
      <div id="logs">
        {logs.map(log => (
          <LogMessage
            key={log.id}
            log={log}
          />
        ))}
      </div>
    </div>
  );
}