import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { VscCircleFilled } from 'react-icons/vsc';
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { events, speakers, whatLearnCourse } from '../../data';
import './_eventDetails.scss'
import { BsCalendar2Date, BsCircleFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import CountdownTimer from './../../Components/EventDetails/CountdownTimer';

const EventDetails: React.FC = () => {
	
	const {slug} = useParams();
	const [event, setEvent] = useState<any>({});

	useEffect(() => {
    const event = events.find((event) => event.slug === slug);
		setEvent(event);
  }, [slug]);

  return (
    <div className='event-details'>
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li><Link to="/events">Events</Link></li>
					<VscCircleFilled className='icon' />
					<li className='active'>{event.title}</li>
				</>
			</Breadcrumb>
			<div className="event-img-content" style={{ backgroundImage: `url(${event.img})` }}>
				<div className="overlay"></div>
				<div className="event-img-header">
					<span><BsCalendar2Date className='icon' /> {event.date}</span>
					<span><MdLocationOn className='icon' /> {event.location}</span>
				</div>
				<h4 className='event-title'>{event.title}</h4>
				<CountdownTimer />
			</div>
			<Container>
				<div className="event-content">
					<Row>
						<Col lg={8}>
							<div className="event-content-header">
								<h5>About The Event</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae commodi tempore sapiente dolor ducimus? Non perspiciatis ipsa, quae quisquam impedit vero alias totam officia doloremque quas voluptas natus quos sequi nulla ab. Minima, nemo voluptates. Quam ut laboriosam adipisci iusto. Quos consequatur optio magnam corrupti, veritatis voluptatibus rerum quod! Culpa?</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis, magnam dolorum perspiciatis quam consequuntur consectetur maiores architecto magni labore.</p>
							</div>
							<div className="learn">
								<h5 className='title'>What you’ll learn</h5>
								<Row>
									{
										whatLearnCourse.map((item, index) => (
											<Col md={6} key={index}>
												<div className="item-single">
													<FaCheckCircle className='icon' />
													<span>{item}</span>
												</div>
											</Col>
										))
									}
								</Row>
							</div>
							<ul className="list-unstyled event-content-table">
								<h5 className="title">Event Contnet</h5>
								<li><BsCircleFill className='icon' /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
								<li><BsCircleFill className='icon' /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas blanditiis corporis?</li>
								<li><BsCircleFill className='icon' /> Lorem ipsum dolor sit amet consectetur.</li>
								<li><BsCircleFill className='icon' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis vitae nam quaerat omnis?</li>
							</ul>
							<h5 className="speakers-title">Our Speakers</h5>
							<div className="speakers d-flex flex-wrap">
								{
									speakers.map((speaker, index) => (
										<div className="speaker-single" key={index}>
											<div className="speaker-img">
												<img src={speaker.img} alt="" />
											</div>
											<h6 className='speaker-name'>{speaker.name}</h6>
											<span className='speaker-job'>{speaker.job}</span>
										</div>
									))
								}
								
							</div>
						</Col>
						<Col lg={4}>

						</Col>
					</Row>
				</div>
			</Container>
		</div>
  )
}

export default EventDetails