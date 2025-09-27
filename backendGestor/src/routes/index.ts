import { Router } from 'express';

import usersRoutes from './users.routes';
import reportsRoutes from './reports.routes';

const routes = Router();

routes.use(usersRoutes);
routes.use(reportsRoutes);

export { routes };
