import React from 'react'
import './_header.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header1 from '../../../assets/images/header/header-1.png'
import Header2 from '../../../assets/images/header/header-2.png'
import Header3 from '../../../assets/images/header/header-3.png'
import Header4 from '../../../assets/images/header/header-4.png'
import Header5 from '../../../assets/images/header/header-5.png'
import { SlGraduation } from 'react-icons/sl'
import { AiOutlinePlayCircle, AiOutlineLaptop } from 'react-icons/ai'
import CustomButton from './../../Utility/Button/CustomButton';
import Video from './Video';

const Header: React.FC = () => {

  return (
    <div className='header'>
			<Container>
        <Row>
          <Col lg={6}>
            <div className="header-content">
              <h1 className="header-title text-capitalize">Start with a best course and get bright <span>future</span> job.</h1>
              <div className="header-btn d-flex">

                <div className="btn-1">
                  <CustomButton title="get started" />
                </div>

                <Video />

              </div>
              <ul className='header-features list-unstyled'>
                <li><SlGraduation className='icon' /> Over 12 million students</li>
                <li><AiOutlinePlayCircle className='icon' /> More than 60,000 courses</li>
                <li><AiOutlineLaptop className='icon' /> Learn anything online</li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="header-img d-none d-lg-block">
              <img src={Header1} alt="" />
              <img src={Header2} alt="" />
              <img src={Header3} alt="" />
              <img src={Header4} alt="" />
              <img src={Header5} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header