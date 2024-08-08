import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config({ path: "../.env" })
const ensureAuthenticated = (req,res,next)=>{
 const auth = req.headers['authorization'];
 if(!auth){
    return res.status(403).send({message:'Unauthorized ,jwt  token is required'});}

    try {
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.User = decoded
        next()
        
    } catch (error) {
    return res.status(403).send({message:'Unauthorized ,jwt  token is wrong or expired'});}
        
    }


export default ensureAuthenticated;