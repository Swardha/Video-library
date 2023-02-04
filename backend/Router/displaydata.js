const express = require('express')
const router = express.Router();


router.post('/videoData', (req, res)=>{
    try{
        // console.log(global.list)
        res.send([global.list, global.videoCategory])

    } catch(e){
        console.log(e)
        res.send("server error")
    }
})

module.exports = router;