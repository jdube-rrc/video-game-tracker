import { useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FavoriteGames } from "./FavoriteGames";
import { type VideoGame } from "../../../data/video_games";
import { type UserProfileData } from "../../../App";
import { getAvatarError, readFileAsDataUrl, getBioError, MAX_BIO_LENGTH } from "../../../services/profileService";

type UserProfileProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;

  favorites?: VideoGame[];
  onToggleFavorite?: (game: VideoGame) => void;

  user: UserProfileData;
  isEditing: boolean;
  isSaving: boolean;
  saveError: string | null;
  onUpdateUser: (data: Partial<UserProfileData>) => void;
};

/**
 * Renders the user profile page, including a shared visits counter, avatar, bio,
 * and favorite games section.
 * 
 * @param visits - The current number of visits.
 * @param setVisits - Function to update the number of visits.
 * @param favorites - List of favorite video games.
 * @param onToggleFavorite - Function to toggle a game's favorite status.
 * @param user - The user profile data.
 * @param isEditing - Whether the profile is in editing mode.
 * @param onUpdateUser - Function to update the user profile data.
 * 
 * @returns The UserProfile component. 
 */

function UserProfile({
  visits,
  setVisits,
  favorites = [],
  onToggleFavorite = () => {},
  user,
  isEditing,
  isSaving,
  saveError,
  onUpdateUser,
}: UserProfileProps) {
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const displayName = user.username.trim() || 'Player One';

  const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = getAvatarError(file);
    if (error) {
      setAvatarError(error);
      return;
    }

    try {
      const dataUrl = await readFileAsDataUrl(file);
      onUpdateUser({ avatarUrl: dataUrl, avatarFile: file });
      setAvatarError(null);
    } catch {
      setAvatarError('Failed to process image.');
    }
  };

  const bioError = getBioError(user.bio);

  return (
    <section className="space-y-8">
      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center space-y-2">
        <p className="text-neutral-400">Shared visits counter: {visits}</p>
        <button
          type="button"
          className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
          onClick={() => setVisits((current) => current + 1)}
        >
          Add visit
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 text-3xl font-bold">
        Your Profile
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 lg:col-span-1">
          <div className="flex flex-col items-center justify-center w-full h-full gap-4">
            <div className="w-48 aspect-square relative">
              <img
                src={user.avatarUrl}
                alt="User Avatar"
                className="w-full h-full rounded-lg object-cover bg-neutral-950 block"
              />
            </div>

            {isEditing && (
              <div className="w-full">
                <label className="text-xs text-neutral-500 uppercase font-bold tracking-wider mb-1 block">
                  Upload Avatar
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded p-2 text-sm text-neutral-200 focus:border-neutral-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-800 file:text-neutral-200 hover:file:bg-neutral-700 transition"
                />
                {avatarError && (
                  <p className="text-xs text-rose-400 mt-1">{avatarError}</p>
                )}
                <p className="text-xs text-neutral-500 mt-2">
                  Avatar changes are saved when you press Save Profile.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Profile Details</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Your username and avatar are loaded from your account and saved when you finish editing.
              </p>
            </div>

            {saveError ? (
              <div className="rounded-md border border-rose-500/50 bg-rose-950/40 px-4 py-3 text-sm text-rose-200">
                {saveError}
              </div>
            ) : null}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-200" htmlFor="username">
                Username
              </label>
              {isEditing ? (
                <input
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={(event) => onUpdateUser({ username: event.target.value })}
                  className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 focus:border-neutral-400 focus:outline-none"
                />
              ) : (
                <p className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300">
                  {user.username || 'Not set'}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-200" htmlFor="emailAddress">
                Email Address
              </label>
              <p
                id="emailAddress"
                className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300"
              >
                {user.email || 'No primary email available'}
              </p>
              <p className="text-xs text-neutral-500">
                Password changes stay in the built-in account management flow.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white">About Me</h4>

              {isEditing ? (
                <div className="space-y-2">
                  <textarea
                    value={user.bio}
                    onChange={(e) => onUpdateUser({ bio: e.target.value })}
                    className={`w-full h-48 bg-neutral-950 border rounded p-4 text-neutral-200 focus:border-neutral-500 outline-none resize-none ${
                      bioError ? 'border-rose-500' : 'border-neutral-700'
                    }`}
                    placeholder="Write something about yourself..."
                    maxLength={MAX_BIO_LENGTH + 50}
                  />
                  <div className="flex justify-between text-xs">
                    {bioError ? (
                      <span className="text-rose-400">{bioError}</span>
                    ) : (
                      <span className="text-neutral-500">Tell others about your gaming interests</span>
                    )}
                    <span className={user.bio.length > MAX_BIO_LENGTH ? 'text-rose-400' : 'text-neutral-500'}>
                      {user.bio.length}/{MAX_BIO_LENGTH}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-xl font-semibold text-white">{displayName}</p>
                  <p className="text-neutral-400 leading-relaxed whitespace-pre-wrap">
                    {user.bio}
                  </p>
                </>
              )}
            </div>

            {isSaving ? (
              <p className="text-sm text-neutral-400">Saving your profile changes...</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 min-h-96">
        <FavoriteGames
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </section>
  );
}

export default UserProfile;
