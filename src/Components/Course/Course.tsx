import React from 'react'
import './_course.scss'
import { Rating } from 'react-simple-star-rating'
import { AiOutlineFileText } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface CourseProps {
  img: string;
  title: string;
  review: number;
  reviewCount: number;
  lessons: number;
  duration: string;
  level: string;
  teacherImg: string;
  teacherName: string;
  price: number;
  priceOffer: number;
  slug: string;
}

const Course: React.FC<CourseProps> = ({ img, title, review, reviewCount, lessons, duration, level, teacherImg, teacherName, price, priceOffer, slug } ) => {
  return (
    <div className='course-single'>
			<div className="course-img">
        <img src={img} alt="" />
      </div>
      <div className="review-section d-flex align-items-end justify-content-start">
        <span className='review'>{review}</span>
        <Rating
          onClick={() => console.log('Click')}
          size={20}
          readonly={true}
          allowHover={false}
          initialValue={review}
          allowFraction={true}
        />
        <span className='review-count'>({reviewCount})</span>
      </div>
      <h6 className="course-title">
        <Link to={`/courses/${slug}`}>{title}</Link>
      </h6>
      <div className="course-info d-flex flex-wrap justify-content-between">
        <span><AiOutlineFileText className='icon' /> {lessons} Lesson</span>
        <span><BiTime className='icon' /> {duration}</span>
        <span><BsBarChart className='icon' /> {level}</span>
      </div>
      <div className="course-footer d-flex justify-content-between align-items-center">

        <div className="course-teacher d-flex align-items-center">
          <div className="teacher-img">
            <img src={teacherImg} alt="" />
          </div>
          <span className="teacher-name">{teacherName}</span>
        </div>

        <div className="course-price">
          {
            priceOffer > 0
              ?
              <div className="price-offer-section d-flex">
                <div className="price-offer">{priceOffer}</div>
                <div className="price">{price}</div>
              </div>
              :
              <span className="price">{price}</span>
          }
        </div>

      </div>
		</div>
  )
}

export default Course