const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const DBConnection = require('./config/connect');
const path = require('path');
const morgan = require('morgan');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Database connection
DBConnection();

// Set the server port, defaulting to 5000 if not specified in .env
const PORT = process.env.PORT || 5000;

////// Middleware //////

// Use morgan for logging HTTP requests in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable CORS with specific options
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173", // Allow requests from the frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));

// Parse incoming JSON requests
app.use(express.json());

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/// ROUTES ///
// Define routes for admin and user APIs
try {
  app.use('/api/admin', require('./routers/adminRoutes'));
  app.use('/api/user', require('./routers/userRoutes'));
} catch (error) {
  console.error('Error while loading routes:', error.message);
}

// Default route for unmatched paths
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware for unexpected server errors
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

