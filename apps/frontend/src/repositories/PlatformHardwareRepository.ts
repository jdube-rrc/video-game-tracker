import HardwareService from "../services/PlatformHardwareService";
import { type CreateHardwareLogInput, type HardwareLog } from "../data/PlatformHardware";

/**
 * Repository for platform hardware logs backed by API calls.
 * 
 * 
 */
export const platformHardwareRepository = {
  getAll: async (): Promise<HardwareLog[]> => {
    return await HardwareService.getLogs();
  },

  create: async (logData: CreateHardwareLogInput): Promise<void> => {
    await HardwareService.submitLog(logData);
  },
};
