import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoutes from "./routes/index.js";



// Load environment variables from a specific path
dotenv.config({ path: '../.env' });

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
  });
//   app.post("/post", (req, res) => {
//     res.send("Sylani Mass It Training");
//   });
  app.use("/api",apiRoutes)