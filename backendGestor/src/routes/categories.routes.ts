import { Router } from 'express';
import { getAllCategoriesFactory } from '../modules/categories/factories/getAllCategoriesFactory';
import { ensurePro } from '../middlewares/ensureRole';
import { createCategoriesFactory } from '../modules/categories/factories/CreateCategoriesFactory';

const routes = Router();

routes.get('/categories', ensurePro, getAllCategoriesFactory);
routes.post('/categories', ensurePro, createCategoriesFactory);

export default routes;
