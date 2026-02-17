const mongoose = require('mongoose');

const mondbUrl = "mongodb+srv://ritiksharma555598:ritiksharma555598@cluster0.rik7b7h.mongodb.net/"

const connectDb = ()=>{
    console.log("connectDb called");
    return mongoose.connect(mondbUrl)
}

module.exports = {connectDb};