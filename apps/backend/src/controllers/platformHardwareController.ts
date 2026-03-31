import { Request, Response } from 'express';
import hardwareService from '../services/platformHardwareService.js';

/**
 * Controller for fetching all hardware logs.
 * Handles errors and sends appropriate HTTP responses.
 *
 * @param {Request} req - The Express request object
 * @param {Response} res - The Express response object for sending back status and data
 * @returns {void}
 * @returns {200 | 500} HTTP status code indicating success or failure of log retrieval
 */
export const getLogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const logs = await hardwareService.getLogs();
        res.status(200).json(logs);
    } catch (error) {
        console.error("Error fetching hardware logs:", error);
        res.status(500).json({ message: "Internal server error while fetching logs." });
    }
};

/**
 * Controller for submitting a new hardware log.
 * Validates input and handles errors from the service layer.
 *
 * @param {Request} req - The Express request object containing log data in the body
 * @param {Response} res - The Express response object for sending back status and data
 * @returns {void}
 * @returns {201
 * | 400} HTTP status code indicating success or failure of log submission
 */
export const submitLog = async (req: Request, res: Response): Promise<void> => {
    try {
        const newLog = await hardwareService.submitLog(req.body);
        
        res.status(201).json(newLog);
    } catch (error: any) {
        res.status(400).json({ message: error.message || "Invalid hardware log data." });
    }
};

/**
 * Controller for updating an existing hardware log.
 * Validates log ID and input data, and handles errors from the service layer.
 *
 * @param {Request} req - The Express request object containing log ID in params and update data in the body
 * @param {Response} res - The Express response object for sending back status and data
 * @returns {void}
 * @returns {200 | 400 | 404} HTTP status code indicating success, bad request, or not found
 */
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

/**
 * Controller for fetching a single hardware log by ID.
 * Validates log ID and handles errors from the service layer.
 *
 * @param {Request} req - The Express request object containing log ID in params
 * @param {Response} res - The Express response object for sending back status and data
 * @returns {void}
 * @returns {200 | 400 | 404 | 500} HTTP status code indicating success, bad request, not found, or server error
 */
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

/**
 * Controller for deleting a hardware log.
 * Validates log ID and handles errors from the service layer.
 *
 * @param {Request} req - The Express request object containing log ID in params
 * @param {Response} res - The Express response object for sending back status and data
 * @returns {void}
 * @returns {200 | 400 | 404 | 500} HTTP status code indicating success, bad request, not found, or server error
 */
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