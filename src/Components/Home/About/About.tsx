import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aboutImg from '../../../assets/images/about/about-1.jpg'
import { BsPatchCheckFill } from 'react-icons/bs'
import CustomButton from '../../Utility/Button/CustomButton'
import './_about.scss'

const About: React.FC = () => {
  return (
    <div className='about'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className="about-img">
							<img src={aboutImg} alt="" />
						</div>
					</Col>
					<Col lg={6}>
						<div className="about-content">
							<span className='welcome-to'>Welcome to</span>
							<h2 className='about-title'>About EduCoursum Company</h2>
							<p>Collaboratively simplify user friendly networks after principle centered coordinate effective methods of empowerment distributed niche markets pursue market positioning web-readiness after resource sucking applications.</p>
							<ul className="checklist list-unstyled d-flex">
								<li>
									<BsPatchCheckFill className='icon' />
									<span>Competitive Rates</span>
								</li>
								<li>
									<BsPatchCheckFill className='icon' />
									<span>Online Certificates</span>
								</li>
							</ul>
							<CustomButton title="learn more" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default About