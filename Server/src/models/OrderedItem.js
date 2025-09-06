const mongoose = require('mongoose');

const orderedItemSchema = new mongoose.Schema({
  Ordered_Item_ID: {
    type: String,
    required: true,
    unique: true
  },
  Price: {
    type: Number,
    required: true
  },
  Quantity: {
    type: Number,
    required: true,
    min: 1
  },
  Equipment_ID: {
    type: String,
    required: true
  },
  Ordered_ID: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('OrderedItem', orderedItemSchema);
