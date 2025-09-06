const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const Buyer = require('../models/Buyer');
const config = require('../../config/config');

// Generate unique IDs
const generateBuyerId = () => 'BUYER_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

// Generate JWT Token
const generateToken = (buyerId) => {
  return jwt.sign({ buyerId }, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRE });
};

// @desc    Register buyer
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Name, Email, Password } = req.body;

    // Check if buyer already exists
    const existingBuyer = await Buyer.findOne({ Email });
    if (existingBuyer) {
      return res.status(400).json({ message: 'Buyer already exists' });
    }

    // Create new buyer
    const buyer = new Buyer({
      Buyer_ID: generateBuyerId(),
      Name,
      Email,
      Password
    });

    await buyer.save();

    // Generate JWT token
    const token = generateToken(buyer.Buyer_ID);

    res.status(201).json({
      message: 'Buyer registered successfully',
      token,
      buyer: {
        Buyer_ID: buyer.Buyer_ID,
        Name: buyer.Name,
        Email: buyer.Email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Login buyer
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Email, Password } = req.body;

    // Find buyer
    const buyer = await Buyer.findOne({ Email });
    if (!buyer) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await buyer.comparePassword(Password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(buyer.Buyer_ID);

    res.json({
      message: 'Login successful',
      token,
      buyer: {
        Buyer_ID: buyer.Buyer_ID,
        Name: buyer.Name,
        Email: buyer.Email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get current buyer
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  res.json({
    buyer: {
      Buyer_ID: req.buyer.Buyer_ID,
      Name: req.buyer.Name,
      Email: req.buyer.Email
    }
  });
};

module.exports = {
  register,
  login,
  getMe
};
