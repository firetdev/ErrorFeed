import type { Log } from '../types/log.ts';

export default function LogMessage( log: Log ) {
  const getFullText = () => '[' + log.timestamp + '] ' + log.type + ': ' + log.message;

  return (
      <div
        className="log-message"
        style={{ color: log.type === 'error' ? 'red' : log.type === 'warn' ? 'orange' : 'white' }}>
        {getFullText()}
      </div>
    );
}