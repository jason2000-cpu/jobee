const express = require('express');
const connectDB = require('./config/db');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const authRoutes = require('./routes/authRoutes'); //auth route
const postRoutes = require('./routes/post.routes');
const app = express();
const PORT = 3008;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(loggerMiddleware); // Log requests

// apis are defined here 
app.use('/api/auth', authRoutes); // Set up the authentication routes
app.use('/api/posts', postRoutes); 

// Error handling middleware should be at the end
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

