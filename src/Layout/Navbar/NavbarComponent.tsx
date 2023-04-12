import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './_navbar.scss'
import { NavLink, Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'
import { FaFacebookF , FaLinkedinIn , FaInstagram } from 'react-icons/fa'

const NavbarComponent: React.FC = () => {

  const [fixedBar, setfixedBar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          setfixedBar(true);
        } else {
          setfixedBar(false);
        }
    });
}, []);

  return (
    <Navbar expand="lg" className={`${fixedBar ? 'navbar-bg' : ''}`}>
      <Container>
        <Navbar.Brand className='d-flex align-items-center'>
          <img src={Logo} alt="" className='logo-img' />
          <NavLink className='nav-link' to="/" end>Coursim</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav>
            <NavLink className='nav-link' to="/" end>Home</NavLink>
            <NavLink className='nav-link' to="/about">About</NavLink>
            <NavLink className='nav-link' to="/courses">Courses</NavLink>
            <NavLink className='nav-link' to="/events">Events</NavLink>
            <NavLink className='nav-link' to="/become-an-instructor">Instructor</NavLink>
            <NavLink className='nav-link' to="/help-center">Help</NavLink>
            <NavLink className='nav-link' to="/blog">News</NavLink>
            <NavLink className='nav-link' to="/contact">Contact</NavLink>
          </Nav>
          <ul className='social-icons d-flex list-unstyled'>
            <li><Link className='nav-link' to="/"><FaFacebookF /></Link></li>
            <li><Link className='nav-link' to="/"><FaLinkedinIn /></Link></li>
            <li><Link className='nav-link' to="/"><FaInstagram /></Link></li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent