import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './_courseSidebar.scss'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { courses } from '../../../data';
import ReactPlayer from 'react-player/youtube'

const CourseSidebar: React.FC = () => {
	
	const { slug } = useParams();

	const course = courses.find((course) => course.slug === slug);

  return (
    <div className="course-details-right">
		{/* <iframe
			className="course-video"
			loading="lazy"
			width="800"
			height="500"
			src=""
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe> */}
			<ReactPlayer className="course-video" url='https://www.youtube.com/watch?v=BoCla6xcAiY' />
			
			<div className="price-section">
				{
					course!.priceOffer > 0
					?
					<div className="price-offer-section d-flex justify-content-between">
						<div className="price-offer">${course!.priceOffer}</div>
						<div className="price">${course!.price}</div>
					</div>
					:
					<span className="normal-price">${course!.price}</span>
				}
			</div>

			{/* <NavLink to='/' className='custom-btn d-flex align-items-center justify-content-center'>Buy Now</NavLink> */}
			<ul className="list-unstyled course-info">
				<li>
					<span>Duration</span>
					<span>{course!.duration}</span>
				</li>
				<li>
					<span>Lesson</span>
					<span>{course!.lessons}</span>
				</li>
				<li>
					<span>Quizzes</span>
					<span>{course!.quizzes}</span>
				</li>
				<li>
					<span>Maximum Students</span>
					<span>{course!.students}</span>
				</li>
				<li>
					<span>Language</span>
					<span className='text-capitalize'>{course!.language.map(item => item + " , ")}</span>
					{/* <span className='text-capitalize'>{course!.language.map(item => item)}</span> */}
				</li>
				<li>
					<span>Skill level</span>
					<span>{course!.level}</span>
				</li>
				<li>
					<span>Certificate</span>
					<span>{course!.certificate}</span>
				</li>
				<div className="social d-flex justify-content-center gap-3">
					<FaFacebookF className='icon' />
					<FaTwitter className='icon' />
					<FaInstagram className='icon' />
					<FaLinkedinIn className='icon' />
					<FaPinterestP className='icon' />
				</div>
			</ul>
		</div>
  )
}

export default CourseSidebar