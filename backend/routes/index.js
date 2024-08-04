import express from "express"
const apiRoutes = express.Router()


apiRoutes.post("/register",(req,res)=>{
    console.log("register route called")
    res.send("hello user")

})
export default apiRoutes;