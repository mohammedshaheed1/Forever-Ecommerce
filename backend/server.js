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
import { fileURLToPath } from 'url';  // Import to get the file path from the URL
import { dirname } from 'path';       // Import to get the directory name

// App config
const app = express();
const port = process.env.PORT || 4000;

// Get the current directory path for __dirname equivalent
const __filename = fileURLToPath(import.meta.url);  // Convert the module URL to file path
const __dirname = dirname(__filename);              // Get the directory name from the file path

// Middlewares
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// Serve static files from the frontend 'dist' folder
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Fallback route to serve the index.html for single-page applications (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Test route
app.get('/', (req, res) => {
  res.send("API is working");
});

// Start server
app.listen(port, () => console.log('Server started on port :' + port));
