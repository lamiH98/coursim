import React from 'react'
import './_about.scss'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc';
import About from '../../Components/Home/About/About';
import Welcome from '../../Components/Home/Welcome/Welcome';
import JoinUs from '../../Components/Home/JoinUs/JoinUs';
import Instructors from '../../Components/BecomeInstructor/Instructors/Instructors';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li>About</li>
				</>
			</Breadcrumb>
			
			{/* Welcome Component */}
			<Welcome />

			{/* Join Us Component */}
			<JoinUs />

			{/* About Component */}
			<About />
			
			{/* Instructors Component */}
			<Instructors />

		</div>
  )
}

export default AboutPage