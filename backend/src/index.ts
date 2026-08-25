import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import logsRouter from './routes/logs.js';
import { initializeWebSocketServer } from './websocket/server.js';
#
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use('/api/logs', logsRouter);

const server = createServer(app);

initializeWebSocketServer(server);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});