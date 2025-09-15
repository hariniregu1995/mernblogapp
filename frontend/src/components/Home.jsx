import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';
const Home = () => {

const [blogs,setBlogs]=useState([]);
let token=localStorage.getItem('token');
useEffect(()=>{
    axios.get('api/blog/')
    .then((res)=>{
        setBlogs(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })

},[])

//function for deletion
let deleteBlog=(id)=>{
 axiosInstance.delete('/blog/blogremoval/'+id)
 .then((res)=>{
   window.location.reload();
 })
 .catch((err)=>{
  console.log(err);
 })
}

//function for updation
let navigate=useNavigate();
let updateBlog=(blog)=>{
navigate('/add',{state:{blog}})
}
  return (
     <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
     {blogs.map((blog,index) => (
    <Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
         alt="green iguana"
        height="140"
        image={blog.imageUrl}
         title={blog.title}
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {blog.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        { token && (
          <>
        <Button size="small"onClick={()=>{updateBlog(blog)}}>Edit</Button>
        <Button size="small" onClick={()=>{deleteBlog(blog._id)}}>Delete</Button>
        </>
        )
}
      </CardActions>
    </Card>
      ))}
      </div>
  )
}

export default Home