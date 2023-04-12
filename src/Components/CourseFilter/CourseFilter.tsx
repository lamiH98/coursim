import React from 'react'
import './_courseFilter.scss'

interface FilterListProps {
	id: number;
	title: any;
	count: number;
}

type CourseFilterProps = {
	filterTitle: string;
	filterItems: FilterListProps[];
	selectFun: (event: any) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = (
	{ filterTitle, filterItems, selectFun }
	) => {
  return (
    <div className='course-filter'>
			<h5 className='filter-title'>{filterTitle}</h5>
			<ul className="list-unstyled course-filter-types">
				{
					filterItems.map((item, index) => (
						<li className='d-flex justify-content-between' key={index}>

							<div className="title">
								<label>
									{/* checked={item.checked ? true : false} */}
									<input type="checkbox" onChange={selectFun} value={item.title} className='checkbox-filter' />
									{item.title}
								</label>
							</div>

							<div className="count">({item.count})</div>
						</li>
					))
				}
				
			</ul>
    </div>
  )
}

export default CourseFilter