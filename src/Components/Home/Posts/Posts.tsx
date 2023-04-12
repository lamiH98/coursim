import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './_posts.scss'
import Title from '../../Utility/Title/Title'
import { BiTime } from 'react-icons/bi'
import { posts } from '../../../data'
import { Link } from 'react-router-dom'
import { allPosts } from './../../../data';

const Posts: React.FC = () => {

  return (
    <div className='posts'>
			<Container>
				<Title title="Latest News Update" />
				<Row>
					{
						allPosts.slice(0,4).map((post, index) => (
							<Col md={6} lg={4} xl={3} key={index}>
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
			</Container>
		</div>
  )
}

export default Posts