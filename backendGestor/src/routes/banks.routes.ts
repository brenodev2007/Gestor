import { Router } from 'express';
import { createBanksFactory } from '../modules/banks/Factories/CreateBanksFactory';
import { getAllBanksFactory } from '../modules/banks/Factories/GetAllBanksFactory';

const routes = Router();

routes.post('/banks', createBanksFactory);

routes.get('/banks', getAllBanksFactory);

export default routes;
