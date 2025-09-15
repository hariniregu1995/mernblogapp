const mongoose=require('mongoose')
const blogSchema=mongoose.Schema({
    title:String,
    description:String,
    imageUrl:String
})
const blogData=mongoose.model('blogs',blogSchema);
module.exports=blogData