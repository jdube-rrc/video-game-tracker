import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import gameRoutes from './routes/gameRoutes.js';
import platformHardwareRoutes from './routes/platformHardwareRoutes.js';

dotenv.config();

const app = express();

const getAllowedOrigins = (): string[] => {
  const rawOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URLS]
    .filter(Boolean)
    .join(',');

  const origins = rawOrigins
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  if (origins.length > 0) {
    return origins;
  }

  return ['http://localhost:5173'];
};

const allowedOrigins = getAllowedOrigins();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
}));

app.use(express.json());

app.use('/api/games', gameRoutes);
app.use('/api/hardware-logs', platformHardwareRoutes);

// Prevents CSP errors for favicon requests
app.get('/favicon.ico', (_req, res) => res.status(204).end());

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;