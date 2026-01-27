import type { Dispatch, SetStateAction } from 'react';

type RegistrationProps = {
  visits: number;
  setVisits: Dispatch<SetStateAction<number>>;
};

function Registration({ visits, setVisits }: RegistrationProps) {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-white">Registration</h1>
      <p className="text-neutral-400">Registration page coming soon...</p>
      <div className="space-y-2">
        <p className="text-neutral-400">Shared visits counter: {visits}</p>
        <button
          type="button"
          className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
          onClick={() => setVisits((current) => current + 1)}
        >
          Add visit
        </button>
      </div>
    </div>
  );
}

export default Registration;
