import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { instructorFeatures } from '../../../data'
import './_instructorFeatures.scss'

const InstructorFeatures: React.FC = () => {
  return (
    <div className="instructor-features">
			<Container>
				<Row>
					{
						instructorFeatures.map((instructorFeature, index) => (
							<Col md={6} lg={4} key={index}>
								<div className="instructor-features-single">
									<div className="instructor-features-img">
										<img src={instructorFeature.img} alt="" />
									</div>
									<h6 className="title">{instructorFeature.title}</h6>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
								</div>
							</Col>
						))
					}
					
				</Row>
			</Container>
		</div>
  )
}

export default InstructorFeatures