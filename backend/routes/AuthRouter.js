import express from "express";
import dotenv from "dotenv";
import {
  LoginValidation,
  SignupValidation,
} from "../middlewares/AuthValidation.js";
import { userLogin, userSignup } from "../Controller/AuthController.js";

import getUser from "../Controller/userController.js";
import authenticateToken from "../middlewares/AuthMiddlewarre.js";
const apiRoutes = express.Router();
dotenv.config({ path: "../.env" });

apiRoutes.post("/signup", SignupValidation, userSignup);
apiRoutes.post("/login", LoginValidation, userLogin);
apiRoutes.get("/user",authenticateToken,getUser);


export default apiRoutes;
