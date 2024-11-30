import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
const mongoURI = 'mongodb://localhost:27017/my-cart-app';

// MongoDB Connection
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Cart Item Schema and Model
const cartItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  image: { type: String, required: true },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Route to fetch cart items
app.get('/cart', async (req: Request, res: Response) => {
  try {
    // Fetch all cart items from MongoDB
    const cartItems = await CartItem.find();
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    // Send the cart items and total price as response
    res.json({
      items: cartItems,
      total,
    });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

// Route to handle removing an item from the cart
app.delete('cart/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // Delete the cart item by ID
    const result = await CartItem.findByIdAndDelete(id);
    // Send a success response
    if (result) {
      res.status(200).json({ message: 'Item removed successfully' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    console.error('Error removing item:', error);
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});