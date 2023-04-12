import React from 'react'
import About from '../Components/Home/About/About'
import Categories from '../Components/Home/Categories/Categories'
import ChooseUs from '../Components/Home/ChooseUs/ChooseUs'
import Counter from '../Components/Home/Counter/Counter'
import Courses from '../Components/Home/Courses/Courses'
import Events from '../Components/Home/Events/Events'
import Header from '../Components/Home/Header/Header'
import JoinUs from '../Components/Home/JoinUs/JoinUs'
import Posts from '../Components/Home/Posts/Posts'
import Skills from '../Components/Home/Skills/Skills'
import Testimonial from '../Components/Home/Testimonial/Testimonial'
import TrustedBy from '../Components/Home/TrustedBy/TrustedBy'
import Welcome from '../Components/Home/Welcome/Welcome'
import Truested from './../Components/Home/Truested/Truested';

const Home: React.FC = () => {
	return (
    <>
			<Header />
			<Welcome />
			<Courses />
			<Testimonial />
			<Categories />
			<ChooseUs />
			<Truested />
			<About />
			<Counter />
			<Events />
			<Skills />
			<TrustedBy />
			<Posts />
			<JoinUs />
		</>
  )
}

export default Home