import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './_event.scss'

type EventType = {
	img: string;
	title: string;
	date: string;
	location: string;
	slug: string;
}

interface EventProps {
	event: EventType;
}

const Event: React.FC<EventProps> = ({ event }) => {
  return (
    <div className='event-single'>
      <div className="event-img">
				<img src={event.img} alt="" />
			</div>
			<div className="event-content">
				<div className="date"><BsCalendar2Date className='icon' /> { event.date }</div>
				<h6 className='event-title'><Link to={`/events/${event.slug}`}>{event.title}</Link></h6>
				<div className="location"><MdLocationOn className='icon' /> {event.location}</div>
			</div>
    </div>
  )
}

export default Event