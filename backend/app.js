const express = require('express');
const dotenv = require('dotenv');
const  mongoose  = require('mongoose');
const cors = require('cors')
const mongoDB = require('./db')
mongoDB();


const app = express();
const PORT = process.env.PORT;



app.use(express.json())
app.use(cors())
app.use(require('./Router/auth'))
app.use(require('./Router/displaydata'))





app.get('/', (req,res)=>{
    res.send("app is working")
})


// const User = require('./Models/UserSchema')


//   mongoose.connect(DB).then(()=>{
//         console.log("connection successful")
//     }).catch((e)=>{
//         console.log(e)
//     })







app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})