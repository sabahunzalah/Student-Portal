import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists, you can login",
        success: false,
      });
    }
    const UserModel = new User({ name, email, password });
    UserModel.password = await bcrypt.hash(password, 10);
    await UserModel.save();
    res.status(201).json({ message: "Signup Successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const errMessage = "Auth failed: Email and Password are wrong";
    if (!user) {
      return res.status(403).json({ message: errMessage, success: false });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: errMessage, success: false });
    }
    const jwtToken = jwt.sign(
      {
        email: user.email,
        _id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

export { userSignup, userLogin };
