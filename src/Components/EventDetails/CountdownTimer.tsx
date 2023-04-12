import React from 'react'
import './_countdownTimer.scss'
import Countdown from 'react-countdown';

const CountdownTimer: React.FC = () => {
  return (
    <div className='countdownTimer'>
			<Countdown date={'2023-01-09T01:08:03'} renderer={renderer}/>
		</div>
  )
}

// Random component
const Completionist = () => <span>You are good to go!</span>;

const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div className="countdown d-flex" >
			<div className='count'>
				<div className='number'>{days}</div>
				<div className='title'>Days</div>
			</div>
			<div className='count'>
				<div className='number'>{hours}</div>
				<div className='title'>Hrs</div>
			</div>
			<div className='count'>
				<div className='number'>{minutes}</div>
				<div className='title'>Mins</div>
			</div>
			<div className='count'>
				<div className='number'>{seconds}</div>
				<div className='title'>Secs</div>
			</div>
		</div>;
  }
};


export default CountdownTimer