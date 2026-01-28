import type { Dispatch, SetStateAction } from 'react';
import userAvatar from '../../../assets/user.png';
import { FavoriteGames } from './FavoriteGames';
import { type VideoGame } from '../../../data/video_games';

type UserProfileProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
  favorites?: VideoGame[];
  onToggleFavorite?: (game: VideoGame) => void;
};

function UserProfile({ visits, setVisits, favorites = [], onToggleFavorite = () => {} }: UserProfileProps) {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 lg:col-span-1">
          <div className="flex items-center justify-center w-full h-full">
            <img src={userAvatar} alt="User Avatar" className="rounded-lg" />
          </div>
        </div>

        <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 lg:col-span-2">
          <p className="text-neutral-400 leading-relaxed">
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 min-h-96">
        <FavoriteGames favorites={favorites} onToggleFavorite={onToggleFavorite} />
      </div>
    </section>
  );
}

export default UserProfile;
