import React from 'react'
import { NavLink } from 'react-router-dom'
import navlinks from '../assets/navLinks'
import '../styles/dashboard.css'

const SideBar = () => {
  return (
    <div className="sidebar" style={{position:"fixed",height:"100%"}}>
      <div className="sidebar_top">
        <h2><span><i className="ri-taxi-line"></i></span> LOGO</h2>
      </div>
      <div className="sidebar_content">
        <div className="menu">
          <ul className="nav_list">
            {
              navlinks.map((item, index)=>(
              <li className="nav_item" key={index}>
                <NavLink
                 to={item.path} 
                 className={(navClass) => navClass.isActive ? 'nav_active nav_link' : 'nav_link'}>
                  <i className={item.icon}></i>
                  {item.display}
                </NavLink></li>
              ))
            }
          </ul>
        </div>
        <div className="sidebar_bottom">
          <span>
            <i className="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  )
}

export default SideBar