import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { events } from '../../data'
import './_events.scss'
import Breadcrumb from './../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc'
import Event from '../../Components/Events/Event/Event';
import EventSide from '../../Components/Events/EventSide/EventSide'

const Events: React.FC = () => {

	const [allEvents, setAllEvents] = useState(events);
	const [activeTag, setActiveTag] = useState('');
	const [activeCategory, setActiveCategory] = useState('');

	const handleCategoryEvents = (category) => {
		setActiveCategory(category);
		setActiveTag('');
		const CategoryEvents = events.filter(item => {
			return item.category === category;
		})
		if(category === 'All') {
			setAllEvents(events);
		} else {
			setAllEvents(CategoryEvents);
		}
	};

	const handleTagsEvents = (eventTag) => {
		setActiveTag(eventTag);
		setActiveCategory('');
		const tagsEvents = events.filter(item => {
			return item.tags.includes(eventTag);
		})
		if(eventTag === 'All') {
			setAllEvents(events);
		} else {
			setAllEvents(tagsEvents);
		}
	}

  return (
    <div className='events-page'>
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li className='active'>Events</li>
				</>
			</Breadcrumb>
      <Container>
				<Row>
					<Col xl={3}>
						<EventSide handleCategoryEvents={handleCategoryEvents} handleTagsEvents={handleTagsEvents} activeTag={activeTag} activeCategory={activeCategory} />
					</Col>
					<Col xl={9}>
						<h6 className="event-top">
							{allEvents.length} Event Found
						</h6>
						<Row>
							{
								allEvents.map((event, index) => (
									<Col md={6} lg={4} key={index}>
										<Event event={event} />
									</Col>
								))
							}
						</Row>
					</Col>
				</Row>
			</Container>
    </div>
  )
}

export default Events