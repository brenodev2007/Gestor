import { Router } from 'express';
import { createReportsFactory } from '../modules/reports/factories/CreateReportFactory';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { GetReportsByUserFactory } from '../modules/reports/factories/GetReportsByUserFactory';
import { GetReportsByMonthFactory } from '../modules/reports/factories/GetReportsByMonthFacotry';

const router = Router();

router.post('/reports', ensureAuthenticated, createReportsFactory);

router.get('/reports/:idUser', ensureAuthenticated, GetReportsByUserFactory);

router.get('/reports', ensureAuthenticated, GetReportsByMonthFactory);

export default router;
