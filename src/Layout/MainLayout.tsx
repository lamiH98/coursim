import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../Components/Utility/ScrollTop'
import ScrollToTop from '../Components/Utility/ScrollToTop/ScrollToTop'
import Footer from './Footer/Footer'
import NavbarComponent from './Navbar/NavbarComponent'

const MainLayout: React.FC = () => {
  return (
    <div className='page'>
			<ScrollTop />
			<NavbarComponent />
			<Outlet />
			<ScrollToTop />
			<Footer />
		</div>
  )
}

export default MainLayout