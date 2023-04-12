import { Rating } from 'react-simple-star-rating';
import courseImg1 from '../src/assets/images/courses/course-1.jpg'
import courseImg2 from '../src/assets/images/courses/course-2.jpg'
import courseImg3 from '../src/assets/images/courses/course-3.jpg'
import courseImg4 from '../src/assets/images/courses/course-4.jpg'
import courseImg5 from '../src/assets/images/courses/course-5.jpg'
import courseImg6 from '../src/assets/images/courses/course-6.jpg'
import avatarImg1 from '../src/assets/images/avatar/avatar-1.jpg'
import avatarImg2 from '../src/assets/images/avatar/avatar-2.jpg'
import avatarImg3 from '../src/assets/images/avatar/avatar-3.jpg'
import avatarImg4 from '../src/assets/images/avatar/avatar-4.jpg'
import avatarImg5 from '../src/assets/images/avatar/avatar-6.jpg'
import avatarImg6 from '../src/assets/images/avatar/avatar-7.jpg'
import avatarImg7 from '../src/assets/images/avatar/avatar-8.jpg'
import InstructorFeatures1 from '../src/assets/images/InstructorFeatures/InstructorFeatures-1.svg'
import InstructorFeatures2 from '../src/assets/images/InstructorFeatures/InstructorFeatures-2.svg'
import InstructorFeatures3 from '../src/assets/images/InstructorFeatures/InstructorFeatures-3.svg'
import InstructorFeatures4 from '../src/assets/images/InstructorFeatures/InstructorFeatures-4.svg'
import Instructor1 from '../src/assets/images/InstructorFeatures/Instructor-1.jpg'
import Instructor2 from '../src/assets/images/InstructorFeatures/Instructor-2.jpg'
import Instructor3 from '../src/assets/images/InstructorFeatures/Instructor-3.jpg'
import Instructor4 from '../src/assets/images/InstructorFeatures/Instructor-4.jpg'
import HelpCenter1 from '../src/assets/images/HelpCenter/helpCenter-1.svg'
import HelpCenter2 from '../src/assets/images/HelpCenter/helpCenter-2.svg'
import HelpCenter3 from '../src/assets/images/HelpCenter/helpCenter-3.svg'
import HelpCenter4 from '../src/assets/images/HelpCenter/helpCenter-4.svg'
import HelpCenter5 from '../src/assets/images/HelpCenter/helpCenter-5.svg'
import HelpCenter6 from '../src/assets/images/HelpCenter/helpCenter-6.svg'
import postImg1 from '../src/assets/images/posts/post-1.jpg'
import postImg2 from '../src/assets/images/posts/post-2.jpg'
import postImg3 from '../src/assets/images/posts/post-3.jpg'

export const filterCategoriesCourses = [
    {id: 1, title: 'Web Design', count: 1},
    {id: 2, title: 'Web Developer', count: 2},
    {id: 3, title: 'UI/UX Desinger', count: 0},
    {id: 4, title: 'Digital Marketing', count: 1},
    {id: 5, title: 'Graphic Design', count: 0},
    {id: 6, title: 'IT and Software', count: 1},
    {id: 7, title: 'Personal Development', count: 0},
    {id: 8, title: 'Sales Marketing', count: 0},
];

export const filterInstructorsCourses = [
    {id: 1, title: 'Summer Odonnell', count: 1},
    {id: 2, title: 'Ramona Benson', count: 2},
    {id: 3, title: 'Martha Campbell', count: 1},
    {id: 4, title: 'Damian Mcguire', count: 2},
    {id: 5, title: 'John Doe', count: 0},
    {id: 6, title: 'Robet Flex', count: 0},
];

export const filterPriceCourses = [
    {id: 1, title: 'All', count: 6},
    {id: 2, title: 'Free', count: 8},
    {id: 3, title: 'Paid', count: 9},
];

