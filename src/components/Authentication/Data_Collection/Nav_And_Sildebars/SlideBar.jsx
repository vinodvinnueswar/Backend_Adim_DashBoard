
import React from 'react'
import Divider from "@mui/material/Divider";

const SlideBar = ({logOutHandler}) => {
  return (
    <div className="Slide_Bar">
        <div className="Slider_Card">
           
           {/* Slider Card */}

            <div className="DashBoard">
            <p>DashBoard</p>
            </div>
            <Divider/>
            <div className="OverView">
            <p>OverView</p>
        </div>
        <Divider/>
        <div className="Category">
            <p>Category</p>
        </div>
        </div>

        {/* Quick Actions */}

        <div className="QuickAction_Card">
            <h2>Quick Actions</h2>
              <div className="Invitation">
                <p>Create new Invitation</p>
              </div>
              <Divider/>
              <div className="All-Invitations">
                <p>View All Invitations</p>
              </div>
        </div>
        
        {/* Logout Button */}
        <div className="Log_Out" onClick={logOutHandler}>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default SlideBar