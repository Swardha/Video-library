const mongoose = require('mongoose')


const VideoSchema =new mongoose.Schema({
    CategoryName:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true

    },
    description:{
        type:String,
        require:true
    },
    Videoid:{
        type:String,
        require:true
    }
  

})





const Video = mongoose.model('likes', VideoSchema);

module.exports = Video;