const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})



// hashing password
userSchema.pre('save', async function(next){
    console.log("hi from inside")
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
        this.cpassword = bcrypt.hashSync(this.cpassword, 12);
    }
    next();
})

const User = mongoose.model('USER', userSchema);

module.exports = User;