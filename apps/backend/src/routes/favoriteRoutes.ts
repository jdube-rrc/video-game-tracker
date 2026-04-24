import { Router } from 'express';

import {
  addCurrentUserFavorite,
  getCurrentUserFavorites,
  removeCurrentUserFavorite,
} from '../controllers/favoriteController.js';
import { requireClerkAuth } from '../middleware/requireClerkAuth.js';

const router = Router();

router.get('/me', requireClerkAuth, getCurrentUserFavorites);
router.post('/me/:gameId', requireClerkAuth, addCurrentUserFavorite);
router.delete('/me/:gameId', requireClerkAuth, removeCurrentUserFavorite);

export default router;