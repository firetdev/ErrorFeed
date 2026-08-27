import { useEffect, useRef } from 'react';
import type { Log } from '../types/log';
import LogMessage from './LogMessage';
import './Terminal.css';

interface TerminalProps {
  logs: Log[];
}

export default function Terminal({ logs }: TerminalProps) {
  const logsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);
  
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
        <div ref={logsEndRef} />
      </div>
    </div>
  );
}