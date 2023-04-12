import React from 'react'
import { filterRatingCourses } from '../../data'

const CourseRatingFilter: React.FC<any> = ({selectFun}) => {
  return (
    <div className='course-filter'>
			<h5 className='filter-title'>Rating</h5>
			<ul className="list-unstyled course-filter-types">
				{
					filterRatingCourses.map((item, index) => (
						<li className='d-flex justify-content-between' key={index}>

							<div className="title">
								<label>
									{/* checked={item.checked ? true : false} */}
									<input type="checkbox" onChange={selectFun} value={item.value} step={50} className='checkbox-filter' />
									{item.title}
								</label>
							</div>

						</li>
					))
				}
				
			</ul>
		</div>
  )
}

export default CourseRatingFilter