import { Router } from 'express';
import { getLogs, submitLog } from '../controllers/platformHardwareController';

const router = Router();

router.get('/', getLogs);

router.post('/', submitLog);

export default router;