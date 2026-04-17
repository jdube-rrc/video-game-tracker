import { Router } from 'express';
import { getLogs, getLogById, submitLog, updateLog, deleteLog } from '../controllers/platformHardwareController.js';
import { requireClerkAuth } from '../middleware/requireClerkAuth.js';
import { hardwareLogSchema, updateHardwareLogSchema, validateRequest } from '../validations/index.js';

const router = Router();

// GET all logs
router.get('/', getLogs);

// GET log by ID
router.get('/:id', getLogById);

// POST create new log
router.post('/', requireClerkAuth, validateRequest(hardwareLogSchema), submitLog);

// PUT update log by ID
router.put('/:id', requireClerkAuth, validateRequest(updateHardwareLogSchema), updateLog);

// PATCH update log by ID (partial update)
router.patch('/:id', requireClerkAuth, validateRequest(updateHardwareLogSchema), updateLog);

// DELETE log by ID
router.delete('/:id', requireClerkAuth, deleteLog);

export default router;