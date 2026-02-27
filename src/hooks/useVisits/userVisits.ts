import { useSyncExternalStore } from "react";
import { visitsService } from "../../services/visitsService";

/**
 * Presentation hook for shared visits state.
 * Subscribes to visit updates exposed by the service layer.
 *
 * @returns `visitCount` for display and `incrementVisits` for UI actions.
 */
export function useVisits() {
  const visitCount = useSyncExternalStore(
    visitsService.subscribe,
    visitsService.getVisitCount
  );

  return {
    visitCount,
    incrementVisits: visitsService.incrementVisits,
  };
}
