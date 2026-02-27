import { useVisits } from '../../../hooks/useVisits/userVisits';

/**
 * Renders the home page, including a shared visits counter.
 * 
 * @returns The HomePage component. 
 */
function HomePage() {
  const { visitCount, incrementVisits } = useVisits();

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-white">Welcome to Video Game Tracker</h1>
      <p className="text-neutral-400">Home page content coming soon...</p>
      <div className="space-y-2">
        <p className="text-neutral-400">Shared visits counter: {visitCount}</p>
        <button
          type="button"
          className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200"
          onClick={incrementVisits}
        >
          Add visit
        </button>
      </div>
    </div>
  );
}

export default HomePage;
