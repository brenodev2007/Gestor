import { Router } from 'express';
import { createBanksFactory } from '../modules/banks/Factories/CreateBanksFactory';

const routes = Router();

routes.post('/banks', createBanksFactory);

export default routes;
