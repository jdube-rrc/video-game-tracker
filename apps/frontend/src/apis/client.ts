import type { VideoGame } from '../data/video_games';
import type { Favorite } from '../types/Favorite';

// Normalize API origin so env values work with or without protocol.
const rawApiBaseUrl = String(import.meta.env.VITE_API_BASE_URL ?? '').trim();
const normalizedApiOrigin = rawApiBaseUrl
  ? (rawApiBaseUrl.startsWith('http://') || rawApiBaseUrl.startsWith('https://')
    ? rawApiBaseUrl
    : `https://${rawApiBaseUrl}`)
  : '';
const BASE_URL = `${normalizedApiOrigin.replace(/\/+$/, '')}/api`;

// ============ Games ============

export async function fetchGames(): Promise<VideoGame[]> {
  const response: Response = await fetch(`${BASE_URL}/games`);

  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }

  const json = await response.json();
  // Accept both { data, message } and { status, data, message }
  if ('data' in json) {
    return json.data;
  }
  throw new Error('Unexpected response format');
}

export async function getGameById(gameId: number): Promise<VideoGame> {
  const response: Response = await fetch(`${BASE_URL}/games/${gameId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch game with id ${gameId}`);
  }

  const json = await response.json();
  if ('data' in json) {
    return json.data;
  }
  throw new Error('Unexpected response format');
}

export async function updateGameById(
  gameId: number,
  updates: Partial<Omit<VideoGame, 'id'>>
): Promise<VideoGame> {
  const response: Response = await fetch(`${BASE_URL}/games/${gameId}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to update game with id ${gameId}`);
  }

  const json = await response.json();
  if ('data' in json) {
    return json.data;
  }
  throw new Error('Unexpected response format');
}

// ============ Favorites ============

export async function fetchFavorites(userId: number): Promise<Favorite[]> {
  const response: Response = await fetch(`${BASE_URL}/favorites/${userId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch favorites for user ${userId}`);
  }

  const json = await response.json();
  if ('data' in json) {
    return json.data;
  }
  throw new Error('Unexpected response format');
}

export async function addFavorite(userId: number, gameId: number): Promise<Favorite> {
  const response: Response = await fetch(`${BASE_URL}/favorites`, {
    method: 'POST',
    body: JSON.stringify({ userId, gameId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to add favorite`);
  }

  const json = await response.json();
  if ('data' in json) {
    return json.data;
  }
  throw new Error('Unexpected response format');
}

export async function removeFavorite(userId: number, gameId: number): Promise<void> {
  const response: Response = await fetch(`${BASE_URL}/favorites/${userId}/${gameId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to remove favorite`);
  }
}
