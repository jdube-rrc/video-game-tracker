import { Router } from 'express';
import { getLogs, getLogById, submitLog, updateLog, deleteLog } from '../controllers/platformHardwareController.js';
import { hardwareLogSchema, updateHardwareLogSchema, validateRequest } from '../validations/index.js';

const router = Router();

router.get('/', getLogs);
router.get('/:id', getLogById);

router.post('/', validateRequest(hardwareLogSchema), submitLog);

router.put('/:id', validateRequest(updateHardwareLogSchema), updateLog);
router.patch('/:id', validateRequest(updateHardwareLogSchema), updateLog);

router.delete('/:id', deleteLog);

export default router;