import { useState } from 'react';

/**
 * Custom hook to manage the user's visit count.
 *
 * @returns An object containing the current visit count and a function to increment it.
 */
export function useVisits() {
  const [visitCount, setVisitCount] = useState(0);

  const incrementVisits = () => {
    setVisitCount((prev) => prev + 1);
  };

  return {
    visitCount,
    incrementVisits
  };
}