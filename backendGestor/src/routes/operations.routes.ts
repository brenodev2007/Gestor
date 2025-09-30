import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { createOperationFactory } from '../modules/operations/factories/CreateOperationFactory';
import { getOperationsByUserFactory } from '../modules/operations/factories/GetOperationsByUserFactory';
import { updateOperationFactory } from '../modules/operations/factories/UpdateOperationFactory';
import { deleteOperationFactory } from '../modules/operations/factories/DeleteOperationFactory';
import { listOperationFactory } from '../modules/operations/factories/ListOperationFactory';
import { ensurePro } from '../middlewares/ensureRole';

const router = Router();

router.post('/operations', createOperationFactory);

router.get('/operations/:UserId', getOperationsByUserFactory);

router.get('/operations', listOperationFactory);

router.patch('/operations/:idOperation', updateOperationFactory);

router.delete('/operations/:idOperation', deleteOperationFactory);

export default router;
