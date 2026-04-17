import type { TokenProvider } from '../apis/client';
import HardwareService from "../services/PlatformHardwareService";
import { type CreateHardwareLogInput, type HardwareLog } from "../data/PlatformHardware";

/**
 * Repository for platform hardware logs backed by API calls.
 * Provides methods to fetch all logs and submit new logs.
 */
export const platformHardwareRepository = {
  getAll: async (): Promise<HardwareLog[]> => {
    return await HardwareService.getLogs();
  },

  create: async (logData: CreateHardwareLogInput, getToken?: TokenProvider): Promise<void> => {
    await HardwareService.submitLog(logData, getToken);
  },

  update: async (id: number, logData: Partial<CreateHardwareLogInput>, getToken?: TokenProvider): Promise<void> => {
    await HardwareService.updateLog(id, logData, getToken);
  },
};
