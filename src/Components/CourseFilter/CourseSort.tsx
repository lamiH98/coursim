import React, { useEffect } from 'react'
import CoursesFilter from '../../Hooks/CoursesFilter'

const CourseSort: React.FC = () => {

	const { coursesList, sort, handleSort, applyFilters } = CoursesFilter();
	
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);
	
  return (
    <div className="course-top-wrapper d-flex justify-content-between">
			<h6 className="courses-found">{coursesList.length} Courses Found</h6>
			<div className="sort-by d-flex gap-3 align-items-center">
				<h6>Sort By:</h6>
				<select name="sort" id="sort" value={sort} onChange={handleSort}>
					<option value='default' selected>Default</option>
					<option value="priceAsc">Price (ASC)</option>
					<option value="priceDes">Price (DES)</option>
					<option value="nameAsc">name (ASC)</option>
					<option value="nameDes">name (DES)</option>
				</select>
			</div>
		</div>
  )
}

export default CourseSort