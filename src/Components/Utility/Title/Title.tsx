import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GiSecretBook } from 'react-icons/gi'

interface TitleProps{
	title: string
}

const Title: React.FC<TitleProps> = ({title}: TitleProps) => {
  return (
    <Row>
			<Col className='text-center'>
				<div className="title-section">
					<h6><GiSecretBook /> WORKING STRATEGY</h6>
					<h3 className='main-title'>{title}</h3>
				</div>
			</Col>
		</Row>
  )
}

export default Title