const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtScret = "Mynameisendtoyoutubeinstaandfbccc"
const mongoDB = require('../db')

require('../app')
const User = require('../models/UserSchema');
const Video = require('../models/VideoSchema')
const { application } = require('express');

// router.get('/', (req, res)=>{
//     res.send(`hello from router`)
// })

router.post('/signin', async (req, res)=>{
    const {name, email, password, cpassword } = req.body;
    
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "plz fill the details"});
    }
    try {
        const userExist = await User.findOne({ email: email });
    
        if (userExist) {
          return res.status(422).json({ error: "email already exist" });
        }else if(password != cpassword){
          return res.status(422).json({ error: "email already exist" });

        }else{
          let user = new User({ name, email, password, cpassword });
        
          await user.save();
          res.status(201).json({ message: "user reg successfully" });

        }
    
        // if (!userExist) {
        //   return res.status(422).json({ error: "enter corect details" });
        // } else {
        //   res.status(200).json({ message: "congrats" });
        // }
    
       
      } catch (e) {
        console.log(e);
      }
    });

    // login validation
    router.post('/login',async (req, res)=>{
      // console.log(req.body)
      // res.json({message:"successful"})
      try{
        const {email, password} = req.body;

        if(!email || !password){
          return res.status(400).json({error:"Plz fill the details"})
        }

        const userLogin = await User.findOne({email:email})
        const pwdComp = await bcrypt.compare(req.body.password, userLogin.password)

        if(!pwdComp){
          return res.status(400).json({error:"login error"})
        }
          const data = {
            user:{
              id: userLogin.id,
            },
          }

          let authToken = jwt.sign(data, jwtScret)
          return res.json({message:" login success", authToken: authToken})
        
        // console.log(userLogin)
        if(!userLogin){
          res.status(400).json({error:"user error"})
        }else{
          res.json({message:"user login successful"})
        }

      }catch(e){
        console.log(e)

      }
    })

//  Like route
router.post('/like-product', async (req, res)=>{
 const video = new Video(req.body)
 const result = await video.save()
 res.send(result)
})


module.exports = router;