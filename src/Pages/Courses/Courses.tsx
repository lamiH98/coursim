import React, { useEffect, useState } from 'react'
import { VscCircleFilled } from 'react-icons/vsc';
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import CoursesFilter from '../../Hooks/CoursesFilter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './_courses.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import CourseFilter from '../../Components/CourseFilter/CourseFilter';
import { filterCategoriesCourses, filterInstructorsCourses, filterLevelsCourses } from '../../data'
import CoursePriceFilter from '../../Components/CourseFilter/CoursePriceFilter';
import Course from '../../Components/Course/Course';
import CourseRatingFilter from '../../Components/CourseFilter/CourseRatingFilter';
import ReactPaginate from 'react-paginate';

const Courses: React.FC = () => {

	const { coursesList, handleCategoryFilter, handleRatingFilter, handleInstructorsFilter, handleLevelsFilter, selectedPrice,
    handleChangePrice, setSearchInput, handleSort, applyFilters } = CoursesFilter();
	
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = coursesList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(coursesList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % coursesList.length;
    setItemOffset(newOffset);
  };
	
  return (
    <Container>
      <div className='courses-page'>
        <Breadcrumb>
          <>
            <VscCircleFilled className='icon' />
            <li className='active'>Courses</li>
          </>
        </Breadcrumb>
        <Row>
          <Col lg={3}>

            <div className="search-bar">
              <AiOutlineSearch />
              <input type="search" onChange={ (e) => setSearchInput(e.target.value) } placeholder='Search here ....' />
            </div>

            <CourseFilter filterTitle={'Categories'} filterItems={filterCategoriesCourses} selectFun={handleCategoryFilter} />
            <CoursePriceFilter selectedPrice={selectedPrice} changePrice={handleChangePrice} />
            <CourseRatingFilter selectFun={handleRatingFilter} />
            <CourseFilter filterTitle={'Instructors'} filterItems={filterInstructorsCourses} selectFun={handleInstructorsFilter} />
            <CourseFilter filterTitle={'Levels'} filterItems={filterLevelsCourses} selectFun={handleLevelsFilter} />

          </Col>
          <Col lg={9}>
            <div className="course-top-wrapper d-flex justify-content-between">
              <h6 className="courses-found">{coursesList.length} Courses Found</h6>
              <div className="sort-by d-flex gap-3 align-items-center">
                <h6>Sort By:</h6>
                <select defaultValue={'Default'} onChange={handleSort}>
                  <option value='Default'>Default</option>
                  <option value="priceAsc">Price (ASC)</option>
                  <option value="priceDes">Price (DES)</option>
                  <option value="nameAsc">name (ASC)</option>
                  <option value="nameDes">name (DES)</option>
                </select>
              </div>
            </div>
            <Row>
              {
                currentItems.map((course, index) => (
                  <Col sm={6} md={4} key={index}>
                    <Course img={course.img} title={course.title} slug={course.slug} review={course.review} reviewCount={course.reviewCount} lessons={course.lessons} duration={course.duration} level={course.level} teacherImg={course.teacherImg} teacherName={course.teacherName} price={course.price} priceOffer={course.priceOffer} />
                  </Col>
                ))
              }
            </Row>
            <Row>
              <Col>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="<"
                  className='navigation'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Courses