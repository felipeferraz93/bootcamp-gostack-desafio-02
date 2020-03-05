import { Router } from 'express';

import multer from 'multer';

import multerConfig from './config/multer';

// import Recipient from './app/models/Recipient';

import RecipientController from './app/controllers/RecipientController';

import SessionController from './app/controllers/SessionControllers';

import DeliverymanController from './app/controllers/DeliverymanController';

import AvatarController from './app/controllers/AvatarController';

import DeliveryController from './app/controllers/DeliveryController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.get('/', (req, res) => {
  res.json({ message: 'aeeeeeeeeeeeehoooooooooooooooo' });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.uptade);

routes.post('/avatars', upload.single('avatar'), AvatarController.store);

routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans', DeliverymanController.update);
routes.get('/deliverymans', DeliverymanController.index);
routes.delete('/deliverymans', DeliverymanController.delete);

routes.post('/deliveries', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.put('/deliveries', DeliveryController.update);
routes.delete('/deliveries', DeliveryController.delete);

export default routes;
