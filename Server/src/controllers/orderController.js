const { validationResult } = require('express-validator');
const Order = require('../models/Order');
const OrderedItem = require('../models/OrderedItem');

// Generate unique IDs
const generateOrderId = () => 'ORD_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
const generateOrderedItemId = () => 'OI_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

// @desc    Create order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { items } = req.body;
    const buyerId = req.buyer.Buyer_ID;
    const orderId = generateOrderId();

    let total = 0;
    const orderedItems = [];

    // Process each item (no database validation needed)
    for (const item of items) {
      const itemTotal = item.Price * item.Quantity;
      total += itemTotal;

      // Create ordered item
      const orderedItem = new OrderedItem({
        Ordered_Item_ID: generateOrderedItemId(),
        Price: item.Price,
        Quantity: item.Quantity,
        Equipment_ID: item.id || item.Equipment_ID || 'N/A',
        Ordered_ID: orderId
      });

      await orderedItem.save();
      orderedItems.push(orderedItem);
    }

    // Create order
    const order = new Order({
      Order_ID: orderId,
      Total: total,
      Buyer_ID: buyerId,
      Status: 'pending'
    });

    await order.save();

    res.status(201).json({
      message: 'Order created successfully',
      order: {
        Order_ID: order.Order_ID,
        Total: order.Total,
        Ordered_Date: order.Ordered_Date,
        Status: order.Status,
        items: orderedItems
      }
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get buyer's orders
// @route   GET /api/orders/my-orders
// @access  Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ Buyer_ID: req.buyer.Buyer_ID })
      .sort({ Ordered_Date: -1 });

    const ordersWithItems = await Promise.all(
      orders.map(async (order) => {
        const items = await OrderedItem.find({ Ordered_ID: order.Order_ID });
        return {
          ...order.toObject(),
          items
        };
      })
    );

    res.json(ordersWithItems);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ 
      Order_ID: req.params.id,
      Buyer_ID: req.buyer.Buyer_ID 
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const items = await OrderedItem.find({ Ordered_ID: order.Order_ID });
    
    res.json({
      ...order.toObject(),
      items
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById
};
