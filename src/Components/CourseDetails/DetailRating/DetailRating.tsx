import React from 'react'
import { Rating } from 'react-simple-star-rating';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './_detailRating.scss'

const DetailRating: React.FC = () => {

	const ratingProgress = [
		{ value: 85, initialValue: 5, percent: 75},
		{ value: 80, initialValue: 4, percent: 8},
		{ value: 90, initialValue: 3, percent: 7},
		{ value: 5, initialValue: 2, percent: 5},
		{ value: 5, initialValue: 1, percent: 5},
	];

  return (
    <div className="detail-rating">
			{
				ratingProgress.map((rating, index) => (
					<div className="value-content d-flex align-items-center" key={index}>
						<ProgressBar variant="warning" now={rating.value} />
						<Rating
							onClick={() => console.log('Click')}
							size={17}
							readonly={true}
							allowHover={false}
							initialValue={rating.initialValue}
							allowFraction={true}
							className='rating-star'
						/>
						<div className="percent">{rating.percent}%</div>
					</div>
				))
			}
		</div>
  )
}

export default DetailRating