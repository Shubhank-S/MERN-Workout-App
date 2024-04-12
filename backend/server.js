import express from "express";
import dotenv from "dotenv";

const app = express();

// Dotenv Configuration

dotenv.config();

// PORT

const PORT = process.env.PORT;

// Running Port

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})