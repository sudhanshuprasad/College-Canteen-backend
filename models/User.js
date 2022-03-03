const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;
const req = require("mongoose");

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    passwordHash:{
        type: String,
        required: true
    },
    timestamp:{
        type: String,
        required: true,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);
// User.createIndexes();
module.exports = User;