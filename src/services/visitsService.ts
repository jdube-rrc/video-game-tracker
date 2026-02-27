import { visitsRepository } from "../repositories/visitsRepository";

/**
 * Service for visits business operations.
 * This layer wraps repository reads/writes for UI-facing logic.
 */
export const visitsService = {
  /**
   * Gets the shared visit count.
   *
   * @returns Current shared visit count.
   */
  getVisitCount: (): number => visitsRepository.getVisitCount(),
  /**
   * Increments the shared visit count by one.
   *
   * @returns Updated visit count.
   */
  incrementVisits: (): number => visitsRepository.incrementVisitCount(),
  /**
   * Subscribes to visit-count changes.
   *
   * @param listener - Callback triggered when count changes.
   * @returns Cleanup function to unsubscribe.
   */
  subscribe: (listener: () => void): (() => void) => visitsRepository.subscribe(listener),
};
