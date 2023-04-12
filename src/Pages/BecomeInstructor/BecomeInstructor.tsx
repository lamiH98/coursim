import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from './../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc';
import './_becomeInstructor.scss';
import InstructorTabs from './../../Components/BecomeInstructor/InstructorTabs/InstructorTabs';
import InstructorFeatures from '../../Components/BecomeInstructor/InstructorFeatures/InstructorFeatures';
import JoinUs from '../../Components/BecomeInstructor/InstructorJoinUs/InstructorJoinUs';
import Instructors from './../../Components/BecomeInstructor/Instructors/Instructors';

const BecomeInstructor: React.FC = () => {

  return (
    <div className='become-instructor'>
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li>Become An Instructor</li>
				</>
			</Breadcrumb>
			<Container>
				<Row>
					<Col>
						<div className="become-instructor-title text-center">
							<h2 className='title'>Become an Instructor</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, doloremque?</p>
						</div>
					</Col>
				</Row>

				{/* Instructor Tabs Component */}
				<InstructorTabs />

				{/* Instructor Features Component */}
				<InstructorFeatures />

				{/* Join Us Component */}
				<JoinUs />

				{/* Instructors Component */}
				<Instructors />

			</Container>
		</div>
  )
}

export default BecomeInstructor