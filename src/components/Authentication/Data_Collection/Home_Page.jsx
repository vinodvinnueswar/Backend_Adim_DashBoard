
import React, { useState } from 'react'
import NavBar from './Nav_And_Sildebars/NavBar'
import SlideBar from './Nav_And_Sildebars/SlideBar'
import Logo_title from './Nav_And_Sildebars/Logo_title'
import AddInventory_DashBoard from './Data_Fields/AddInventory_DashBoard'
import { useNavigate } from 'react-router-dom'

const Home_Page = () => {
  
  const navigate = useNavigate()

  const [showInventory , setShowInventory] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  
  const showInventoryHandler = () =>{
      setShowInventory(true)
  }

  const logOutHandler = () =>{
    localStorage.removeItem("loginToken")
    navigate('/')
    alert('Are you sure to LogOut')
  }

  return (
    <div className="Home_Page">
      <Logo_title/>
      <NavBar showInventoryHandler = {showInventoryHandler}  />
      <div className="Collection_Section">
        <SlideBar logOutHandler={logOutHandler}/>
        {showInventory && <AddInventory_DashBoard/>}
      </div>
    </div>
  )
}

export default Home_Page