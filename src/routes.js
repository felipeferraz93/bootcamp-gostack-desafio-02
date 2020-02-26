import { Router } from 'express';

// import Recipient from './app/models/Recipient';

import RecipientController from './app/controllers/RecipientController';

import SessionController from './app/controllers/SessionControllers';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'aeeeeeeeeeeeehoooooooooooooooo' });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.uptade);

export default routes;
