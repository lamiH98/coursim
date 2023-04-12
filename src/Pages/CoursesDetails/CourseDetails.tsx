import React, { useState , useEffect } from 'react'
import './_courseDetails.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc';
import { NavLink, useParams } from 'react-router-dom';
import { courses } from '../../data'
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { Rating } from 'react-simple-star-rating';
import Comment from '../../Components/CourseDetails/Comment/Comment';
import AddReview from '../../Components/CourseDetails/AddReview/AddReview';
import { comments } from '../../data'
import CourseSidebar from '../../Components/CourseDetails/CourseSidebar/CourseSidebar';
import { Link } from 'react-scroll'
import CourseOverview from '../../Components/CourseDetails/CourseOverview/CourseOverview';
import Instructor from '../../Components/CourseDetails/Instructor/Instructor';
import Feedback from '../../Components/CourseDetails/Feedback/Feedback';

type CommentProps = {
	avatar: string;
	name: string;
	initialValue: number;
	date: string;
	comment: string;
}

const CourseDetails: React.FC = () => {

	const { slug } = useParams();

	const course = courses.find((course) => course.slug === slug);

	const [allComments, setComments] = useState<CommentProps[]>([]);

	useEffect(() => {
		setComments(comments);
	}, []);

  return (
    <div className='course-details'>
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li><NavLink to="/courses">Courses</NavLink></li>
					<VscCircleFilled className='icon' />
					<li className='active'>{course?.title}</li>
				</>
			</Breadcrumb>
			<div className="course-details-content">
				<Container>
					<Row>

						<Col lg={8}>
							<div className="course-details-left">
								<div className="category">{course?.category}</div>
								<h3 className='course-title'>{course?.title}</h3>
								<p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus ipsam nihil.</p>

								<div className="course-info d-flex gap-5">
									<div className="rating">
										<span className='review'>{course?.review}</span>
										<Rating
											size={17}
											readonly={true}
											allowHover={false}
											initialValue={course?.review}
											allowFraction={true}
											className='rating-star'
										/>
										<span className='review-count'>({course?.reviewCount})</span>
									</div>
									<div className="student">
										<MdOutlinePeopleAlt className="icon" />
										<span className="number">13 Entrolled</span>
									</div>
									<div className="duration">
										<BiTime className="icon" />
										<span className="number">{course?.duration}</span>
									</div>
								</div>

								<div className="techer-info d-flex align-items-center">
									<div className="techer-img"><img src={course?.teacherImg} alt="" /></div>
									<span className="techer-name">{course?.teacherName}</span>
								</div>

								<div className="section-title">
									<Link to='course-overview' spy={true} offset={-150}>Overview</Link>
									<Link to='instructor' spy={true} offset={-150}>Instructor</Link>
									<Link to='feedback' spy={true} offset={-150}>Feedback</Link>
								</div>

								{/* Course Overview Componenet */}
								<CourseOverview />

								{/* Instructor Componenet */}
								<Instructor teacherImg={course!.teacherImg} teacherName={course!.teacherName} category={course!.category} />

								{/* Feedback Componenet */}
								<Feedback />

								{/* Comment Componenet */}
								<Comment allComments={allComments} />

								{/* Add Review Componenet */}
								<AddReview setAllComment={setComments} />

							</div>
						</Col>

						<Col lg={4}>

							{/* Sidebar Course Componenet */}
							<CourseSidebar />

						</Col>

					</Row>
				</Container>
			</div>
    </div>
  )
}

export default CourseDetails