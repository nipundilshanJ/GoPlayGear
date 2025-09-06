const express = require('express');
const { body } = require('express-validator');
const { register, login, getMe } = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register buyer
// @access  Public
router.post('/register', [
  body('Name').notEmpty().withMessage('Name is required'),
  body('Email').isEmail().withMessage('Please provide a valid email'),
  body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], register);

// @route   POST /api/auth/login
// @desc    Login buyer
// @access  Public
router.post('/login', [
  body('Email').isEmail().withMessage('Please provide a valid email'),
  body('Password').notEmpty().withMessage('Password is required')
], login);

// @route   GET /api/auth/me
// @desc    Get current buyer
// @access  Private
router.get('/me', auth, getMe);

module.exports = router;
