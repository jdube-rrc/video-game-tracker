import { Request, Response } from 'express';
import gameService from '../services/gameService.js';
import type { VideoGame } from '@prisma/client';

/*
  The createGame controller handles POST requests to /games. It validates the request body, 
  calls the gameService to create a new game, and returns the result. If the request body is invalid, 
  if a game with the same ID already exists, or if any error occurs during creation, 
  it responds with appropriate error messages and status codes.
*/
export const createGame = async (req: Request, res: Response): Promise<void> => {
  try {
    const newGame = req.body as VideoGame;
    const createdGame = await gameService.createGame(newGame);

    if (!createdGame) {
      res.status(409).json({
        status: 'error',
        message: 'A game with this ID already exists',
      });
      return;
    }

    res.status(201).json({
      status: 'success',
      data: createdGame,
      message: 'Game created successfully',
    });
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while creating game.',
    });
  }
};

/*
  The getAllGames controller handles GET requests to /games. It calls the gameService to retrieve all games and returns the result. 
  If any error occurs during retrieval, it responds with an appropriate error message and status code.
*/
export const getAllGames = async (req: Request, res: Response): Promise<void> => {
  try {
    const games = await gameService.getAllGames();
    res.status(200).json({
      status: 'success',
      data: games,
      message: 'Games retrieved successfully',
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while fetching games.',
    });
  }
};

/*
  The getGameById controller handles GET requests to /games/:id. It validates the game ID parameter, 
  calls the gameService to retrieve the game details, and returns the result. If the game ID is invalid, 
  if the game is not found, or if any error occurs during retrieval, it responds with appropriate error messages and status codes.
*/
export const getGameById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const gameId = parseInt(id, 10);

    if (isNaN(gameId)) {
      res.status(400).json({
        status: 'error',
        message: 'Invalid game ID',
      });
      return;
    }

    const game = await gameService.getGameById(gameId);

    if (!game) {
      res.status(404).json({
        status: 'error',
        message: 'Game not found',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      data: game,
      message: 'Game retrieved successfully',
    });
  } catch (error) {
    console.error('Error fetching game:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while fetching game.',
    });
  }
};

/*
  The searchGames controller handles GET requests to /games/search?q=searchTerm. 
  It validates the presence of the query parameter, calls the gameService to perform the search, 
  and returns the results. If the query parameter is missing or if any error occurs during the search, 
  it responds with appropriate error messages and status codes.
*/
export const searchGames = async (req: Request, res: Response): Promise<void> => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      res.status(400).json({
        status: 'error',
        message: 'Search query (q) is required',
      });
      return;
    }

    const games = await gameService.searchGames(q);

    res.status(200).json({
      status: 'success',
      data: games,
      message: 'Games searched successfully',
    });
  } catch (error) {
    console.error('Error searching games:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while searching games.',
    });
  }
};

/*
  The updateGame controller handles PUT requests to /games/:id. It validates the game ID parameter and the request body, 
  calls the gameService to update the game details, and returns the result. If the game ID is invalid, if the game is not found, 
  if the request body is invalid, or if any error occurs during the update, it responds with appropriate error messages and status codes.
*/
export const updateGame = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const gameId = parseInt(id, 10);

    if (isNaN(gameId)) {
      res.status(400).json({
        status: 'error',
        message: 'Invalid game ID',
      });
      return;
    }

    const updated = await gameService.updateGame(gameId, req.body as Partial<VideoGame>);

    if (!updated) {
      res.status(404).json({
        status: 'error',
        message: 'Game not found',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      data: updated,
      message: 'Game updated successfully',
    });
  } catch (error) {
    console.error('Error updating game:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error while updating game.',
    });
  }
};
