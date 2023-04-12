import React from 'react'
import './_join-us.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomButton from './../../Utility/Button/CustomButton';

const JoinUs: React.FC = () => {
  return (
    <div className='join-us'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className="join-single student">
							<h6 className="join-subtitle">popular courses</h6>
							<h3 className="join-title">get the best courses & upgrade your skills</h3>
							<CustomButton title="JOIN WITH US" />
						</div>
					</Col>
					<Col lg={6}>
						<div className="join-single techer">
							<h6 className="join-subtitle">popular courses</h6>
							<h3 className="join-title">get the best courses & upgrade your skills</h3>
							<CustomButton title="JOIN WITH US" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default JoinUs