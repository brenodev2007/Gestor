import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { createOperationFactory } from '../modules/operations/factories/CreateOperationFactory';

const router = Router();

router.post('/operations', ensureAuthenticated, createOperationFactory);

export default router;
