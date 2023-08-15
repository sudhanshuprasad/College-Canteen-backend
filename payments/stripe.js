const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

function payment(items){
    console.log(items)
    return "paid"
}

payment()

module.exports = {payment}