import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/dashboard.css'
const TopNav = () => {
  return (
    <>
      <div className="top_nav">
        <div className="top_nav-wrapper">
          <div className="search_box">
            <input type="text" placeholder="search" />
            <span>
              <i className="ri-search-line"></i>
            </span>
          </div>
          <div className="top_nav-right">
            <div className="profile">
              <Link to="/setting">
                <img src={""} alt="loading" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav