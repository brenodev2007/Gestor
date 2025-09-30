import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { createOperationFactory } from '../modules/operations/factories/CreateOperationFactory';
import { getOperationsByUserFactory } from '../modules/operations/factories/GetOperationsByUserFactory';
import { updateOperationFactory } from '../modules/operations/factories/UpdateOperationFactory';

const router = Router();

router.post('/operations', createOperationFactory);

router.get('/operations/:UserId', getOperationsByUserFactory);

router.patch('/operations/:idOperation', updateOperationFactory);

export default router;
