import React from 'react'
import './_testimonial.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatarImg1 from '../../../assets/images/avatar/avatar-1.jpg'
import avatarImg2 from '../../../assets/images/avatar/avatar-2.jpg'
import avatarImg3 from '../../../assets/images/avatar/avatar-3.jpg'
import avatarImg4 from '../../../assets/images/avatar/avatar-4.jpg'
import avatarImg5 from '../../../assets/images/avatar/avatar-2.jpg'
import { RiDoubleQuotesR } from 'react-icons/ri'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Testimonial = () => {

	const Testimonials = [
		{img: avatarImg1, mainTitle: 'Work Hard', name: 'Robert Fox', job: 'Marketing', content: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”'},
		{img: avatarImg2, mainTitle: 'Great Work', name: 'Robert Fox', job: 'Web Designer', content: '“I think that is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”'},
		{img: avatarImg3, mainTitle: 'Perfect Job', name: 'Robert Fox', job: 'Web Developer', content: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”'},
		{img: avatarImg4, mainTitle: 'Good Work', name: 'Robert Fox', job: 'President of Sales', content: '“I think that is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”'},
		{img: avatarImg5, mainTitle: 'Perfect Work', name: 'Robert Fox', job: 'Product Manager', content: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”'},
		{img: avatarImg3, mainTitle: 'Service Good', name: 'Robert Fox', job: 'UX/UI', content: '“I think that is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”'},
		{img: avatarImg2, mainTitle: 'Perfect Job', name: 'Robert Fox', job: 'President of Sales', content: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”'},
	]

  return (
    <div className='testimonial'>
			<Container>
				<Row>
					<Col lg={6}>
						<div className="testimonial-heading">
							<h3 className='text-capitalize'>people love to learn with us</h3>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem exercitationem eveniet quia veniam non neque?</p>
							<div className="testimonial-heading-info d-flex">

								<div className="testimonial-heading-single">
									<div className="number">9/10</div>
									<p>9/10 users reported better learning outcomes.</p>
								</div>

								<div className="testimonial-heading-single">
									<div className="number">85%</div>
									<p>85% of students see their course through to completion.</p>
								</div>

							</div>
						</div>
					</Col>
					<Col lg={6}>
						<Swiper
							effect={"cards"}
							grabCursor={true}
							modules={[EffectCards]}
							className="mySwiper"
						>
							{
								Testimonials.map((item, index) => (
									<SwiperSlide key={index}>
										<div className="swiper-heading d-flex justify-content-between">
											<div className="main-title">{item.mainTitle}</div>
											<RiDoubleQuotesR className="icon" />
										</div>
										<div className="content">{item.content}</div>
										<div className="swiper-bottom d-flex align-items-center">
											<div className="swiper-img"><img src={item.img} alt="" /></div>
											<div className="swiper-about">
												<div className="swiper-name">{item.name}</div>
												<div className="swiper-job">{item.job}</div>
											</div>
										</div>
									</SwiperSlide>
								))
							}
						</Swiper>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default Testimonial