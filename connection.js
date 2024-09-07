const mongoose = require('mongoose');
function connectDB(url){
    mongoose.connect(url).then(()=>console.log("mongoDB connected"));
}

module.exports = connectDB;