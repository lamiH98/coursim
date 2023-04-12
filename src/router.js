import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Courses from './Pages/Courses/Courses';
import CourseDetails from './Pages/CoursesDetails/CourseDetails';
import MainLayout from "./Layout/MainLayout";
import Events from "./Pages/Events/Events";
import EventDetails from "./Pages/EventDetails/EventDetails";
import BecomeInstructor from './Pages/BecomeInstructor/BecomeInstructor';
import HelpCenter from './Pages/HelpCenter/HelpCenter';
import Conditions from './Pages/Conditions/Conditions';
import AboutPage from './Pages/About/AboutPage';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/courses', element: <Courses /> },
            { path: 'courses/:slug', element: <CourseDetails /> },
            { path: '/events', element: <Events /> },
            { path: '/events/:slug', element: <EventDetails /> },
            { path: '/become-an-instructor', element: <BecomeInstructor /> },
            { path: '/help-center', element: <HelpCenter /> },
            { path: '/terms-conditions', element: <Conditions /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <Contact /> },
            { path: '/blog', element: <Blog /> },
            { path: '/blog/:slug', element: <BlogDetails /> },
        ]
    },
])

export default router;