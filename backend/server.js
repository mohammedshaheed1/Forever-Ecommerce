import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';  // Import to get the path from import.meta.url
import { dirname } from 'path';       // Import to get the directory name
import fs from 'fs';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Get the current directory path for __dirname equivalent
const __filename = fileURLToPath(import.meta.url);  // Convert the module URL to file path
const __dirname = dirname(__filename);              // Get the directory name from the file path

// Middleware setup
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// Correct path to the frontend/dist folder (outside the backend folder)
const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist');

// Log the frontend build folder to help with debugging
console.log('Serving static files from:', frontendDistPath);

// Check if the 'frontend/dist' folder exists and contains files
fs.readdir(frontendDistPath, (err, files) => {
  if (err) {
    console.error('Error reading frontend dist folder:', err);
  } else {
    console.log('Files in frontend/dist:', files);
  }
});

// Serve static assets (frontend) for SPA routing
app.use(express.static(frontendDistPath));

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Fallback route for single-page application (SPA)
app.get('*', (req, res) => {
  // Send the index.html file for any request that isn't API-related
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// Test route
app.get('/', (req, res) => {
  res.send("API is working");
});

// Start server
app.listen(port, () => console.log('Server started on port :' + port));
