const express = require('express');
const fetchUser = require('../middlewere/fetchUser');
const router = express.Router();
module.exports = router;
const Fooditem = require('../models/Fooditem');

//Route:1 
//Get cart details using: GET: "/api/fooditem/getFood". Login is not required
router.get("/getFood", async (req, res) => {
    try {
        const fooditem = await Fooditem.find();
        // let newfooditem=[{"homepage": "."}];
        // newfooditem.push(fooditem)
        res.json(fooditem);
        // console.log(newfooditem);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//Route:2
//Get cart details using: GET: "/api/fooditem/getFood/:id". Login is not required
router.get("/getFood/:id", async (req, res) => {
    try {
        const fooditem = await Fooditem.findById(req.params.id);
        res.json(fooditem);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

//Route:3
//Create a new food item using: POST: "/api/fooditem/newFood". Login is required
router.post("/newFood", fetchUser, async(res, req)=>{
    
});