export const filterRatingCourses = [
    {
        id: 1,
        title: <Rating
            onClick={() => console.log('Click')}
            size={18}
            readonly={true}
            allowHover={false}
            initialValue={5}
            allowFraction={true}
        />,
        value: 5
    },
    {
        id: 2,
        title: <Rating
            onClick={() => console.log('Click')}
            size={18}
            readonly={true}
            allowHover={false}
            initialValue={4}
            allowFraction={true}
        /> ,
        value: 4
    },
    {
        id: 3,
        title: <Rating
            onClick={() => console.log('Click')}
            size={18}
            readonly={true}
            allowHover={false}
            initialValue={3}
            allowFraction={true}
        /> ,
        value: 3
    },
    {
        id: 4,
        title: <Rating
            onClick={() => console.log('Click')}
            size={18}
            readonly={true}
            allowHover={false}
            initialValue={2}
            allowFraction={true}
        /> ,
        value: 2
    },
    {
        id: 5,
        title: <Rating
            onClick={() => console.log('Click')}
            size={18}
            readonly={true}
            allowHover={false}
            initialValue={1}
            allowFraction={true}
        /> ,
        value: 1
    },
];

export const filterLevelsCourses = [
    {id: 1, title: 'All Level', count: 1},
    {id: 2, title: 'Beginner', count: 2},
    {id: 3, title: 'Intermediate', count: 1},
    {id: 4, title: 'Expert', count: 1},
];

export const courses = [
    {img: courseImg1, slug: 'learn-front-end-developer-(React.js)' , title: 'learn front end developer (React.js)', review: 4.5, reviewCount: 3, lessons: 80, duration: '15 days', level: 'All Level', students: 25, teacherImg: avatarImg1, teacherName: 'Ramona Benson', price: 150, priceOffer: 0, category: 'Web Design', quizzes: 22, language: ['arabic'], certificate: 'Yes'},
    {img: courseImg2, slug: 'Get-Start-PHP-JS-Tutorial-For-Adance-Guy' , title: 'Get Start PHP JS Tutorial For Adance Guy', review: 3.5, reviewCount: 3, lessons: 120, duration: '6 days', level: 'Beginner', students: 33, teacherImg: avatarImg2, teacherName: 'Damian Mcguire', price: 99.99, priceOffer: 0, category: 'Web Developer', quizzes: 15, language: ['arabic', 'english'], certificate: 'No'},
    {img: courseImg3, slug: 'Learn-3D-Modelling-and-Design-for-Beginners' , title: 'Learn 3D Modelling and Design for Beginners', review: 5, reviewCount: 3, lessons: 75, duration: '30 days', level: 'Intermediate', students: 50, teacherImg: avatarImg3, teacherName: 'Summer Odonnell', price: 330, priceOffer: 280, category: 'Digital Marketing', quizzes: 10, language: ['arabic', 'english', 'french'], certificate: 'Yes'},
    {img: courseImg6, slug: 'Marketing-2023:-Complete-Guide-To-Instagram-Growth' , title: 'Marketing 2023: Complete Guide To Instagram Growth', review: 5, reviewCount: 15, lessons: 3, duration: '9 days', level: 'Beginner', students: 15, teacherImg: avatarImg2, teacherName: 'Damian Mcguire', price: 79, priceOffer: 59, category: 'IT and Software', quizzes: 30, language: ['spanish', 'english'], certificate: 'Yes'},
    {img: courseImg4, slug: 'The-Complete-Financial-Analyst-Training-&-Investing' , title: 'The Complete Financial Analyst Training & Investing', review: 4.5, reviewCount: 30, lessons: 3, duration: '12 days', level: 'All', students: 20, teacherImg: avatarImg4, teacherName: 'Martha Campbell', price: 259, priceOffer:210 , category: 'Personal developer', quizzes: 6, language: ['arabic', 'spanish'], certificate: 'No'},
    {img: courseImg5, slug: 'Idea-was-based-on-our-experiences-learning-Photoshop' , title: 'Idea was based on our experiences learning Photoshop', review: 4, reviewCount: 99, lessons: 3, duration: '24 days', level: 'Expert', students: 75, teacherImg: avatarImg1, teacherName: 'Ramona Benson', price: 85, priceOffer: 0, category: 'Web Developer', quizzes: 20, language: ['arabic', 'english', 'spanish'], certificate: 'Yes'},
];

