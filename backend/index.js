const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const Order = require('./models/Order');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// GET all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new product (for testing)
app.post('/products', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image_url: req.body.image_url,
    description: req.body.description,
    stock: req.body.stock
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST create order (when user checks out)
app.post('/orders', async (req, res) => {
  const order = new Order({
    items: req.body.items,
    totalPrice: req.body.totalPrice,
    customerEmail: req.body.customerEmail
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all orders (for admin view later)
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});