import { Router } from "express";
import { createUserFactory } from "../modules/users/factories/userFactory";

const router = Router();

router.post("/users", createUserFactory);

export default router;
