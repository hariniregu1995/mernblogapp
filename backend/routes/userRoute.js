const express = require("express");
const router = express.Router();
const userModel = require("../model/userData");
const jwt=require('jsonwebtoken')

//API to read all users
router.get('/',async(req,res)=>{
try{
    const data= await userModel.find();
     res.status(200).send(data)
}
catch(error){
    console.error(error);
    res.status(400).send("Data not found")
}
})
//API for post
router.post('/login',async(req,res)=>{
    const user=await userModel.findOne({username:req.body.username})
    if (!user){
        res.json({message:"user not found"})
    }
    try{
        if (user.password==req.body.password)
        {
            const payload={uname:req.body.username,pwd:req.body.password};
            const token=jwt.sign(payload,"secret")
            res.status(200).send({message:"Login successful",usertoken:token})


        }
    }
    catch(error){
        console.log(error)

    }
    
})



module.exports=router