import userAvatar from '../../../assets/user.png';
import { FavoriteGames } from './FavoriteGames';
import { type VideoGame } from '../../../data/video_games';

interface UserProfileProps {
  favorites?: VideoGame[];
  onToggleFavorite?: (game: VideoGame) => void;
}

function UserProfile({ favorites = [], onToggleFavorite = () => {} }: UserProfileProps) {
  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 text-3xl font-bold">
        User's Profile
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
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
