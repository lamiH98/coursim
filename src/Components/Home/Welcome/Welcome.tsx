import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './_welcome.scss'
import welcomeImg from '../../../assets/images/welcome/welcome.png'
import welcomeIcon1 from '../../../assets/images/welcome/welcome_1.png'
import welcomeIcon2 from '../../../assets/images/welcome/welcome_2.png'
import { BsPatchCheckFill } from 'react-icons/bs'
import CustomButton from './../../Utility/Button/CustomButton';

const Welcome: React.FC = () => {
  return (
    <div className='welcome'>
			<Container>
				<Row>
					<Col>
						<div className="welcome-img">
							<img src={welcomeImg} alt="" />
						</div>
					</Col>
					<Col>
						<div className="welcome-content">
							<span className='welcome-to'>Welcome to</span>
							<h2 className='welcome-title'>EduCoursum</h2>
							<p>Collaboratively simplify user friendly networks after principle centered coordinate effective methods of empowerment distributed niche markets pursue market positioning web-readiness after resource sucking applications.</p>
							<div className="welcome-features d-flex">

								<div className="welcome-feature d-flex gap-4">
									<div className="welcome-icon">
										<img src={welcomeIcon1} alt="" />
									</div>
									<div className="welcome-feature-content">
										<h5>Undergraduate Education</h5>
										<span>With flexible courses</span>
									</div>
								</div>

								<div className="welcome-feature d-flex gap-4">
									<div className="welcome-icon">
										<img src={welcomeIcon2} alt="" />
									</div>
									<div className="welcome-feature-content">
										<h5>Postgraduate Education</h5>
										<span>Study flexibly online</span>
									</div>
								</div>

							</div>
							<ul className="checklist list-unstyled">
								<li><BsPatchCheckFill className='icon' />Our unique learning environment sparks physical growth.</li>
								<li><BsPatchCheckFill className='icon' />Discovery while our creative curriculum which combines.</li>
								<li><BsPatchCheckFill className='icon' />Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
							</ul>
							<CustomButton title="get more info" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default Welcome