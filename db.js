const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sudhanshuprasad:sudhanshuprasad@cluster0.2sxri.mongodb.net/College-Canteen" || process.env.MONGO_URI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Connected to mongoose");
        }
    })
}

module.exports=connectToMongo;