import { Router } from 'express';

import usersRoutes from './users.routes';
import reportsRoutes from './reports.routes';
import operationsRoutes from './operations.routes';

const routes = Router();

routes.use(usersRoutes);
routes.use(reportsRoutes);
routes.use(operationsRoutes);

export { routes };
