import React from 'react'
import './_choose.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import chooseImg1 from '../../../assets/images/choose/choose-1.png'
import chooseImg2 from '../../../assets/images/choose/choose-2.png'
import chooseImg3 from '../../../assets/images/choose/choose-3.png'
import chooseImg4 from '../../../assets/images/choose/choose-4.png'
import Title from '../../Utility/Title/Title'

const ChooseUs: React.FC = () => {

	const chooseUsItems = [
		{img: chooseImg1, title: 'learn anything'},
		{img: chooseImg2, title: 'learn together'},
		{img: chooseImg3, title: 'learn with experts'},
		{img: chooseImg4, title: 'life time access'},
	]

  return (
    <div className='choose-us'>
			<Container>
				<Title title="Why Choose us ?" />
				<Row>
					{
						chooseUsItems.map((item, index) => (
							<Col sm={6} lg={3} key={index}>
								<div className="choose-single text-center">
									<div className="choose-img">
										<img src={item.img} alt="" />
									</div>
									<h5 className="choose-title">{item.title}</h5>
									<p>The latest design trends meet hand-crafted templates in Sassio Collection.</p>
								</div>
							</Col>
						))
					}
					
				</Row>
			</Container>
		</div>
  )
}

export default ChooseUs