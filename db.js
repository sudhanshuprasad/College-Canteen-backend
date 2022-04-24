const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/College-Canteen?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

await mongo().then(async _mongoose => {
    try{
        console.log('actually Connected to mongo!!');
        await command.execute(client, message, args);
    }
    finally{
        _mongoose.connection.close();
    }
});

const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI, ()=>{
        console.log("Connected to mongoose");
    })
}

module.exports=connectToMongo;