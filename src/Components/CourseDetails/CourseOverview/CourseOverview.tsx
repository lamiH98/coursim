import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './_courseOverview.scss'
import { whatLearnCourse } from '../../../data';

const CourseOverview: React.FC = () => {
  return (
    <div className="course-overview">
			<h5 className='title'>Course Overview</h5>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse rem doloribus error soluta culpa temporibus repellendus, animi voluptatem. Pariatur sequi soluta ducimus possimus hic quo ad voluptatibus amet esse, quos atque officiis, nam adipisci tempora, temporibus illum praesentium? Voluptatibus corrupti veritatis rerum. Natus fugiat delectus laboriosam ab odio nisi provident.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima optio maiores recusandae odit incidunt asperiores tempore quisquam, quaerat, similique dignissimos temporibus vitae!</p>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolorem blanditiis obcaecati tenetur illo sit odio pariatur quam nisi sed facere porro ea atque praesentium inventore laboriosam, fuga fugit voluptatibus hic nobis. Omnis minus corporis accusantium, tenetur voluptates dolore labore quaerat in sit? Totam, ea quidem rem reprehenderit facere delectus saepe quis, pariatur eligendi dolores quod. Eius accusamus magni optio voluptates. Quis, placeat!</p>
			<div className="learn">
				<h5 className='title'>What you’ll learn</h5>
				<Row>
					{
						whatLearnCourse.map((item, index) => (
							<Col md={6} key={index}>
								<div className="item-single">
									<FaCheckCircle className='icon' />
									<span>{item}</span>
								</div>
							</Col>
						))
					}
				</Row>
			</div>
			<div className="requirements">
				<h5 className='title'>Requirements</h5>
				<ul className="list-unstyled">
					<li className='item-single'>
						<FaCheckCircle className='icon' />
						<span>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.</span>
					</li>
					<li className='item-single'>
						<FaCheckCircle className='icon' />
						<span>No previous design experience is needed.</span>
					</li>
					<li className='item-single'>
						<FaCheckCircle className='icon' />
						<span>No previous Adobe XD skills are needed.</span>
					</li>
				</ul>
			</div>
		</div>
  )
}

export default CourseOverview