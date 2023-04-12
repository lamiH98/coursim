import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './_instructorJoinUs.scss'
import InstructorJoinUsImg from '../../../assets/images/InstructorFeatures/InstructorFeatures-5.png'

const InstructorJoinUs: React.FC = () => {
  return (
    <div className='instructor-join-us'>
			<Container>
				<Row>
					<Col md={6}>
						<div className="instructor-join-img">
							<img src={InstructorJoinUsImg} alt="" />
						</div>
					</Col>
					<Col md={6}>
						<div className="instructor-join-content">
							<div className='title'>Become an Instructor <span>Today</span></div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis alias aliquam ullam eius eveniet!</p>
							<button className='custom-button'>Join Our Team</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default InstructorJoinUs