const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// console.log("mongo uri = "+process.env.MONGO_URI);
const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Connected to mongoose");
        }
    })
}

module.exports=connectToMongo;