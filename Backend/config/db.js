const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI; // Use the MongoDB URI from the .env file

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB;

