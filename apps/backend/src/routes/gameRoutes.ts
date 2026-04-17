import { Router } from 'express';
import { createGame, getAllGames, getGameById, searchGames, updateGame } from '../controllers/gameController.js';
import { requireClerkAuth } from '../middleware/requireClerkAuth.js';
import { gameSchema, updateGameSchema, validateRequest } from '../validations/index.js';

const router = Router();

// POST create game
router.post('/', requireClerkAuth, validateRequest(gameSchema), createGame);

// GET all games
router.get('/', getAllGames);

// Search games by query
router.get('/search', searchGames);

// GET game by ID
router.get('/:id', getGameById);

// PUT update game by ID
router.put('/:id', requireClerkAuth, validateRequest(updateGameSchema), updateGame);

export default router;
