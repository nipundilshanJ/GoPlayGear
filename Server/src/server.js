const express = require('express');
const cors = require('cors');
const connectDB = require('../config/database');
const config = require('../config/config');

console.log('🚀 Starting GoPlay Gear API Server...');
console.log('📋 Configuration loaded:', {
  PORT: config.PORT,
  NODE_ENV: config.NODE_ENV,
  CORS_ORIGIN: config.CORS_ORIGIN
});

const app = express();

// Connect to MongoDB
console.log('🔌 Connecting to MongoDB...');
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'GoPlay Gear API is running!',
    version: '1.0.0',
    environment: config.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// API status check
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    database: 'Connected',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    path: req.originalUrl 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  
  const errorResponse = {
    message: config.NODE_ENV === 'production' ? 'Something went wrong!' : err.message,
    ...(config.NODE_ENV !== 'production' && { stack: err.stack })
  };
  
  res.status(err.status || 500).json(errorResponse);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  process.exit(0);
});

app.listen(config.PORT, () => {
  console.log(`🚀 Server running on port ${config.PORT}`);
  console.log(`🌍 Environment: ${config.NODE_ENV}`);
  console.log(`📊 API available at: http://localhost:${config.PORT}/api`);
});
