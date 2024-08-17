
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config({ path: "../.env" });

const authenticateToken = async (req, res, next) => {

const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];

if (token == null) {
  console.log("Token is missing");
  return res.sendStatus(401); // Unauthorized if no token
}

jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  if (err) {
    console.log("Token verification failed:", err.message);
    return res.sendStatus(403); // Forbidden if token is invalid
  }

  req.user = user;
  next();
});

}
export default authenticateToken;
