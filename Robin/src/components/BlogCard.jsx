import React, {Component} from 'react';
import {Link} from "react-router-dom";


class BlogCard extends Component {
    render() {
        return (
            <>
                <div className="col-md-3">
                    <div className="single-slider-blog-post">
                        <div className="single-slider-blog-post__image">
                            <Link to={"/blog/" + this.props.blog.slug}>
                                {this.props.blog.image === "" ?
                                    <iframe width="100%" height="100%"
                                            src={this.props.blog.video}
                                            frameBorder="0" title="video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/> :
                                    <img src={this.props.blog.image} alt=""/>}
                            </Link>
                        </div>
                        <div className="single-slider-blog-post__content">
                            <h3 className="post-title">
                                <Link to={"/blog/" + this.props.blog.slug}>
                                    {this.props.blog.title}
                                </Link>
                            </h3>

                            <p className="post-excerpt">{this.props.blog.short_description}</p>
                            <Link to={"/blog/" + this.props.blog.slug}
                                  className="blog-readmore-link">Read more
                                <i className="fa fa-caret-right"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default BlogCard;
