import React from 'react'
import './_event.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Title from '../../Utility/Title/Title'
import { GoLocation } from 'react-icons/go'
import { BiTimeFive } from 'react-icons/bi'
import CustomButton from '../../Utility/Button/CustomButton'
import { events } from '../../../data'
import { Link } from 'react-router-dom'

const Events: React.FC = () => {

  return (
    <div className='events'>
			<Container>
        <Title title="Upcoming Events" />
        <Row>
          {
            events.slice(0, 4).map((event, index) => (
              <Col xl={6} key={index}>
                <div className="event-single">
                  <Row>
                    <Col md={3}>
                      <div className="event-img">
                        <img src={event.img} alt="" />
                      </div>
                    </Col>
                    <Col md={9}>
                    <div className="event-content">
                      <div className="event-info d-flex gap-4">
                        <div className="location"><GoLocation /> {event.location}</div>
                        <div className="time"><BiTimeFive /> {event.duration}</div>
                      </div>
                      <h5><Link className='title' to={`/events/${event.slug}`}>{event.title}</Link></h5>
                      <div className="event-footer d-flex align-items-center">
                        {/* <CustomButton title="view event" /> */}
                        <Link to={`/events/${event.slug}`}><button>View Event</button></Link>
                        <div className="thecher">
                          <img src={event.teacherImg} alt="" />
                          <span className="name">{event.teacherName}</span>
                        </div>
                      </div>
                    </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))
          }
        </Row>
        <Row>
          <Col className='text-center'>
            <CustomButton title="view all events" />
          </Col>
        </Row>
      </Container>
		</div>
  )
}

export default Events