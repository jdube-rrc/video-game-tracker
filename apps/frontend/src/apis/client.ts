import type { VideoGame } from '../data/video_games';

export type TokenProvider = () => Promise<string | null>;

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
  updates: Partial<Omit<VideoGame, 'id'>>,
  getToken?: TokenProvider,
): Promise<VideoGame> {
  const token = getToken ? await getToken() : null;

  const response: Response = await fetch(`${BASE_URL}/games/${gameId}`, {
    method: 'PUT',
    body: JSON.stringify(updates),
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
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

export async function fetchCurrentUserFavorites(getToken: TokenProvider): Promise<VideoGame[]> {
  const token = await getToken();

  const response: Response = await fetch(`${BASE_URL}/favorites/me`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch favorites for the current user');
  }

  const json = await response.json();
  if ('data' in json) {
    return json.data;
  }
  throw new Error('Unexpected response format');
}

export async function addCurrentUserFavorite(gameId: number, getToken: TokenProvider): Promise<void> {
  const token = await getToken();

  const response: Response = await fetch(`${BASE_URL}/favorites/me/${gameId}`, {
    method: 'POST',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to add favorite`);
  }
}

export async function removeCurrentUserFavorite(gameId: number, getToken: TokenProvider): Promise<void> {
  const token = await getToken();

  const response: Response = await fetch(`${BASE_URL}/favorites/me/${gameId}`, {
    method: 'DELETE',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to remove favorite`);
  }
}
