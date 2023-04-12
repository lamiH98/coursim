import React from 'react'
import './_skills.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aboutImg from '../../../assets/images/about/about-1.jpg'
import { BsPatchCheckFill } from 'react-icons/bs'
import CustomButton from '../../Utility/Button/CustomButton'

const Skills: React.FC = () => {
  return (
    <div className='skills'>
			<Container>
				<Row className='align-items-center'>
					<Col lg={6}>
						<div className="skill-content">
							<h2 className='skill-title'>Learn <span>new skills</span> when and where you like.</h2>
							<p>Use the list below to bring attention to your product’s key differentiator Use the list below to bring attention to your product’s key differentiator.</p>
							<CustomButton title="join free" />
						</div>
					</Col>
					<Col lg={6}>
						<div className="skill-img">
							<img src={aboutImg} alt="" />
							<ul className="checklist list-unstyled">
								<li><BsPatchCheckFill className='icon' />Hand-Picked Authors</li>
								<li><BsPatchCheckFill className='icon' />Easy To Follow Curriculum</li>
								<li><BsPatchCheckFill className='icon' />Free Courses</li>
								<li><BsPatchCheckFill className='icon' />Money-Back Guarantee</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default Skills