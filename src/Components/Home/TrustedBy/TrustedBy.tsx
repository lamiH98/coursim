import React from 'react'
import './_trustedBy.scss'
import Container from 'react-bootstrap/esm/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import trustedByImg1 from '../../../assets/images/trustedBy/trusted-by-1.png'
import trustedByImg2 from '../../../assets/images/trustedBy/trusted-by-2.png'
import trustedByImg3 from '../../../assets/images/trustedBy/trusted-by-3.png'
import trustedByImg4 from '../../../assets/images/trustedBy/trusted-by-4.png'
import Title from '../../Utility/Title/Title';

const TrustedBy: React.FC = () => {
	
  const swiperTrusted = [
    {id: 1, img: trustedByImg1},
    {id: 2, img: trustedByImg2},
    {id: 3, img: trustedByImg3},
    {id: 4, img: trustedByImg4},
    {id: 5, img: trustedByImg1},
    {id: 6, img: trustedByImg3},
  ];

  return (
    <div className='trustedBy'>
			<Container>
				<Title title="Trusted by the world’s best" />
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={0}
					slidesPerView={6}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{ 
						1: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 5,
						},
						991: {
							slidesPerView: 6,
						},
					}}
				>
					{swiperTrusted.map(swiper => (
						<SwiperSlide key={swiper.id}>
								<img src={swiper.img} alt="" />
					</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
  )
}

export default TrustedBy