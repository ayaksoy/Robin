import React from "react";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";

const BlogDetails = (getBlogBySlugs) => {
	const { slug } = useParams();
	const blog = getBlogBySlugs.getBlogBySlugs(slug);
	return (
		<>
			<Hero title={blog.title} />
			<div className="page-content-wrapper">
				<div className="blog-page-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 order-1">
								<div className="blog-single-post-details-wrapper">
									<h2 className="post-title">{blog.title}</h2>

									<div className="post-thumbnail">
										{blog.image === "" ? (
											<iframe
												width="100%"
												height="500px"
												src={blog.video}
												frameBorder="0"
												title="video"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											/>
										) : (
											<img src={"/" + blog.image} alt="" />
										)}
									</div>
									<div className="post-text-content">
										<p>{blog.long_description}</p>
									</div>
									<div className="post-share-section">
										<span>SHARE :</span>
										<ul className="post-social-icons">
											<li>
												<a href="/">
													<i className="fa fa-facebook" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fa fa-twitter" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fa fa-google-plus" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fa fa-pinterest" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogDetails;
