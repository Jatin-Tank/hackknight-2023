import express from 'express';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'
// const cors = require('cors');
import cors from 'cors'

// Use the cors middleware

// import errorMiddleware from './middleware/error.js'

export const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    exposedHeaders: ['set-cookie'],
  };
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser())


// routes

const router = express.Router();

// app.use("/api/v1",productRoutes);
app.use("/api/v1",userRoute);
// app.use("/api/v1",orderRoute)


// middleware for error

// app.use(errorMiddleware);

