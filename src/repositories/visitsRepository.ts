let visitCount = 0;
const listeners = new Set<() => void>();

/**
 * Notifies all subscribers that the visits data changed.
 */
const notify = () => {
  listeners.forEach((listener) => listener());
};

/**
 * Repository for persisted-in-memory visits state.
 * This layer is data access only.
 */
export const visitsRepository = {
  /**
   * Reads the current visit count.
   *
   * @returns Current shared visit count.
   */
  getVisitCount: (): number => visitCount,
  /**
   * Updates the stored visit count by incrementing once.
   *
   * @returns Updated visit count after increment.
   */
  incrementVisitCount: (): number => {
    visitCount += 1;
    notify();
    return visitCount;
  },
  /**
   * Subscribes to repository data changes.
   *
   * @param listener - Callback invoked whenever visits data changes.
   * @returns Cleanup function to unsubscribe.
   */
  subscribe: (listener: () => void): (() => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
