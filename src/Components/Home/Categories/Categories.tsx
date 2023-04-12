import React from 'react'
import Container from 'react-bootstrap/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import categoryImg1 from '../../../assets/images/categories/category-1.png'
import categoryImg2 from '../../../assets/images/categories/category-2.png'
import categoryImg3 from '../../../assets/images/categories/category-3.png'
import categoryImg4 from '../../../assets/images/categories/category-4.png'
import './_categories.scss'
import Title from '../../Utility/Title/Title';

const Categories: React.FC = () => {

	const swiperCategory = [
    {id: 1, img: categoryImg1, title: 'Art & Humanities', count: 3},
    {id: 2, img: categoryImg2, title: 'Graphic Design', count: 6},
    {id: 3, img: categoryImg3, title: 'Sales Marketing', count: 2},
    {id: 4, img: categoryImg4, title: 'IT and Software', count: 5},
    {id: 5, img: categoryImg2, title: 'Personal Development', count: 4},
    {id: 6, img: categoryImg3, title: 'Art & Humanities', count: 12},
  ];

  return (
    <div className='categories'>
			<Container>
				<Title title="Top Categories" />
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
							slidesPerView: 4,
						},
						991: {
							slidesPerView: 6,
						},
					}}
				>
					{swiperCategory.map(category => (
						<SwiperSlide key={category.id}>
							<div className="category-single">
								<div className="category-img">
									<img src={category.img} alt="" />
								</div>
								<h6 className='category-title'>{category.title}</h6>
								<span className="text-muted">{category.count} Couses</span>
							</div>
					</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</div>
  )
}

export default Categories