import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import WorkoutsRoutes from './routes/WorkoutsRoutes.js'

const app = express();

// Middlewares

app.use(express.json())

// Dotenv Configuration

dotenv.config();

// Database Configuration

connectDB();

// Routes

app.use('/api/v1/workout',WorkoutsRoutes)

// PORT

const PORT = process.env.PORT;

// Running Port

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})