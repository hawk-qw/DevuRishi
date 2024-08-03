import React, { useEffect, useState } from 'react'
import Slider from './Components/Slider'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom';
import Login2 from './Pages/Login2';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home';
import Moments from './Pages/Moments';
import End from './Pages/End';
import myImage from './Flower.jpg'; // Import your image

const App = () => {

  return (
    <div style={{

    }} className='font-ganja'  >
      <Routes>
        <Route path="/DevuRishi" element={<Login />} />
        <Route path="/DevuRishi/login" element={<Login2 />} />
        <Route path='/DevuRishi/home' element={<Home />} />
        <Route path='/DevuRishi/moments' element={<Moments />} />
        <Route path='/DevuRishi/end' element={<End />} />
      </Routes>
      <ToastContainer />
    </div>
  )

}

export default App