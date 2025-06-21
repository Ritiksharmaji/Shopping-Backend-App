const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api-node", status:true});
})


const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const userRouter=require("./routes/user.routes.js");
app.use("/users",userRouter)


module.exports =app;