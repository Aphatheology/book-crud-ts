import express, { Router } from 'express';
import validate from '../middlewares/validate';
import * as bookController from './book.controller';
import * as bookValidation from './book.validation'

const router: Router = express.Router();

router
  .route('/')
  .post(validate(bookValidation.createBook), bookController.createBook)
  .get(bookController.getBooks);

router
  .route('/:bookId')
  .get(validate(bookValidation.getBook), bookController.getBook)
  .patch(validate(bookValidation.updateBook), bookController.updateBook)
  .delete(validate(bookValidation.deleteBook), bookController.deleteBook);

export default router;