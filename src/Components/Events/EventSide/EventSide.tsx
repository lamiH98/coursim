import React from 'react'
import './_eventSide.scss'

const EventCategories = ['All', 'Business', 'Design', 'Illustration', 'Lifestyle', 'IT & Software', 'Translate'];
const EventTags = ['All', 'Business', 'Design', 'Illustration', 'Lifestyle', 'IT & Software', 'Translate'];

const EventSide: React.FC<any> = ({ handleCategoryEvents, handleTagsEvents, activeTag, activeCategory }) => {
  return (
    <div className="events-left">

			<div className="event-categories">
				<h5 className="title">Categories</h5>
				<ul className="list-unstyled">
					{
						EventCategories.map((item, index) => (
							<li className={`${activeCategory === item ? 'activeCategory' : ''}`} onClick={() => handleCategoryEvents(item)} key={index}>{item}</li>
						))
					}
				</ul>
			</div>

			<div className="event-tags">
				<h5 className="title">Events Tags</h5>
				<ul className="list-unstyled">
				{
					EventTags.map((item, index) => (
						<li className={`${activeTag === item ? 'activeTag' : ''}`} onClick={() => handleTagsEvents(item)} key={index}>{item}</li>
					))
				}
				</ul>
			</div>

		</div>
  )
}

export default EventSide