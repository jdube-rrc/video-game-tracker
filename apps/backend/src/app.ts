import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import gameRoutes from './routes/gameRoutes.js';
import platformHardwareRoutes from './routes/platformHardwareRoutes.js';

dotenv.config();

const app = express();

/**
 * CLERK INTEGRATION TODO:
 * 1. Install @clerk/express: `npm install @clerk/express`
 * 2. Import clerkMiddleware: `import { clerkMiddleware } from '@clerk/express'`
 * 3. Use clerkMiddleware: `app.use(clerkMiddleware())`
 * 4. Implement findOrCreateUser middleware to sync Clerk IDs to the 'User' model
 *    created in the 3NF migration.
 */
// app.use(clerkMiddleware());
const escapeRegex = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Get allowed origins from env and add Vercel preview/prod subdomains for frontend project
const getAllowedOrigins = (): (string|RegExp)[] => {
  const rawOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URLS]
    .filter(Boolean)
    .join(',');

  const origins = rawOrigins
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  // Add Vercel wildcard for frontend project if any .vercel.app origin is present
  const vercelPatterns: RegExp[] = origins
    .map((origin) => {
      try {
        const url = new URL(origin);
        if (url.hostname.endsWith('.vercel.app')) {
          // Allow all preview/prod subdomains for this project
          const [projectSlug] = url.hostname.split('.');
          return new RegExp(`^https://${escapeRegex(projectSlug)}(?:-[a-z0-9-]+)?\\.vercel\\.app$`, 'i');
        }
      } catch {}
      return null;
    })
    .filter((r): r is RegExp => !!r);

  return [...origins, ...vercelPatterns, 'http://localhost:5173'];
};

const allowedOrigins = getAllowedOrigins();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }
    for (const allowed of allowedOrigins) {
      if (typeof allowed === 'string' && allowed === origin) {
        callback(null, true);
        return;
      }
      if (allowed instanceof RegExp && allowed.test(origin)) {
        callback(null, true);
        return;
      }
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