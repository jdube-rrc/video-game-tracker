import { useState } from 'react';

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