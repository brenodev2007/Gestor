import { Router } from 'express';
import { createReportsFactory } from '../modules/reports/factories/CreateReportFactory';

const router = Router();

router.post('/reports', createReportsFactory);

router.get('/reports/:idUser', createReportsFactory);

router.get('/reports/month/:idUser', createReportsFactory);

export default router;
