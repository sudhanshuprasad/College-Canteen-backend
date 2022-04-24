const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI||"mongodb+srv://sudhanshuprasad:sudhanshuprasad@cluster0.2sxri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Connected to mongoose");
    })
}

module.exports=connectToMongo;