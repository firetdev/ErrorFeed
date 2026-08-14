export type Log = {
    id: string;
    timestamp: string;
    type: 'info' | 'warn' | 'error';
    message: string;
}