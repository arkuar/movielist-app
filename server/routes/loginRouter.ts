import { Router } from 'express';
import { login } from 'server/controllers/loginController';

const loginRouter = Router();

loginRouter.post('/', login);

export default loginRouter;
