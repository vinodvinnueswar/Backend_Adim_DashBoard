import React, { useState } from 'react'
import Login_Page from '../components/Authentication/Login_Page'
import Register_Page from '../components/Authentication/Register_Page';
import { Routes,Route } from 'react-router-dom';
import Home_Page from '../components/Authentication/Data_Collection/Home_Page';

const LandingPage = () => {

  return (
    <>
     <Routes>
      <Route path="/" element={<Login_Page/>} />
      <Route path='/register' element={<Register_Page/>} />
      <Route path='/Home_Page' element={<Home_Page/>} />
     </Routes>



    </>
  )
}

export default LandingPage