import { Router } from 'express';
import { createReportsFactory } from '../modules/reports/factories/CreateReportFactory';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post('/reports', createReportsFactory, ensureAuthenticated);

router.get('/reports/:idUser', createReportsFactory, ensureAuthenticated);

router.get('/reports/month/:idUser', createReportsFactory, ensureAuthenticated);

export default router;
