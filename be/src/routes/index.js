import {Router} from 'express';
import someRoutes from './someRoutes';

const router = new Router();

export default function route(app) {
  app.use('/api', router);
  router.use('/some', someRoutes);
}
