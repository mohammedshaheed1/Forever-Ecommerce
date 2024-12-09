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
import { fileURLToPath } from 'url';  // Import fileURLToPath
import { dirname } from 'path';  // Import dirname

// App config
const app = express();
const port = process.env.PORT || 4000;

// Use import.meta.url to get the current directory equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

// API end-points
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Serve static files from 'frontend/dist' folder
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// For React apps or Single Page Apps (SPA) - Serve index.html for all non-API requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Test endpoint
app.get('/', (req, res) => {
  res.send("API is working");
});

// Start server
app.listen(port, () => console.log('Server started on port : ' + port));
