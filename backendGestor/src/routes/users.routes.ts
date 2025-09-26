import { Router } from 'express';
import { createUserFactory } from '../modules/users/factories/CreateUserFactory';
import { findByIdUserFactory } from '../modules/users/factories/FindByIdUserFactory';
import { findAllUserFactory } from '../modules/users/factories/FindAllUseractory';
import { findUserByEmailFactory } from '../modules/users/factories/FindUserByEmailFactory';

const router = Router();

router.post('/users', createUserFactory);

router.get('/users', findAllUserFactory);

router.get('/users/:id', findByIdUserFactory);

router.get('/users', findUserByEmailFactory);
export default router;
