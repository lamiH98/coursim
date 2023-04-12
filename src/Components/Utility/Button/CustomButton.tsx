import React from 'react'
import './_button.scss'

interface ButtonProps{
	title: string,
}

const CustomButton: React.FC<ButtonProps> = ({title}) => {
  return (
    <div className="custom-button">
      <button className='text-capitalize'>{title}</button>
    </div>
  )
}

export default CustomButton