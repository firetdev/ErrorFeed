import { Router } from 'express';
import { addLog, getLogs } from '../services/logs.js';

const router = Router();

router.get('/', (req, res) => {
  res.json(getLogs());
});

router.post('/', (req, res) => {
  const log = req.body;

  addLog(log);

  res.status(201).json(log);
});

export default router;