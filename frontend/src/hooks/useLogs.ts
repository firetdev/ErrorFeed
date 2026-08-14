import { useEffect, useState } from 'react';
import type { Log } from '../types/log';
import { getLogs, connectToLogStream } from '../api/logs';

export default function useLogs(): Log[] {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    getLogs().then(setLogs);

    const socket = connectToLogStream();

    socket.onmessage = event => {
      const log: Log = JSON.parse(event.data);

      setLogs(previous => [
        ...previous,
        log
      ]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return logs;
}