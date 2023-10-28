import mongoose, { Model, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  yop: number;
}

export type UpdateBookBody = Partial<IBook>;