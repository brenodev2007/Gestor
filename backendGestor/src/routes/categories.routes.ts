import { Router } from 'express';
import { getAllCategoriesFactory } from '../modules/categories/factories/getAllCategoriesFactory';
import { ensurePro } from '../middlewares/ensureRole';
import { createCategoriesFactory } from '../modules/categories/factories/CreateCategoriesFactory';

import { deleteCategoriesFactory } from '../modules/categories/factories/DeleteCategoriesFactory';
import { updateCategoriesFactory } from '../modules/categories/factories/UpdateCategoriesFactory';

const routes = Router();

routes.get('/categories', ensurePro, getAllCategoriesFactory);
routes.post(
  '/categories',

  ensurePro,
  createCategoriesFactory
);

routes.patch('/categories/:id', ensurePro, updateCategoriesFactory);

routes.delete('/categories/:id/:userId', ensurePro, deleteCategoriesFactory);

export default routes;
