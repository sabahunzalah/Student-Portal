import express from "express";
import User from "../models/User.js";
import dotenv from "dotenv";
import {
  LoginValidation,
  SignupValidation,
} from "../middlewares/AuthValidation.js";
import { userLogin, userSignup } from "../Controller/AuthController.js";
import ensureAuthenticated from "../middlewares/AuthMiddlewarre.js";
const apiRoutes = express.Router();
dotenv.config({ path: "../.env" });

apiRoutes.post("/signup", SignupValidation, userSignup);
apiRoutes.post("/login", LoginValidation, userLogin);
apiRoutes.get("/dashboard", ensureAuthenticated,  async (req, res) => {
  try {
    const userId = req.user.id; // Assuming the middleware attaches the user ID to the request
    const user = await User.findById(userId).select("name email");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ name: user.name, email: user.email });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default apiRoutes;
