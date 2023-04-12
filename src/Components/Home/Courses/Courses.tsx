import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './_courses.scss'
import Course from '../../Course/Course'
import { courses } from '../../../data';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {

  return (
    <div className='home-courses'>
			<Container>
				<Row>
					<Col className='text-center'>
						<div className="courses-title-section">
							<h2 className='title'>Our Most Popular Courses</h2>
							<span className='text-muted'>20,000+ unique online course list designs</span>
						</div>
					</Col>
				</Row>
				<Row>
					{
						courses.map((course, index) => (
							<Col md={6} lg={4} xl={3} key={index}>
								<Course img={course.img} title={course.title} slug={course.slug} review={course.review} reviewCount={course.reviewCount} lessons={course.lessons} duration={course.duration} level={course.level} teacherImg={course.teacherImg} teacherName={course.teacherName} price={course.price} priceOffer={course.priceOffer} />
							</Col>
						))
					}
					
				</Row>
				<div className="all-courses d-flex justify-content-center">
					<div className="custom-button">
						<Link to="/courses" className='text-capitalize'>View Courses</Link>
					</div>
				</div>
			</Container>
		</div>
  )
}

export default Courses