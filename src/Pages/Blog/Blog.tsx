import React, { useState } from 'react'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { allPosts } from '../../data';
import { BiTime } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
	
  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const currentItems = allPosts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allPosts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allPosts.length;
    setItemOffset(newOffset);
		window.scrollTo(0, 0);
  };

  return (
    <div className='blog'>
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li className='active'>Blog</li>
				</>
			</Breadcrumb>
			<Container>
			<Row>
				{
					currentItems.map((post, index) => (
						<Col md={6} lg={4} key={index}>
							<div className="post-single">
								<div className="post-img">
									<img src={post.img} alt="" />
								</div>
								<div className="post-content">
									<div className="category">{post.category}</div>
									<Link to={`/blog/${post.slug}`}><h5 className='post-title'>{post.title}</h5></Link>
									<div className="post-time"><BiTime /> {post.date}</div>
								</div>
							</div>
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
			</Container>
		</div>
  )
}

export default Blog