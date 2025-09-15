const mongoose=require('mongoose');  
require('dotenv').config()

//Connecting db
mongoose.connect(process.env.mongoDB_URL)
.then((res)=>{
    console.log('Connection established')
}).catch((err)=>{
    console.log('Connection error')
})