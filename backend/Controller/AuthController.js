import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const userSignup = async (req, res) => {
  const { name, email, password , role } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         message: "User already exists, you can login",
//         success: false,
//       });
//     }
//     const UserModel = new User({ name, email, password , role });
//     UserModel.password = await bcrypt.hash(password, 10);
//     await UserModel.save();
//     const payload = {
//       user: {
//         id: user.id,
//         role: user.role,
//         name: user.name,
//       },
//     };

//     const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       jwtToken,
//       user: {
//         name: user.name,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.error("Error during sign-up:", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
try {
  // Check if the user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ success: false, message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  user = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });

  await user.save();

  // Generate JWT
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(201).json({ success: true, jwtToken: token, role: user.role });
} catch (error) {
  console.error("Error signing up:", error);
  res.status(500).json({ success: false, message: "Server error" });
}
};
// };

const userLogin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     const errMessage = "Auth failed: Email and Password are wrong";
//     if (!user) {
//       return res.status(403).json({ message: errMessage, success: false });
//     }
//     const isPassEqual = await bcrypt.compare(password, user.password);
//     if (!isPassEqual) {
//       return res.status(403).json({ message: errMessage, success: false });
//     }
//     const jwtToken = jwt.sign(
//       {
//         email: user.email,
//         _id: user._id,
//         role: user.role,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "24h" }
//     );
//     res.status(200).json({
//       message: "Login Success",
//       success: true,
//       jwtToken,
//       email: user.email,
//       name: user.name,
//       role: user.role,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error", success: false });
//   }
// };
try {
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ success: false, message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ success: false, message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ success: true, jwtToken: token, role: user.role, name: user.name });
} catch (error) {
  console.error("Error logging in:", error);
  res.status(500).json({ success: false, message: "Server error" });
}
};

export { userSignup, userLogin };
