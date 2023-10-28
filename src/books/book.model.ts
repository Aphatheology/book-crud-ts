import mongoose from 'mongoose';
import { IBook } from './book.interface'

const bookSchema = new mongoose.Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    yop: {
      type: Number,
      required: false,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model<IBook>('Book', bookSchema);

export default Book;