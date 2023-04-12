import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Form from 'react-bootstrap/Form'
import './_addReview.scss'
import avatarImg1 from '../../../assets/images/avatar/avatar-1.jpg'

const AddReview: React.FC<any> = ({ setAllComment }: any) => {

	const [comment, setComment] = useState('');
	const [rating, setRating] = useState(5);

	const handleRating = (rate: number) => {
		setRating(rate);
	}

	const handleComment = (comment: React.ChangeEvent<HTMLInputElement>) => {
		setComment(comment.target.value);
	}

	const handleSendComment = () => {
		setAllComment((prevComments) => [...prevComments, {avatar: avatarImg1, name: 'Jon Doe', initialValue: rating, date: 'August 19, 2022', comment: comment}]);
		setComment('');
		setRating(5);
	}

  return (
    <div className='add-review'>
			<h5 className="add-review-title">Add A Review</h5>
			<form action="">
				<div className="comment-rating">
					<span className='comment-rating-title'>What is it like course ?</span>
					<Rating
						onClick={handleRating}
						size={18}
						allowHover={true}
						initialValue={rating}
						allowFraction={true}
					/>
				</div>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Review</Form.Label>
					<Form.Control as="textarea" onChange={(val: React.ChangeEvent<HTMLInputElement>) => handleComment(val)} rows={8} value={comment} placeholder="Write Reviews" />
				</Form.Group>
				<div className='send-comment-button' onClick={handleSendComment}>
					Send Comment
				</div>
			</form>
		</div>
  )
}

export default AddReview