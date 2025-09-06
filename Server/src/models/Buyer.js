const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const buyerSchema = new mongoose.Schema({
  Buyer_ID: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  Password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
});

// Hash password before saving
buyerSchema.pre('save', async function(next) {
  if (!this.isModified('Password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
buyerSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.Password);
};

module.exports = mongoose.model('Buyer', buyerSchema);