export const whatLearnCourse = [
    'Become a UX designer.', 'You will be able to add UX designer to your CV', 'Build a UX project from beginning to end.', 'Downloadable exercise files',
    'How to use premade UI kits.', 'Create your first UX brief & persona.', 'All the techniques used by UX professionals',
    'Become a UX designer.', 'You will be able to add UX designer to your CV', 'Build a UX project from beginning to end.', 'Downloadable exercise files',
    'How to use premade UI kits.', 'Create your first UX brief & persona.', 'All the techniques used by UX professionals',
]

export const comments = [
    { avatar: avatarImg1, name: 'Admin', initialValue: 5, date: 'August 19, 2022' , comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quo ad consequatur enim soluta, eaque, veniam minus illo ut nemo, pariatur exercitationem cupiditate! Molestiae, error blanditiis?'},
    { avatar: avatarImg2, name: 'User', initialValue: 4, date: 'August 22, 2022' , comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quo ad consequatur enim soluta, eaque, veniam minus illo ut nemo.'},
    { avatar: avatarImg3, name: 'jon Doe', initialValue: 5, date: 'August 17, 2022' , comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quo ad consequatur enim soluta, eaque, veniam minus illo ut nemo, pariatur exercitationem'},
];

export const events = [
    { img: courseImg1, slug: 'using-laptop-and-PC-working-At-Home', title: 'using laptop and PC working At Home', date: 'March 21, 2022', location: 'Paris, France' , category: 'Business', tags: ['Design', 'Business', 'Translate']},
    { img: courseImg2, slug: 'Professional-Photographer-Shooting-Home', title: 'Professional Photographer Shooting Home', date: 'March 21, 2022', location: 'Paris, France' , category: 'Design', tags: ['Translate', 'events']},
    { img: courseImg3, slug: 'Learn-3D-Modelling-and-Design-for-Beginners', title: 'Learn 3D Modelling and Design for Beginners', date: 'March 21, 2022', location: 'Paris, France' , category: 'Lifestyle', tags: ['Design', 'IT & Software']},
    { img: courseImg4, slug: 'learn-front-end-developer-(React.js)', title: 'learn front end developer (React.js)', date: 'March 21, 2022', location: 'Paris, France' , category: 'Illustration', tags: ['Design', 'Business']},
    { img: courseImg1, slug: 'using-laptop-and-PC-working-At-Home', title: 'using laptop and PC working At Home', date: 'March 21, 2022', location: 'Paris, France' , category: 'Lifestyle', tags: ['Illustration', 'IT & Software']},
    { img: courseImg2, slug: 'Professional-Photographer-Shooting-Home', title: 'Professional Photographer Shooting Home', date: 'March 21, 2022', location: 'Paris, France' , category: 'Business', tags: ['Design', 'Illustration']},
    { img: courseImg3, slug: 'Learn-3D-Modelling-and-Design-for-Beginners', title: 'Learn 3D Modelling and Design for Beginners', date: 'March 21, 2022', location: 'Paris, France' , category: 'Business', tags: ['Design', 'sdfsadf']},
    { img: courseImg4, slug: 'learn-front-end-developer-(React.js)', title: 'learn front end developer (React.js)', date: 'March 21, 2022', location: 'Paris, France' , category: 'Design', tags: ['Design', 'Translate']},
]

export const speakers = [
    { img: avatarImg5, name: 'John Doe', job: 'President of sales' },
    { img: avatarImg6, name: 'Lami Fox', job: 'Marketing' },
    { img: avatarImg7, name: 'John Doe', job: 'Designer' },
];

export const instructorFeatures = [
    { img: InstructorFeatures1, title: 'Learn with Experts'},
    { img: InstructorFeatures2, title: 'Learn Anything'},
    { img: InstructorFeatures3, title: 'Flexible Learning'},
    { img: InstructorFeatures2, title: 'Learn Anything'},
    { img: InstructorFeatures4, title: 'Industrial Standart'},
];

export const Allinstructors = [
    { img: Instructor1, name: 'John Doe', job: 'Digital Marketing', rating: 4, students: 75, courses: 40 },
    { img: Instructor2, name: 'Lami Fox', job: 'Digital Marketing', rating: 5, students: 98, courses: 12 },
    { img: Instructor3, name: 'Albert Batata', job: 'Digital Marketing', rating: 4.5, students: 150, courses: 17 },
    { img: Instructor4, name: 'Robet Shit', job: 'Digital Marketing', rating: 4.6, students: 200, courses: 22 },
];

export const helpCenter = [
    { img: HelpCenter1, title: 'Getting Started' },
    { img: HelpCenter5, title: 'Course Taking' },
    { img: HelpCenter2, title: 'Account / Profile' },
    { img: HelpCenter6, title: 'Mobile General' },
    { img: HelpCenter4, title: 'Purchase / Refunds' },
    { img: HelpCenter3, title: 'Troubleshooting' },
];

export const posts = [
    { img: postImg1, title: 'Get Started React JS Tutorial For Beginners', category: 'learn music', date: 'July 15, 2022' },
    { img: postImg2, title: 'Get Start PHP JS Tutorial For Adance Guy', category: 'technology', date: 'Jan 22, 2022' },
    { img: postImg3, title: 'Increasing engagement with  Instagram and facebook', category: 'high school', date: 'July 07, 2022' },
    { img: postImg1, title: 'Get Started React JS Tutorial For Beginners', category: 'learn music', date: 'July 15, 2022' },
]

export const allPosts = [
    {id: 1, img: postImg1,slug: 'Get-Started-React-JS-Tutorial-For-Beginners', title: 'Get Started React JS Tutorial For Beginners', category: 'learn music', date: 'July 15, 2022'},
    {id: 2, img: postImg2,slug: 'Get-Start-PHP-JS-Tutorial-For-Adance-Guy', title: 'Get Start PHP JS Tutorial For Adance Guy', category: 'technology', date: 'Jan 22, 2022'},
    {id: 3, img: postImg3,slug: 'Increasing-engagement-with-Instagram-and-facebook', title: 'Increasing engagement with  Instagram and facebook', category: 'high school', date: 'July 07, 2022'},
    {id: 4, img: courseImg5,slug: 'Get-Started-React-JS-Tutorial-For-Beginners', title: 'Get Started React JS Tutorial For Beginners', category: 'learn music', date: 'July 15, 2022'},
    {id: 5, img: courseImg1,slug: 'Increasing-engagement-with-Instagram-and-facebook', title: 'Increasing engagement with  Instagram and facebook', category: 'high school', date: 'July 07, 2022'},
    {id: 6, img: courseImg3,slug: 'Get-Started-React-JS-Tutorial-For-Beginners', title: 'Get Started React JS Tutorial For Beginners', category: 'learn music', date: 'July 15, 2022'},
    {id: 7, img: courseImg4,slug: 'Get-Start-PHP-JS-Tutorial-For-Adance-Guy', title: 'Get Start PHP JS Tutorial For Adance Guy', category: 'technology', date: 'Jan 22, 2022'},
    {id: 8, img: courseImg2,slug: '', title: 'Get Started React JS Tutorial For Beginners', category: 'learn music', date: 'July 15, 2022'},
    {id: 9, img: courseImg6,slug: 'Increasing-engagement-with-Instagram-and-facebook', title: 'Increasing engagement with  Instagram and facebook', category: 'learn music', date: 'July 15, 2022'},
    {id: 10, img: Instructor1,slug: 'Get-Started-React-JS-Tutorial-For-Beginners', title: 'Get Started React JS Tutorial For Beginners', category: 'learn music', date: 'July 15, 2022'},
    {id: 11, img: Instructor2,slug: 'Increasing-engagement-with-Instagram-and-facebook', title: 'Increasing engagement with  Instagram and facebook', category: 'learn music', date: 'July 15, 2022'},
    {id: 12, img: courseImg5,slug: 'Get-Start-PHP-JS-Tutorial-For-Adance-Guy', title: 'Get Start PHP JS Tutorial For Adance Guy', category: 'learn music', date: 'July 15, 2022'},
]