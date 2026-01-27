import type { Dispatch, SetStateAction } from 'react';
import userAvatar from '../../../assets/user.png';

type UserProfileProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
};

function UserProfile({ visits, setVisits }: UserProfileProps) {
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>

      <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 min-h-96"></div>
    </section>
  );
}

export default UserProfile;
