import { Router } from 'express';
import { createReportsFactory } from '../modules/reports/factories/CreateReportFactory';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { GetReportsByUserFactory } from '../modules/reports/factories/GetReportsByUserFactory';
import { GetReportsByMonthFactory } from '../modules/reports/factories/GetReportsByMonthFacotry';
import { ensurePro } from '../middlewares/ensureRole';

const router = Router();

router.post('/reports', createReportsFactory);

router.get('/reports/:idUser', GetReportsByUserFactory);

router.get('/reports', GetReportsByMonthFactory);

export default router;
