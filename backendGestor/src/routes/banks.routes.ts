import { Router } from 'express';
import { createBanksFactory } from '../modules/banks/Factories/CreateBanksFactory';
import { getAllBanksFactory } from '../modules/banks/Factories/GetAllBanksFactory';
import { updateBanksFactory } from '../modules/banks/Factories/UpdateBanksFacotry';
import { deleteBanksFactory } from '../modules/banks/Factories/DeleteBanksFacotry';
import { ensurePro } from '../middlewares/ensureRole';

const routes = Router();

routes.post('/banks', createBanksFactory);

routes.get('/banks', getAllBanksFactory);

routes.patch('/banks/:id', ensurePro, updateBanksFactory);

routes.delete('/banks/:id', deleteBanksFactory);

export default routes;
