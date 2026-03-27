import { Request, Response } from 'express';
import hardwareService from '../services/platformHardwareService.js';

export const getLogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const logs = await hardwareService.getLogs();
        res.status(200).json(logs);
    } catch (error) {
        console.error("Error fetching hardware logs:", error);
        res.status(500).json({ message: "Internal server error while fetching logs." });
    }
};

export const submitLog = async (req: Request, res: Response): Promise<void> => {
    try {
        const newLog = await hardwareService.submitLog(req.body);
        
        res.status(201).json(newLog);
    } catch (error: any) {
        res.status(400).json({ message: error.message || "Invalid hardware log data." });
    }
};

export const updateLog = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: "Invalid log ID format." });
            return;
        }

        const updatedLog = await hardwareService.updateLog(id, req.body);
        
        res.status(200).json(updatedLog);
    } catch (error: any) {
        if (error.code === 'P2025' || error.message?.includes('not found')) {
            res.status(404).json({ message: "Hardware log not found." });
        } else {
            res.status(400).json({ message: error.message || "Invalid update data." });
        }
    }
};

export const getLogById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: "Invalid log ID format." });
            return;
        }

        const log = await hardwareService.getLogById(id);
        if (!log) {
            res.status(404).json({ message: "Hardware log not found." });
            return;
        }

        res.status(200).json(log);
    } catch (error) {
        console.error("Error fetching hardware log by ID:", error);
        res.status(500).json({ message: "Internal server error while fetching log." });
    }
};

export const deleteLog = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            res.status(400).json({ message: "Invalid log ID format." });
            return;
        }

        const deletedLog = await hardwareService.deleteLog(id);
        res.status(200).json({ message: "Hardware log deleted successfully.", deletedLog });
    } catch (error: any) {
        if (error.code === 'P2025' || error.message?.includes('not found')) {
            res.status(404).json({ message: "Hardware log not found." });
        } else {
            res.status(500).json({ message: "Internal server error while deleting log." });
        }
    }
};