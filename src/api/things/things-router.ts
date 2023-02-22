import express from 'express';
import {
  getAllThingsController,
  getThingByIdController,
} from './things.controllers.js';

const router = express.Router();

router.route('/').get(getAllThingsController);

router.route('/:id').get(getThingByIdController);

export default router;
