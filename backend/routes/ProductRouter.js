import express from "express";
import ensureAuthenticated from "../middlewares/AuthMiddlewarre.js";

const productRoutes = express.Router();

productRoutes.get("/",ensureAuthenticated, (req, res) => {
    console.log("logged in user detailed",req.User)
    res.status(400).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"tv",
            price:20000
        },
    ])
});

export default productRoutes;
