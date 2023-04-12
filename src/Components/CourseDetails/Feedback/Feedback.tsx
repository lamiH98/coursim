import React from 'react'
import { Rating } from 'react-simple-star-rating'
import DetailRating from '../DetailRating/DetailRating'
import './_feedback.scss'

const Feedback = () => {
  return (
    <div className="feedback">
			<h5 className="feedback-title">Feedback</h5>
			<div className="feedback-content d-flex">
				<div className="average-rating d-flex flex-column">
					<span className='average-number'>4.5</span>
					<Rating
						onClick={() => console.log('Click')}
						size={17}
						readonly={true}
						allowHover={false}
						initialValue={4.5}
						allowFraction={true}
						className='rating-star'
					/>
					<span className='count-number'>8 Rating</span>
				</div>
				<DetailRating />
			</div>
		</div>
  )
}

export default Feedback