import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import { registerUser } from './controllers/userController.js';
import {notFound, errorHandler} from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', registerUser);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} on Port: ${PORT}`));
