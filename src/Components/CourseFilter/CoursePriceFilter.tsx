import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import './_coursePriceFilter.scss'

const CoursePriceFilter: React.FC<any> = ({ selectedPrice, changePrice }) => {

  return (
    <div className='course-price-filter'>
			<h5>Price</h5>
			<Slider range count={1} defaultValue={selectedPrice} onChange={changePrice} min={0} max={1000} dots={true} />
		</div>
  )
}

export default CoursePriceFilter