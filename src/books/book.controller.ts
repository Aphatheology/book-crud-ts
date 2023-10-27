import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import * as bookService from './book.service';

export const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = await bookService.createBook(req.body);
  res.status(httpStatus.CREATED).send(book);
});

export const getBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.getBooks();
  res.send(result);
});

export const getBook = catchAsync(async (req: Request, res: Response) => {
  const book = await bookService.getBookById(req.params.bookId);
  res.send(book);
});

export const updateBook = catchAsync(async (req: Request, res: Response) => {
  const book = await bookService.updateBookById(req.params.bookId, req.body);
  res.send(book);
});

export const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const book = await bookService.deleteBookById(req.params.bookId);
  res.send(book);
});