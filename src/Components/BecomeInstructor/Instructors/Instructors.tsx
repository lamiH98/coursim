import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './_instructors.scss'
import { Allinstructors } from '../../../data'
import { AiFillStar } from 'react-icons/ai'
import { BsFillFilePersonFill, BsFileEarmarkPlay } from 'react-icons/bs'

const Instructors: React.FC = () => {
  return (
    <div className="instructors">
			<Container>
				<Row>
					<Col>
						<div className="instructors-title-section">
							<h3 className="title">Learn from the best instructors</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</Col>
				</Row>
				<Row>
					{
						Allinstructors.map((instructor, index) => (
							<Col md={6} lg={3} key={index}>
								<div className="instructors-single">
									<div className="instructors-img">
										<img src={instructor.img} alt="" />
									</div>
									<div className="name d-flex justify-content-between">
										{instructor.name}
										<div className="rate">
											<AiFillStar className="icon" />
											<span>{instructor.rating}</span>
										</div>
									</div>
									<div className="job">{instructor.job}</div>
									<div className="info d-flex flex-wrap">
										<div className="students">
											<BsFillFilePersonFill className="icon" />
											<span>{instructor.students} students</span>
										</div>
										<div className="courses">
											<BsFileEarmarkPlay className="icon" />
											<span>{instructor.courses} Courses</span>
										</div>
									</div>
								</div>
							</Col>
							
						))
					}
						
				</Row>
			</Container>
		</div>
  )
}

export default Instructors