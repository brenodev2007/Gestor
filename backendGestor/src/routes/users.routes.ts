import { Router } from 'express';
import { createUserFactory } from '../modules/users/factories/CreateUserFactory';
import { findByIdUserFactory } from '../modules/users/factories/FindByIdUserFactory';
import { findAllUserFactory } from '../modules/users/factories/FindAllUseractory';

const router = Router();

router.post('/users', createUserFactory);

router.get('/users', findAllUserFactory);

router.get('/users/:id', findByIdUserFactory);
export default router;
