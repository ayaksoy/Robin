import React, {Component} from 'react';
import Slider from "../components/Slider";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";


class Main extends Component {


    render() {
        return (
            <>
                <Slider/>
                <div>
                    <div className="product-fullpage-no-gutter-area">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <div className="product-double-row-tab-wrapper">
                                    <div className="tab-product-navigation">
                                        <ul className="nav nav-tabs justify-content-center" id="nav-tab2"
                                            role="tablist">
                                            <li className="nav-item">
                                                <button className="nav-link active" id="product-tab-1" type="button"
                                                        data-bs-toggle="tab" data-bs-target="#product-series-1"
                                                        role="tab"
                                                        onClick={() => this.props.filterProducts("all")}
                                                        aria-controls="product-series-1" aria-selected="true">All
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-link " id="product-tab-1" type="button"
                                                        data-bs-toggle="tab" data-bs-target="#product-series-1"
                                                        role="tab"
                                                        onClick={() => this.props.filterProducts("new_arrival")}
                                                        aria-controls="product-series-1" aria-selected="true">New
                                                    Arrivals
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-link" id="product-tab-2" type="button"
                                                        data-bs-toggle="tab" data-bs-target="#product-series-2"
                                                        role="tab" onClick={() => this.props.filterProducts("featured")}
                                                        aria-controls="product-series-2" aria-selected="false">Featured
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-link" id="product-tab-3" type="button"
                                                        data-bs-toggle="tab" data-bs-target="#product-series-3"
                                                        role="tab" onClick={() => this.props.filterProducts("on_sale")}
                                                        aria-controls="product-series-3" aria-selected="false">On Sale
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            {this.props.products.map((item, index) => (
                                <ProductCard key={index} product={item} addToCart={this.props.addToCart}
                                             addToWishlist={this.props.addToWishlist}/>
                            ))}
                        </div>
                    </div>
                    <div className="blog-slider-area bg--dark-grey">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title-area text-center">
                                        <h2 className="section-title">From Our Blog</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {this.props.blogs.slice(0, 4).map((item, index) => (
                                    <BlogCard key={index} blog={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Main;
