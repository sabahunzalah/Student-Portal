
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const userSignup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists, you can login",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    const payload = {
      user: {
        id: user._id,  // Use UserModel._id
        role: user.role,
        name:user.name,
      },
    };

    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      jwtToken,
      user: {
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Auth failed: Email and Password are wrong", success: false });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: "Auth failed: Email and Password are wrong", success: false });
    }
    const payload = {
      email: user.email,
      _id: user._id,
      role: user.role,
      name: user.name, // Include name in the JWT payload
    };
    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email: user.email,
      name: user.name,
      role: user.role,
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

export { userSignup, userLogin };

