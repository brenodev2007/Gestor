import { Router } from 'express';
import { getAllCategoriesFactory } from '../modules/categories/factories/getAllCategoriesFactory';
import { ensurePro } from '../middlewares/ensureRole';
import { createCategoriesFactory } from '../modules/categories/factories/CreateCategoriesFactory';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.get('/categories', ensurePro, getAllCategoriesFactory);
routes.post(
  '/categories',

  ensurePro,
  createCategoriesFactory
);

routes.patch('/categories/:id', ensurePro);

routes.delete('/categories/:id/:userId', ensurePro);

export default routes;
