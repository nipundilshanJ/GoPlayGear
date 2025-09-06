const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  Order_ID: {
    type: String,
    required: true,
    unique: true
  },
  Total: {
    type: Number,
    required: true
  },
  Ordered_Date: {
    type: Date,
    default: Date.now
  },
  Buyer_ID: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
