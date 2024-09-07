const mongoose = require('mongoose');
function connectDB(){
    const url = process.env.MONGO_URI;
    if(!url){
        throw new Error('MONGO_URI environment variable is not defined');
    }
    mongoose.connect(url).then(()=>console.log("mongoDB connected")).catch(err=>console.log("MongoDB connection error:", err));
}

module.exports = connectDB;