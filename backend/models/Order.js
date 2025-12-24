const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number
  }],
  totalPrice: { type: Number, required: true },
  customerEmail: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);