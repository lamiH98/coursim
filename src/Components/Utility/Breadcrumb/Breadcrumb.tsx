import React from 'react'
import './_breadcrumb.scss'
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

type Props = {
	children?: JSX.Element;
}

const Breadcrumb: React.FC<Props> = ({ children }: Props) => {
  return (
		<div className="breadcrumb">
			<Container>
				<ul className='list-unstyled d-flex align-items-center'>
					<li><NavLink to="/">Home</NavLink></li>
					{ children }
				</ul>
			</Container>
		</div>
		
  )
}

export default Breadcrumb