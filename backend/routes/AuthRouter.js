import express from "express";
import {
  LoginValidation,
  SignupValidation,
} from "../middlewares/AuthValidation.js";
import { userLogin, userSignup } from "../controller/AuthController.js";
const apiRoutes = express.Router();

apiRoutes.post("/signup", SignupValidation, userSignup);
apiRoutes.post("/login", LoginValidation, userLogin);

export default apiRoutes;
