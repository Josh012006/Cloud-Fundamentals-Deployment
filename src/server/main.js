import express from "express";
import ViteExpress from "vite-express";

import taskRouter from "./routes/taskRoutes.js";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON

app.use(taskRouter);


// Connect to the database
connectDB();


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on http://localhost:3000..."),
);
