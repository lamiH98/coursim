import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './_footer.scss'
import Logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'

const footer: React.FC = () => {
  return (
		<footer>
      <Container>
        <Row>
          <Col sm={6} lg={3}>
            <div className="logo-section d-flex align-items-center">
              <img src={Logo} alt="" className='logo-img' />
              <NavLink className='nav-link' to="/" end>Coursim</NavLink>
            </div>
            <h6 className='call-us'>Call Us</h6>
            <span className="number">999 666 22 33</span>
            <ul className="footer-info list-unstyled">
              <li>592 KingLam street, Paris </li>
              <li>129 KingLam street, London </li>
              <li>hi@me.com</li>
            </ul>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-menu">
              <h5 className="menu-title">quick links</h5>
              <ul className="list-unstyled menu-items">
                <Link to='about'><li>About</li></Link>
                <Link to='contact'><li>Contact</li></Link>
                <Link to='help-center'><li>Help Center</li></Link>
                <li>refund</li>
                <li>conditions</li>
                <li>privacy policy</li>
              </ul>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-menu">
              <h5 className="menu-title">categories</h5>
              <ul className="list-unstyled menu-items">
                <li>design</li>
                <li>develpment</li>
                <li>marketing</li>
                <li>finance & accounting</li>
                <li>it & software</li>
                <li>photohraphy</li>
              </ul>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-menu">
              <h5 className="menu-title">support</h5>
              <ul className="list-unstyled menu-items">
                <li>profile</li>
                <Link to='contact'><li>Contact</li></Link>
                <Link to='help-center'><li>Help Center</li></Link>
                <Link to='terms-conditions'><li>Terms & Conditions</li></Link>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer