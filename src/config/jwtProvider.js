require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECERET_KEY="2423423423423432";

const generateToken=(userId)=>{

    const token=jwt.sign({userId},SECERET_KEY,{ expiresIn: '48h' })
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECERET_KEY)
    return decodedToken.userId
}


module.exports={generateToken,getUserIdFromToken};