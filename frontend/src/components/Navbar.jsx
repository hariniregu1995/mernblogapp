import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  let token=localStorage.getItem('token');
  let navigate=useNavigate();
  let removeUser=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyBlog
          </Typography>
          {!token && (
          <Link to="/login"><Button style={{color:'white'}}>Login</Button></Link>
          )}
          {token && (
            <>
           <Link to="/add"><Button style={{color:'white'}}>Add Blog</Button></Link>
         
            <Button color="inherit" onClick={removeUser}>Logout</Button>
            </>

          )}
        
            
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar