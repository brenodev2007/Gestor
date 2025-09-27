import { Router } from 'express';
import { createReportsFactory } from '../modules/reports/factories/CreateReportFactory';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post('/reports', ensureAuthenticated, createReportsFactory);

router.get('/reports/:idUser', ensureAuthenticated, createReportsFactory);

router.get('/reports/month/:idUser', ensureAuthenticated, createReportsFactory);

export default router;
