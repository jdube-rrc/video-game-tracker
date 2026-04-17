import type { Request, Response } from 'express';
import { getAuth } from '@clerk/express';

import favoriteService from '../services/favoriteService.js';

const getAuthenticatedUserId = (req: Request): string | null => {
  const { userId } = getAuth(req);
  return userId ?? null;
};

export const getCurrentUserFavorites = async (req: Request, res: Response): Promise<void> => {
  try {
    const clerkUserId = getAuthenticatedUserId(req);

    if (!clerkUserId) {
      res.status(401).json({
        status: 'error',
        message: 'Authentication is required for this operation.',
      });
      return;
    }

    const favorites = await favoriteService.getFavoriteGames(clerkUserId);

    res.status(200).json({
      status: 'success',
      data: favorites,
      message: 'Favorites retrieved successfully.',
    });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while fetching favorites.',
    });
  }
};

export const addCurrentUserFavorite = async (req: Request, res: Response): Promise<void> => {
  try {
    const clerkUserId = getAuthenticatedUserId(req);
    const gameId = Number.parseInt(req.params.gameId, 10);

    if (!clerkUserId) {
      res.status(401).json({
        status: 'error',
        message: 'Authentication is required for this operation.',
      });
      return;
    }

    if (Number.isNaN(gameId)) {
      res.status(400).json({
        status: 'error',
        message: 'Invalid game ID.',
      });
      return;
    }

    await favoriteService.addFavoriteGame(clerkUserId, gameId);

    res.status(201).json({
      status: 'success',
      message: 'Favorite added successfully.',
    });
  } catch (error) {
    console.error('Error adding favorite:', error);

    if (error instanceof Error && error.message === 'Game not found.') {
      res.status(404).json({
        status: 'error',
        message: error.message,
      });
      return;
    }

    res.status(500).json({
      status: 'error',
      message: 'Internal server error while adding favorite.',
    });
  }
};

export const removeCurrentUserFavorite = async (req: Request, res: Response): Promise<void> => {
  try {
    const clerkUserId = getAuthenticatedUserId(req);
    const gameId = Number.parseInt(req.params.gameId, 10);

    if (!clerkUserId) {
      res.status(401).json({
        status: 'error',
        message: 'Authentication is required for this operation.',
      });
      return;
    }

    if (Number.isNaN(gameId)) {
      res.status(400).json({
        status: 'error',
        message: 'Invalid game ID.',
      });
      return;
    }

    await favoriteService.removeFavoriteGame(clerkUserId, gameId);

    res.status(200).json({
      status: 'success',
      message: 'Favorite removed successfully.',
    });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while removing favorite.',
    });
  }
};