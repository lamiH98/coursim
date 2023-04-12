import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './_counter.scss'

const Counter: React.FC = () => {

	const counters = [
		{number: 2541, firstWord: 'Successflly', title: 'Trained'},
		{number: 12598, firstWord: 'Classes', title: 'Completed'},
		{number: 97.12, firstWord: 'Satisfaction', title: 'Rate'},
		{number: 96.22, firstWord: 'Success', title: 'Rate'},
	]

  return (
    <div className='counter'>
			<Container>
				<Row>
					{
						counters.map((item, index) => (
							<Col md={6} lg={3} key={index}>
								<div className="counter-single">
									<span className='number'>{item.number}+</span>
									<h4><span>{item.firstWord}</span> {item.title}</h4>
								</div>
							</Col>
						))
					}
					
				</Row>
			</Container>
		</div>
  )
}

export default Counter