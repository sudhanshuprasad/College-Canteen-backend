const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const fetchUser = require("../middlewere/fetchUser");
const { body, validationResult } = require('express-validator');

//Route:1 
//Get cart details using: GET: "/api/cart/getCart". Login is required
router.get("/getCart", fetchUser, async (req, res) => {
    try {
        const cart = await Cart.find({ user: req.user.id });
        res.json(cart);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route:2 
//Get create a new cart using: POST: "/api/cart/updateCart". Login is required
router.post("/newCart", fetchUser, async (req, res) => {
    try {
        const { items } = req.body;
        const cart = new Cart({
            user: req.user.id,
            items
        });

        const saveCart = await cart.save();
        res.json(saveCart);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


//Route:3
//Get cart details using: PUT: "/api/cart/updateCart". Login is required
router.put("/updateCart", fetchUser, async (req, res) => {
    try {
        const { items } = req.body;
        const newCart = {};
        if(items){newCart.items = items;}
        let cart = await Cart.findOne({user: req.user.id});
        
        //if cart is not found, create a new cart
        if(cart==null){
            try {
                cart = new Cart({
                    user: req.user.id,
                    items
                });
        
                const saveCart = await cart.save();
                return res.json(saveCart);
        
            }
            catch (error) {
                console.error(error.message);
                return res.status(500).send("Internal server error");
            }

        }
        //else update the cart
        else{
            cart = await Cart.findByIdAndUpdate(cart.id, { $set: newCart }, {new: true});
        }
        res.json(cart);
        console.log(cart.id);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;