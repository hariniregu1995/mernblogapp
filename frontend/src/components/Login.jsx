import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
   let navigate=useNavigate();
    const [user,setUser]=useState({
        username:'',
        password:''
    })

    let updateValue=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    let validateUser=()=>{
        axios.post("/api/user/login",user)
        .then((res)=>{
           alert(res.data.message)
           if(res.data.usertoken){
           localStorage.setItem("token",res.data.usertoken);
           navigate('/')
           }
        })
     }
  return (
  <>
 <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={user.username} onChange={updateValue}/><br/>
 <br/>
 <TextField id="outlined-basic" label="Password" type="password" variant="outlined" name="password" value={user.password} onChange={updateValue}/><br/>
 <Button variant="contained" onClick={validateUser}>Submit</Button>
  </>
  )
}

export default Login