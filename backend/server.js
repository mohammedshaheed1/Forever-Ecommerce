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
import { fileURLToPath } from 'url';  
import { dirname } from 'path';       
import fs from 'fs';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Get the current directory path for __dirname equivalent
const __filename = fileURLToPath(import.meta.url);  
const __dirname = dirname(__filename);              

// Middleware setup
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// Correct path to the frontend/dist folder (outside the backend folder)
const frontendDistPath = path.join(__dirname, 'frontend', 'dist');

// Path to the admin build folder (where you copied the admin files)
const adminDistPath = path.join(__dirname, 'public', 'admin');

// Log the paths to help with debugging
console.log('Serving static files from frontend:', frontendDistPath);
console.log('Serving static files from admin:', adminDistPath);

// Check if the frontend/dist folder exists and contains files
fs.readdir(frontendDistPath, (err, files) => {
  if (err) {
    console.error('Error reading frontend dist folder:', err);
  } else {
    console.log('Files in frontend/dist:', files);
  }
});

// Check if the admin folder exists and contains files
fs.readdir(adminDistPath, (err, files) => {
  if (err) {
    console.error('Error reading admin dist folder:', err);
  } else {
    console.log('Files in admin folder:', files);
  }
});

// Serve static assets for frontend (SPA routing)
app.use(express.static(frontendDistPath));

// Serve static assets for admin (admin page)
app.use('/admin', express.static(adminDistPath));

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Catch-all route for frontend and admin to serve the index.html files
app.get('*', (req, res) => {
  const adminPath = req.url.startsWith('/admin');
  const indexFile = adminPath
    ? path.join(adminDistPath, 'index.html')
    : path.join(frontendDistPath, 'index.html');

  res.sendFile(indexFile);
});

// Simple API health check
app.get('/', (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => console.log('Server started on port :' + port));
