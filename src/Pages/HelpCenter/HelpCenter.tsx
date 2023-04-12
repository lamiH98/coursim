import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc';
import './_helpCenter.scss'
import { helpCenter } from '../../data';
import Accordion from 'react-bootstrap/Accordion';

const HelpCenter: React.FC = () => {
  return (
    <div className="help-center">
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li>Help Center</li>
				</>
			</Breadcrumb>
			<Container>
				<Row>
					<Col>
						<div className="help-center-title text-center">
							<h2 className="text-capitalize title">How Can we help you ?</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam.</p>
						</div>
					</Col>
				</Row>
				<Row>
					{
						helpCenter.map((item, index) => (
							<Col md={6} lg={4} key={index}>
								<div className="help-center-single">
									<div className="help-img">
										<img src={item.img} alt="" />
									</div>
									<h6 className="help-title">{item.title}</h6>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</Col>
						))
					}
				</Row>
				<Row>
					<div className="asked-questions">
						<Col>
							<h2 className="title">Frequently Asked Questions.</h2>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo illo incidunt perferendis.</p>
						</Col>
						<Col md={{ offset: 2, span: 8 }}>
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>Do you offer discounts for students?</Accordion.Header>
									<Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Do you offer special pricing for big teams?</Accordion.Header>
									<Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>What is the past experience of your teachers?</Accordion.Header>
									<Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>What is the course refund policy?</Accordion.Header>
									<Accordion.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
					</div>
				</Row>
			</Container>
		</div>
  )
}

export default HelpCenter