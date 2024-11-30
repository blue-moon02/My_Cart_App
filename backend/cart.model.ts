import mongoose, { Document, Schema } from 'mongoose';

export interface CartItem extends Document {
  title: string;
  description: string;
  price: number;
  discount: number;
  image: string;
}

const CartItemSchema = new Schema<CartItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  image: { type: String, required: true },
});

export const CartItemModel = mongoose.model<CartItem>('CartItem', CartItemSchema);
