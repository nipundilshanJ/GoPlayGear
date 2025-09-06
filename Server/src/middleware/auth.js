const jwt = require('jsonwebtoken');
const Buyer = require('../models/Buyer');
const config = require('../../config/config');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);
    const buyer = await Buyer.findOne({ Buyer_ID: decoded.buyerId });
    
    if (!buyer) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    req.buyer = buyer;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
