const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || "mongodb+srv://sudhanshuprasad:sudhanshuprasad@cluster0.2sxri.mongodb.net/College-Canteen";

const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI, (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Connected to mongoose");
    })
}

module.exports=connectToMongo;