const { default: mongoose } = require("mongoose");
const req = require("mongoose");

const CartSchema = new Schema({
    item:{
        type: String,
        required: true
    },
    timestamp:{
        type: String,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);