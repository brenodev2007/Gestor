import { Router } from 'express';
import { createReportsFactory } from '../modules/reports/factories/CreateReportFactory';

const router = Router();

router.post('/reports', createReportsFactory);

export default router;
