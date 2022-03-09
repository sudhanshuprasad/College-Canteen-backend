const express = require('express');
const router = express.Router();
module.exports = router;
const Fooditem = require('../models/Fooditem');

//Route:1 
//Get cart details using: GET: "/api/cart/getFood". Login is not required
router.get("/getFood", async (req, res) => {
    try {
        const fooditem = await Fooditem.find();
        res.json(fooditem);
        // console.log(fooditem);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});