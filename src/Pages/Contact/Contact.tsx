import React from 'react'
import './_contact.scss'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoLocation } from 'react-icons/go';
import { BsTelephone , BsClock} from 'react-icons/bs';
import JoinUs from './../../Components/Home/JoinUs/JoinUs';

const Contact: React.FC = () => {
  return (
    <div className='contact'>
      <Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li>Contact</li>
				</>
			</Breadcrumb>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="get-touch">
              <h4 className='title'>get in touch</h4>
              <p>Have a inquiry or some feedback for us? Fill out the form below to contact our team. please contact us at hello@acadu.com.</p>
              <div className="touch-info">

                <div className="info-box d-flex">
                  <div className="icon-box">
                    <GoLocation className='icon' />
                  </div>
                  <div className="info-content">
                    <h5>Our Address</h5>
                    <p>2690 Hiltona Street Victoria Road, New York, Canada</p>
                  </div>
                </div>

                <div className="info-box d-flex">
                  <div className="icon-box">
                    <BsTelephone className='icon' />
                  </div>
                  <div className="info-content">
                    <h5>Our Phone</h5>
                    <p>Mobile: (+65) - 48596 - 5789</p>
                    <p>Mobile: +65-48596-5789</p>
                  </div>
                </div>

                <div className="info-box d-flex">
                  <div className="icon-box">
                    <BsClock className='icon' />
                  </div>
                  <div className="info-content">
                    <h5>Hours of Operation</h5>
                    <p>Monday - Friday: 09:00 - 20:00</p>
                    <p>Sunday & Saturday: 10:30 - 22:00</p>
                  </div>
                </div>

              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-section">
              <h4 className="title">Send a Message</h4>
              <p>Have a inquiry or some feedback for us? Fill out the form below to contact our team. please contact us at hello@acadu.com.</p>
              <form action="">
                <Row>
                  <Col md={6}>
                    <label htmlFor="name">Name</label>
                    <input className='form-control' name='name' type="text" placeholder='Your Name' />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="email">Email</label>
                    <input className='form-control' name='email' type="text" placeholder='example@gmail.com' />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className='form-control' id="message"></textarea>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <JoinUs />
    </div>
  )
}

export default Contact