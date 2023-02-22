import { RequestHandler } from 'express';
import { findById, thingsIAlreadyKnow } from './things-model.js';

export const getAllThingsController: RequestHandler = (_req, res) => {
  res.json(thingsIAlreadyKnow);
};

export const getThingByIdController: RequestHandler = (req, res) => {
  const { id } = req.params;
  const thing = findById(id);
  if (thing === undefined) {
    res.sendStatus(404);
  } else {
    res.json(thing);
  }
};
