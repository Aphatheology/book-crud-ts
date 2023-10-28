import Joi from 'joi';
import { objectId } from '../utils/custom.validation';

export const createBook = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
    yop: Joi.number(),
  }),
};

export const getBook = {
  params: Joi.object().keys({
    bookId: Joi.string().required().custom(objectId),
  }),
};

export const updateBook = {
  params: Joi.object().keys({
    bookId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      author: Joi.string(),
      yop: Joi.number(),
    })
    .min(1),
};

export const deleteBook = {
  params: Joi.object().keys({
    bookId: Joi.string().required().custom(objectId),
  }),
};