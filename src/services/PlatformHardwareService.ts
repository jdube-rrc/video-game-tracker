import HardwareRepository from "../repositories/PlatformHardwareRepository";
import { type HardwareLog } from "../data/PlatformHardware";

const HardwareService = {
  getLogs: async () => {
    const logs = await HardwareRepository.getAllLogs();
    // Business Rule: Sort by highest FPS first
    return logs.sort((a, b) => b.averageFps - a.averageFps);
  },

  submitLog: async (logData: Omit<HardwareLog, "id">) => {
    // Business Rule Validations
    if (logData.averageFps < 0) {
      throw new Error("FPS cannot be negative.");
    }
    if (
      logData.gameTitle.trim() === "" ||
      logData.hardwareSpecs.trim() === ""
    ) {
      throw new Error("Game Title and Hardware Specs are required fields.");
    }

    const newLog: HardwareLog = {
      ...logData,
      id: Date.now(), // Generate a simple unique ID
    };

    await HardwareRepository.addLog(newLog);
  },
};

export default HardwareService;
