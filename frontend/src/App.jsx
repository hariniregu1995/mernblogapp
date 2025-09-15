import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import { Routes,Route } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'

function App() {

  return (
    <>
    <Navbar/>
    <br/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route element={<PrivateRoutes/>}>
        <Route path='/add' element={<Add/>}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
