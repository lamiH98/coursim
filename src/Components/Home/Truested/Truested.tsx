import React from 'react'
import './_truested.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import truestedImg from '../../../assets/images/truested.png'
import { BsPatchCheckFill } from 'react-icons/bs'
import CustomButton from '../../Utility/Button/CustomButton'

const Truested: React.FC = () => {
  return (
    <div className='truested'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className="truested-img">
							<img src={truestedImg} alt="" />
						</div>
					</Col>
					<Col lg={6}>
						<div className="truested-content">
							<h2 className='title'>Truested By Best Teachers</h2>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum voluptatibus repellat sapiente molestias tempora?</p>
							<ul className="checklist list-unstyled">
								<li><BsPatchCheckFill className='icon' />Our unique learning environment sparks physical growth.</li>
								<li><BsPatchCheckFill className='icon' />Discovery while our creative curriculum which combines.</li>
								<li><BsPatchCheckFill className='icon' />Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
							</ul>
							<CustomButton title="see more" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default Truested