import React, { useState } from 'react'
import { NavDropdown, Button } from 'react-bootstrap';
import './NavBar2.css'


const NavBarLogin = () => {
  let userNavImg = 'https://images.pexels.com/photos/11805196/pexels-photo-11805196.jpeg?auto=compress&cs=tinysrgb&w=400'
  let userNavName = 'UserName'
  const [login, setLogin] = useState(false)

  return (
    <>
      {login ? (
        <>
          <div className='px-5' style={{ display: 'flex' }}>
            <img className='userimg d-inline' src={userNavImg} alt='User' style={{ float: 'left', marginRight: '10px' }} />
            
            <div className='nameAndOptions'>
              <p className='text-danger mb-0 d-inline fw-bold' style={{ padding: '0.8 rem', fontSize: "0.8rem" }}>{userNavName}</p>

              <NavDropdown title='options' id="basic-nav-dropdown" className="dropdown-menu-right" style={{ color: 'white', padding: 0, fontSize: "10px" }}>
                <NavDropdown.Item href="#Profile">Notifications</NavDropdown.Item>
                <NavDropdown.Item href="#Profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Button className='btn-danger' onClick={() => { setLogin(false) }}> Logout </Button></NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </>
      ) : (
        <>
          <Button className='btn btn-light p-0 m-1 d-inline' style={{ width: "3.1em", height: "1.6em", }} onClick={() => setLogin(true)}> Login </Button>
          <Button className='btn btn-danger p-0 m-1 d-inline' style={{ width: "3.7em", height: "1.6em", }}> Sign up </Button>
        </>
      )}
    </>
  );
}

export default NavBarLogin