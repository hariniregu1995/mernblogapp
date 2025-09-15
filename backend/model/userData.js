const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const userData=mongoose.model('users',userSchema);
module.exports=userData