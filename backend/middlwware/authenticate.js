const jwt = require("jsonwebtoken");
const User = require('../models/UserSchema');

 const Authenticate = async (req, res, next)=>{
    try{
        const token = req.local

    } catch(e){
        res.status(401).send('Unauthorized: No token provided')
        console.log(e)
    }


 }

 module.exports = Authenticate;