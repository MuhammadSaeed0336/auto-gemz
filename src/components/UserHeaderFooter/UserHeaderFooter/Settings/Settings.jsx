import React from 'react'
import './Settings.css'
import { Row, Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';

const Settings = () => {
    let imgsrc = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    let UserName= "User-Name"
    let UserEmail= "User-Email@gmail.com"
    let UserPhone= "000000000"
    let UserAddress= "User-Address"
  return (
    <div className='mainSettingDiv' >
      <Row className='settings border'>
        <Col className='d-flex justify-content-center' lg={12} md={12} sm={12} xs={12}>
            <h2> User Profile </h2>
        </Col>
        <Col className='d-flex justify-content-center' lg={12} md={12} sm={12} xs={12}>
            <img src={imgsrc} className='img-fluid UserProfileImg' alt='User Profile' />
            <Button className='btn btn-primary p-0 m-1' style={{  height: "2rem", width: '6rem' }} onClick={''}>Change</Button>
            <Button className='btn btn-danger p-0 m-1 ' style={{  height: "2rem", width: '6rem' }} onClick={''}>Remove</Button>
        </Col>
        <Row className='mt-2'>
            
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-end'>
                <div style={{  height: "2rem", width: '8rem' }}>
                    <h3><AiOutlineUser className='mb-2'/><strong>Name</strong></h3>
                </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-start'>
                <input type='text' className='form-control' style={{  height: "2rem", width: '12rem' }}  value={UserName} onChange={e => UserName = e.target.value} />
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-end'>
                <div style={{  height: "2rem", width: '8rem' }}>
                    <h3><AiOutlineMail className='mb-2'/><strong>Email</strong></h3>
                </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-start'>
                <input type='text' className='form-control' style={{  height: "2rem", width: '12rem' }}  value={UserEmail} onChange={e => UserName = e.target.value} />
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-end'>
            <div style={{  height: "2rem", width: '8rem' }}>
                    <h3>< AiOutlinePhone className='mb-2'/><strong>Phone</strong></h3>
                </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-start'>
                <input type='text' className='form-control' style={{  height: "2rem", width: '12rem' }}  value={UserPhone} onChange={e => UserName = e.target.value} />
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-end'>
            <div style={{  height: "2rem", width: '9.2rem' }}>
                    <h3><AiOutlineHome className='mb-2'/><strong>Address</strong></h3>
                </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className='d-flex justify-content-start'>
                <input type='text' className='form-control' style={{  height: "2rem", width: '12rem' }}  value={UserAddress} onChange={e => UserName = e.target.value} />
            </Col>
        </Row>
      </Row>
    </div>
  )
}

export default Settings
