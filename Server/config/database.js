const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const MONGODB_URI = 'mongodb+srv://ndjayawickrama113_db_user:2a9TEuaNIM6PZgws@cluster0.9fk2ypy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
