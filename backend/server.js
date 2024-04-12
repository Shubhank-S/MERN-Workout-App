import express from "express";
import dotenv from "dotenv";
import WorkoutsRoutes from './routes/WorkoutsRoutes.js'

const app = express();

// Dotenv Configuration

dotenv.config();

// Routes

app.use('/',WorkoutsRoutes)

// PORT

const PORT = process.env.PORT;

// Running Port

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})