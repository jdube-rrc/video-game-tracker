import { useState, useEffect } from "react";
import { useAuth } from '@clerk/clerk-react';
import { platformHardwareRepository } from "../../repositories/PlatformHardwareRepository";
import {
  type CreateHardwareLogInput,
  type HardwareLog,
} from "../../data/PlatformHardware";

/**
 * Custom hook to manage hardware compatibility logs.
 * Provides functionality to fetch existing logs and submit new ones.
 * Handles loading states and error management.
 *
 * @returns {Object} An object containing:
 * @returns {HardwareLog[]} logs - The current array of compatibility logs
 * @returns {boolean} isLoading - Indicates if the data is currently being fetched
 * @returns {string | null} error - Holds any error messages from fetching or adding
 * @returns {function} addLog - Function to submit a new log to the service
 * @returns {function} updateLog - Function to update an existing log
 * @returns {function} deleteLog - Function to delete an existing log
 */
export function useHardwareLogs() {
  const { getToken } = useAuth();
  const [logs, setLogs] = useState<HardwareLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches all hardware logs from the repository asynchronously.
   * Updates state with fetched data or error message.
   */
  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const data = await platformHardwareRepository.getAll();
      setLogs(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch hardware logs.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Effect hook to fetch logs when the component mounts.
   */
  useEffect(() => {
    fetchLogs();
  }, []);

  /**
   * Submits a new hardware log to the repository.
   * Refreshes the log list when a submission is successful.
   *
   * @param {CreateHardwareLogInput} newLogData - The log data to submit
   */
  const addLog = async (newLogData: CreateHardwareLogInput) => {
    try {
      await platformHardwareRepository.create(newLogData, getToken);
      await fetchLogs(); // Refresh the list so the new log appears immediately
      setError(null);
    } catch (err: any) {
      setError(err.message); // Catches business logic errors from the service
    }
  };

  /**
   * Updates an existing hardware log.
   * Refreshes the log list when an update is successful.
   *
   * @param {number} id - The ID of the log to update
   * @param {Partial<CreateHardwareLogInput>} updateData - The fields to update
   */
  const updateLog = async (
    id: number,
    updateData: Partial<CreateHardwareLogInput>,
  ) => {
    try {
      await platformHardwareRepository.update(id, updateData, getToken);
      await fetchLogs(); // Refresh the list to show updated values
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  /**
   * Deletes a hardware log by its ID.
   * Refreshes the log list upon success.
   *
   * @param {number} id - The ID of the log to delete
   */
  const deleteLog = async (id: number) => {
    try {
      await platformHardwareRepository.delete(id, getToken);
      await fetchLogs();
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { logs, isLoading, error, addLog, updateLog, deleteLog };
}
