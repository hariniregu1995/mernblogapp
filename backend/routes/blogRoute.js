const express = require("express");
const router = express.Router();
const blogModel = require("../model/blogData");
const jwt=require('jsonwebtoken')

//Adding middleware
function verifyToken(req,res,next){
    let token=req.headers.token;
    try {
        if (!token) throw 'Unauthorised Access'
        let payload=jwt.verify(token,"secret")
         if (!payload) throw 'Unauthorised Access'
         next()
        
    } catch (error) {
        res.json({message:error})
    }
}

router.get('/',async(req,res)=>{
try{
    const data= await blogModel.find();
     res.status(200).send(data)
}
catch(error){
    console.error(error);
    res.status(400).send("data not found")
}
})
//API to add a new blog
router.post('/newblog',verifyToken,async(req,res)=>{
try{
const post =req.body;
const data = await blogModel(post).save();
res.status(200).send({message:"blog added",blog:data});
}
catch(error){
 console.error(error);
 res.status(400).send("failed to add blog")
}
});

//API to perform delete operation

router.delete('/blogremoval/:id',async(req,res)=>{
try{
    await blogModel.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully");

}
catch(error){
     console.log("error in deletion");
}
})

//API for updation
router.put('/blogupdation/:id',async (req,res)=>{
    try {
     const data= await blogModel.findByIdAndUpdate(req.params.id,req.body);
     res.send('Updated successfully')
    } catch (error) {
     console.log(error)
    }
 })

module.exports=router



