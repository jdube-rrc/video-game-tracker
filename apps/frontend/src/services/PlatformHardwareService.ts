import { type CreateHardwareLogInput, type HardwareLog } from "../data/PlatformHardware";

const API_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Service module for interacting with the backend API related to hardware compatibility logs.
 * Provides methods to fetch all logs and submit new logs.
 * Handles HTTP requests and responses, including error handling.
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
};

export default HardwareService;