import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { errorHandler } from './utils/ErrorHandler';
import { routes } from './routes/index';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use(ensureAuthenticated);
app.use(routes);
