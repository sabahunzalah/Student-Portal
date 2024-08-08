import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/AuthRouter.js";
import productRoutes from "./routes/ProductRouter.js";

dotenv.config({ path: "../.env" }); // Load environment variables
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err)); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Middleware for CORS


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use("/api", apiRoutes);
app.use("/Products", productRoutes);
