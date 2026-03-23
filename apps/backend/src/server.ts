import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import platformHardwareRoutes from './routes/platformHardwareRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration - allow frontend requests
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use('/api/platform-hardware', platformHardwareRoutes);

// Prevents CSP errors for favicon requests
app.get('/favicon.ico', (_req, res) => res.status(204).end());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
