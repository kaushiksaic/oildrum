import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import oil from '../assets/images/oildrumlogo.png'
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#home" className='pt-2'>
          <img src={oil} className='me-3' style={{width:'50px',height:'50px'}}/>
          OIL DRUM ENTERTAINMENT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About Us</Link>
            <Link to='/services' className='nav-link'>Services</Link>
          </Nav>
          <div className='d-flex justify-content-end align-items-center  '>
                  <a href='' className='ms-3 text-dark'><FaFacebookF style={{fontSize:20}} /></a>  
                  <a href='' className='ms-3 text-dark'><FaInstagram style={{fontSize:20}} /></a>  
                 <a href='' className='ms-3 text-dark'><FaXTwitter style={{fontSize:20}} /></a>   
                 <a href='' className='ms-3 text-dark'><FaYoutube style={{fontSize:20}} /></a>   
                  </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header