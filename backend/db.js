const  mongoose  = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:"./.env"});

const DB = process.env.DATABASE;


const mongoDB = async ()=>{
    await mongoose.connect(DB, async (e, result)=>{
        if( e){
            console.log("___", e)
        }else{
            console.log("connected");
            const fetched_Data = await mongoose.connection.db.collection("list");
            fetched_Data.find({}).toArray(async function (e, data){
                const videoCat = await mongoose.connection.db.collection("videoCategory");
                videoCat.find({}).toArray(function (e, catData){
                     if(e){
                    console.log(e)
                }else{
                    global.list = data;
                    global.videoCategory = catData;
                    // console.log( global.list)
                }
                })
                // if(e){
                //     console.log(e)
                // }else{
                //     global.list = data;
                //     // console.log( global.list)
                // }
            })
        }
       

    })

}

module.exports = mongoDB;