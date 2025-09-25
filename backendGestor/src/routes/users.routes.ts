import { Router } from 'express';
import { createUserFactory } from '../modules/users/factories/CreateUserFactory';
import { findByIdUserFactory } from '../modules/users/factories/FindByIdUserFactory';

const router = Router();

router.post('/users', createUserFactory);

router.get('/users/:id', findByIdUserFactory);
export default router;
