
import React from 'react'

const NavBar = ({showInventoryHandler}) => {
   console.log(showInventoryHandler)

  return (
    <div className="NavBar">
        <div className="Card_Grid">
            <div className="Card" onClick={showInventoryHandler}>
              <p>DashBoard</p>
            </div>
            <div className="Card">
              <p>Manage Invitation</p>
            </div>
            <div className="Card">
              <p>Mangae category</p>
            </div>
            <div className="Card">
              <p>Create new invitation</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar