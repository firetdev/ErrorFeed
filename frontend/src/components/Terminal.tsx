import type { Log } from '../types/log';
import LogMessage from './LogMessage';

export default function Terminal( logs: Log[] ) {
  return (
    <div className="terminal">
      {logs.map(log => (
        <LogMessage
          log={log}
        />
      ))}
    </div>
  );
};