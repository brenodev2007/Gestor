import { Router } from 'express';
import { createUserFactory } from '../modules/users/factories/CreateUserFactory';
import { findByIdUserFactory } from '../modules/users/factories/FindByIdUserFactory';
import { findAllUserFactory } from '../modules/users/factories/FindAllUseractory';
import { findUserByEmailFactory } from '../modules/users/factories/FindUserByEmailFactory';
import { updateUserFactory } from '../modules/users/factories/UpdateUserFactory';
import { loginFactory } from '../modules/users/factories/LoginFactory';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post('/users', createUserFactory);

router.get('/users', findAllUserFactory, ensureAuthenticated);

router.get('/users/:id', findByIdUserFactory, ensureAuthenticated);

router.get('/users', findUserByEmailFactory, ensureAuthenticated);

router.patch('/users/:id', updateUserFactory, ensureAuthenticated);

router.post('/login', loginFactory);

export default router;
