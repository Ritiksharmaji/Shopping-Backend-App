const mongoose = require('mongoose');

const mondbUrl = "mongodb+srv://ritiksharma555598:mongodb620@cluster0.km1ez.mongodb.net/?appName=Cluster0"

const connectDb = ()=>{
    console.log("connectDb called");
    return mongoose.connect(mondbUrl)
}

module.exports = {connectDb};