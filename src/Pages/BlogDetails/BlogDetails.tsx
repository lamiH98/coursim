import React from 'react'
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import { VscCircleFilled } from 'react-icons/vsc';
import './_blogDetails.scss'
import { useParams } from 'react-router-dom';
import { allPosts, posts } from './../../data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import postImg1 from '../../assets/images/posts/post-1.jpg'
import postImg2 from '../../assets/images/posts/post-2.jpg'
import adminImg from '../../assets/images/avatar/avatar-1.jpg'
import Comment from '../../Components/CourseDetails/Comment/Comment';
import { comments } from '../../data'
import { FaFacebookF , FaLinkedinIn , FaInstagram , FaTwitter } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi';

const BlogDetails: React.FC = () => {
	
	const { slug } = useParams();

	const post = allPosts.find((course) => course.slug === slug);
	// console.log(allPosts.indexOf(post.id));

  return (
    <div className='blog-details'>
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li className='active'>{post!.title}</li>
				</>
			</Breadcrumb>
			<Container>
				<Row>
					<Col>
						<div className="blog-details-title text-center">
							<span className='category'>{post!.category}</span>
							<h2 className='title'>{post!.title}</h2>
							<span className='date'>{post!.date}</span>
							<div className="blog-details-img">
								<img src={post!.img} alt="" />
							</div>
						</div>
						<Col>
							<div className="blog-details-content">
								<h5>What makes a good brand book?</h5>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime numquam, laboriosam molestiae dolore delectus officiis similique amet accusantium tempora error alias expedita modi quos provident eos eaque reprehenderit! Dignissimos blanditiis a quam? Quae reiciendis sequi impedit, at veniam, quidem eaque ipsum id sed facere magnam dignissimos, inventore aspernatur explicabo quod! Repellendus quaerat, dicta perferendis impedit ducimus ea magnam illo, quibusdam aspernatur iusto incidunt neque expedita et. Consequatur, harum dicta voluptatibus cumque minima dolor qui.</p>
								
								<ul>
									<li>Lorem ipsum dolor sit amet.</li>
									<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
									<li>Lorem ipsum dolor sit amet consectetur.</li>
									<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, nostrum fugiat!</li>
								</ul>
								
								<blockquote>
									“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“
								</blockquote>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum provident praesentium voluptas autem quos possimus, nam in natus aperiam molestiae labore cumque consequuntur officiis molestias dolore sequi dolores voluptate. Illo, perspiciatis sed itaque repudiandae rerum odit doloremque quos placeat obcaecati quasi incidunt dolorum odio fuga, nihil, nam quas voluptates laudantium voluptatum. Asperiores ad eaque quod commodi blanditiis cupiditate? Dolore fugit, atque, ad, sequi voluptatem hic at suscipit et velit harum ut eveniet magni iure rem praesentium doloremque eaque nobis temporibus?</p>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nesciunt facere, qui, dicta repellat neque voluptates molestiae odit voluptatibus necessitatibus distinctio fugiat? Numquam ipsa incidunt doloribus tempora aut? Quasi sit incidunt explicabo reprehenderit ipsa expedita commodi illo aut porro quaerat.</p>
								
								<div className="images-row">
									<Row>
										<Col md={6}>
											<div className="images-row-single">
												<img src={postImg1} alt="" />
												<h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
											</div>
										</Col>
										<Col md={6}>
											<div className="images-row-single">
												<img src={postImg2} alt="" />
												<h6>Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
											</div>
										</Col>
									</Row>
								</div>
								
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus expedita voluptates corrupti unde ut repudiandae, dolorum deleniti, consequatur nam necessitatibus omnis beatae consequuntur repellendus neque earum, sunt ullam deserunt culpa. Ex repellendus quidem incidunt eaque quas voluptatem veniam, ducimus repudiandae vitae autem molestiae distinctio, eos aliquam consequatur expedita enim similique perferendis porro. Itaque, qui ipsam possimus voluptate omnis totam aut dolore delectus voluptas error libero voluptatem neque enim excepturi harum aliquam nulla tenetur alias optio necessitatibus inventore. Nobis eum earum optio libero, repellat quia aliquam soluta, inventore debitis cum laborum doloremque officiis neque porro cumque, voluptates deserunt vel error quam? Ipsam aspernatur cum repellendus qui optio, quae esse odio molestias, illum debitis natus dignissimos nulla recusandae, similique minima eum dolore.</p>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aut iure corrupti in laudantium amet! Iste mollitia, earum porro distinctio, excepturi delectus iusto aperiam quod esse sunt in nisi. Aliquid!</p>
								
								<div className="blog-footer d-flex justify-content-between">
									<div className="social d-flex">
										<h6>Share Post: </h6>
										<FaFacebookF className='icon' />
										<FaLinkedinIn className='icon' />
										<FaInstagram className='icon' />
										<FaTwitter className='icon' />
									</div>
									<div className="tags">
										<span>Courses</span>
										<span>Learn</span>
										<span>LMS</span>
									</div>
								</div>

								<div className="publisher d-flex">
									<div className="publisher-img">
										<img src={adminImg} alt="" />
									</div>
									<div className="publisher-content">
										<h6>Admin</h6>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus velit repudiandae quidem aliquam accusantium odio dignissimos temporibus, atque doloribus?</p>
									</div>
								</div>

								{/* <div className="nav-post-links d-flex justify-content-between">
									<div className="prev single d-flex">
										<FaLongArrowAltLeft className='icon' />
										<div className="content">
											<h6>Prev</h6>
											<span>Lorem ipsum dolor sit amet consectetur.</span>
										</div>
									</div>
									<div className="next single d-flex">
										<div className="content">
											<h6>Next</h6>
											<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
										</div>
										<FaLongArrowAltRight className='icon' />
									</div>
								</div> */}
								
								{/* Comment Componenet */}
								<Comment allComments={comments} />

								<div className="related-posts">
									<Row>
										{
											posts.map((post, index) => (
												<Col md={6} lg={4} key={index}>
													<div className="post-single">
														<div className="post-img">
															<img src={post.img} alt="" />
														</div>
														<div className="post-content">
															<div className="category">{post.category}</div>
															<h5 className='post-title'>{post.title}</h5>
															<div className="post-time"><BiTime /> {post.date}</div>
														</div>
													</div>
												</Col>
											))
										}
									</Row>
								</div>

							</div>
						</Col>
					</Col>
				</Row>
			</Container>
			
		</div>
  )
}

export default BlogDetails