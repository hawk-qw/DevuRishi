import React, { useEffect, useState } from 'react'
import Slider from './Components/Slider'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom';
import Login2 from './Pages/Login2';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home';
import Moments from './Pages/Moments';
import End from './Pages/End';

const App = () => {

  return (
    <div style={{ backgroundImage: url(".Flower.jpg") }} className='font-ganja'  >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login2 />} />
        <Route path='/home' element={<Home />} />
        <Route path='/moments' element={<Moments />} />
        <Route path='/end' element={<End />} />
      </Routes>
      <ToastContainer />
    </div>
  )

}

export default App