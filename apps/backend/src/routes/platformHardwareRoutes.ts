import { Router } from 'express';
import { getLogs, getLogById, submitLog, updateLog, deleteLog } from '../controllers/platformHardwareController.js';
import { hardwareLogSchema, updateHardwareLogSchema, validateRequest } from '../validations/index.js';

const router = Router();

// GET all logs
router.get('/', getLogs);

// GET log by ID
router.get('/:id', getLogById);

// POST create new log
router.post('/', validateRequest(hardwareLogSchema), submitLog);

// PUT update log by ID
router.put('/:id', validateRequest(updateHardwareLogSchema), updateLog);

// PATCH update log by ID (partial update)
router.patch('/:id', validateRequest(updateHardwareLogSchema), updateLog);

// DELETE log by ID
router.delete('/:id', deleteLog);

export default router;