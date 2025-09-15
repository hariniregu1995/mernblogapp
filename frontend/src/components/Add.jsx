import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
import axiosInstance from '../axiosinterceptor';

const Add = () => {
    const [form,setForm]=useState({
   title:'',
   description:'',
   imageUrl:''
  })
  let navigate=useNavigate()
  function valueUpdate(e) {
       setForm({...form,[e.target.name]:e.target.value})
  }
  function submitInfo() {
    if(location.state!=null){
      axiosInstance.put('/blog/blogupdation/'+location.state.blog._id,form)
      .then((res)=>{
        alert('updated')
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)

      })

    }else{
      //for adding a new blog 
      axiosInstance.post('/blog/newblog',form).then((res)=>{
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
  //to track the current location, use useLocation()
  let location=useLocation();
  useEffect(()=>{
      if (location.state!=null){
          setForm({...form,
            title:location.state.blog.title,
            description:location.state.blog.description,
            imageUrl:location.state.blog.imageUrl
          })
      }
  },[])
  
  return (
    <>
    <br/>
     <div>
        <TextField
          required
          id="outlined-required"
          label="Blog Title"
          name="title"
          value={form.title}
          onChange={valueUpdate}
       />
        </div>
        <br/>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Description"
          name="description"
          value={form.description}
          onChange={valueUpdate}
       />
        </div>
        <br/>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Image URL"
          name="imageUrl"
          value={form.imageUrl}
          onChange={valueUpdate}
       />
        </div>
        <br/>
        
        <Button variant="contained" onClick={submitInfo}>Submit</Button>
        <br/>
       
        </>
        

        
  )
}

export default Add