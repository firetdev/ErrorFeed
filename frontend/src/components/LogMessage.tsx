import type { Log } from '../types/log.ts';

interface LogMessageProps {
  log: Log;
}

export default function LogMessage({ log }: LogMessageProps) {
  const getFullText = () => '[' + log.timestamp + '] ' + log.type + ': ' + log.message;

  return (
    <div
      className="log-message"
      style={{ color: log.type === 'error' ? 'red' : log.type === 'warn' ? 'orange' : 'white' }}
      key={log.id}
    >
      {getFullText()}
    </div>
  );
};