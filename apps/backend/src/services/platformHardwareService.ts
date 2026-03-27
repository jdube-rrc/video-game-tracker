import { PrismaClient, HardwareLog } from '@prisma/client';

const prisma = new PrismaClient();

const hardwareService = {
  getLogs: async (): Promise<HardwareLog[]> => {
    return await prisma.hardwareLog.findMany({
      orderBy: {
        averageFps: 'desc', // Sorts by highest FPS first
      },
    });
  },

  submitLog: async (logData: Omit<HardwareLog, 'id'>): Promise<HardwareLog> => {
    return await prisma.hardwareLog.create({
      data: logData,
    });
  },

  updateLog: async (id: number, updateData: Partial<Omit<HardwareLog, 'id'>>): Promise<HardwareLog> => {
    return await prisma.hardwareLog.update({
      where: { id },
      data: updateData,
    });
  },
  getLogById: async (id: number): Promise<HardwareLog | null> => {
    return await prisma.hardwareLog.findUnique({
      where: { id },
    });
  },

  deleteLog: async (id: number): Promise<HardwareLog> => {
    return await prisma.hardwareLog.delete({
      where: { id },
    });
  },
};

export default hardwareService;