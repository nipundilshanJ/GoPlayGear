const express = require('express');
const { body } = require('express-validator');
const { createOrder, getMyOrders, getOrderById } = require('../controllers/orderController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/orders
// @desc    Create order
// @access  Private
router.post('/', auth, [
  body('items').isArray().withMessage('Items must be an array'),
  body('items.*.id').notEmpty().withMessage('Item ID is required'),
  body('items.*.Price').isNumeric().withMessage('Price must be a number'),
  body('items.*.Quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
], createOrder);

// @route   GET /api/orders/my-orders
// @desc    Get buyer's orders
// @access  Private
router.get('/my-orders', auth, getMyOrders);

// @route   GET /api/orders/:id
// @desc    Get single order
// @access  Private
router.get('/:id', auth, getOrderById);

module.exports = router;
