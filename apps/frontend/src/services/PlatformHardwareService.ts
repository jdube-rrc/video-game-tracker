import { type CreateHardwareLogInput, type HardwareLog } from "../data/PlatformHardware";

const API_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Service module for handling API calls related to platform & hardware compatibility logs.
 * Provides methods to fetch logs, submit new logs, and update existing logs.
 * Handles HTTP response status and error management.
 */
const HardwareService = {
  getLogs: async (): Promise<HardwareLog[]> => {
    const response = await fetch(`${API_URL}/api/hardware-logs`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch hardware logs from the server.");
    }
    
    return await response.json();
  },

  submitLog: async (logData: CreateHardwareLogInput): Promise<void> => {
    const response = await fetch(`${API_URL}/api/hardware-logs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit log.");
    }
  },

  updateLog: async (id: number, logData: Partial<CreateHardwareLogInput>): Promise<void> => {
    const response = await fetch(`${API_URL}/api/hardware-logs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update log.");
    }
  },
};

export default HardwareService;