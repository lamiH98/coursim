import React from 'react'
import { AiFillStar, AiOutlinePlayCircle } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { VscPerson } from 'react-icons/vsc'
import './_instructor.scss'

interface InstructorProps {
	teacherImg: string;
	teacherName: string;
	category: string;
}

const Instructor: React.FC<InstructorProps> = ({ teacherImg, teacherName, category }) => {
  return (
    <div className="instructor">
			<h5 className='instructor-title'>Instructor</h5>
			<div className="instructor-content d-flex align-items-center">
				<div className="instructor-img">
					<img src={teacherImg} alt="" />
				</div>
				<div className="instructor-info">
					<div className="instructor-name">{teacherName}</div>
					<div className="instructor-category">{category}</div>
					<div className="instructor-info-footer d-flex flex-wrap gap-4">

						<div className="rating">
							<AiFillStar className='icon' />
							<span className="number">3.9</span>
						</div>

						<div className="reviews">
							<BiCommentDetail className='icon' />
							<span className="number">7 Reviews</span>
						</div>

						<div className="students">
							<VscPerson className='icon' />
							<span className="number">35 Students</span>
						</div>

						<div className="courses">
							<AiOutlinePlayCircle className='icon' />
							<span className="number">6 Courses</span>
						</div>

					</div>
				</div>
			</div>
			<p className='instructor-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem, laborum autem fuga possimus similique doloribus asperiores velit, dolorem nostrum modi, inventore incidunt unde. Esse id nostrum atque sapiente similique a, nulla repellendus numquam odit!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque cum, unde officiis nam sint expedita ea sed nihil natus alias iure delectus.</p>
		</div>
  )
}

export default Instructor