import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { createOperationFactory } from '../modules/operations/factories/CreateOperationFactory';
import { getOperationsByUserFactory } from '../modules/operations/factories/GetOperationsByUserFactory';

const router = Router();

router.post('/operations', ensureAuthenticated, createOperationFactory);

router.get(
  '/operations/:UserId',
  ensureAuthenticated,
  getOperationsByUserFactory
);

export default router;
