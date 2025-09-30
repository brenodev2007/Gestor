import { Router } from 'express';
import { getAllCategoriesFactory } from '../modules/categories/factories/getAllCategoriesFactory';
import { ensurePro } from '../middlewares/ensureRole';

const routes = Router();

routes.get('/categories', ensurePro, getAllCategoriesFactory);

export default routes;
