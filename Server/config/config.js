module.exports = {
  // MongoDB Configuration
  MONGODB_URI: 'mongodb+srv://ndjayawickrama113_db_user:2a9TEuaNIM6PZgws@cluster0.9fk2ypy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  
  // JWT Configuration
  JWT_SECRET: 'your_jwt_secret_key_here_change_this_in_production',
  JWT_EXPIRE: '7d',
  
  // Server Configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // CORS Configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5174'
};

