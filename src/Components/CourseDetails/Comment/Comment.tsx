import React from 'react'
import { Rating } from 'react-simple-star-rating'
import './_comment.scss'
import { TfiBackLeft } from 'react-icons/tfi'

const Comment: React.FC<any> = ({ allComments }: any) => {

  return (
		<div className="comments">
			<h5 className="comment-title">Reviews ({allComments.length})</h5>
			<div className="comment-content">
				{
					allComments.map((comment, index) => (
						<div className="comment-single d-flex" key={index}>
							<div className="comment-avatar">
								<img src={comment.avatar} alt="" />
							</div>
							<div className="comment-info">
								<div className="comment-top d-flex">
									<h6 className='name'>{comment.name}</h6>
									<span className='date'>{comment.date}</span>
								</div>
								<Rating
									size={17}
									readonly={true}
									allowHover={false}
									initialValue={comment.initialValue}
									allowFraction={true}
									className='rating-star'
								/>
								<p className="comment-details">{comment.comment}</p>
								<div className="replay">
									<TfiBackLeft className="icon" />
									<span>Replay</span>
								</div>

							</div>
						</div>
					))
				}
				
			</div>
			
		</div>
  )
}

export default Comment