import httpStatus from 'http-status';
import mongoose from 'mongoose';
import Book from './book.model';
import ApiError from '../utils/ApiError';
import { IBook, UpdateBookBody } from './book.interface';

/**
 * Create a book
 * @param {IBook} bookBody
 * @returns {Promise<IBook>}
 */
export const createBook = async (bookBody: IBook): Promise<IBook> => {
  const book = await Book.create(bookBody)
  return book;
};

/**
 * @returns {Promise<IBook[]>}
 */
export const getBooks = async (): Promise<IBook[]> => {
  const books = await Book.find();
  return books;
};

/**
 * Get book by id
 * @param {mongoose.Types.ObjectId | string} id
 * @returns {Promise<IBook | null>}
 */
export const getBookById = async (id: mongoose.Types.ObjectId | string): Promise<IBook | null> => {
  const book = await Book.findById(id);
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, "Book not found");
  }
  return book;
}

/**
 * Update book by id
 * @param {mongoose.Types.ObjectId | string} bookId
 * @param {UpdateBookBody} updateBody
 * @returns {Promise<IBook | null>}
 */
export const updateBookById = async (
  bookId: mongoose.Types.ObjectId | string,
  updateBody: UpdateBookBody
): Promise<IBook | null> => {
  const book = await getBookById(bookId);
  
  if (book) {
    Object.assign(book, updateBody);
    await book.save();
  }

  return book;
};

/**
 * Delete book by id
 * @param {mongoose.Types.ObjectId | string} bookId
 * @returns {Promise<void>}
 */
export const deleteBookById = async (bookId: mongoose.Types.ObjectId | string): Promise<void> => {
  const book = await getBookById(bookId);
  if (book) {
    await book.deleteOne();
  }
  return;
};