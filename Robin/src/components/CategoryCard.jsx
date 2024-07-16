import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoryCard extends Component {
  render() {
    const url = "#";
    console.log(this.props.product);
    return (
      <>
        <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
          <div className="single-grid-product single-grid-product--overlay">
            <div className="single-grid-product__image">
              <a
                href={url}
                className="favorite-icon"
                data-tippy="Add to Wishlist"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                onClick={() => this.props.addToWishlist(this.props.product)}
                data-tippy-delay={50}
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
                data-tippy-placement="left"
              >
                <i className="fa fa-heart-o" />
                <i className="fa fa-heart" />
              </a>
              <div className="product-badge-wrapper">
                <span className="hot">
                  {this.props.product.status.new_arrival ? "New" : ""}
                </span>
                <span className="hot">
                  {this.props.product.status.featured ? "Featured" : ""}
                </span>
                <span className="hot">
                  {this.props.product.status.on_sale ? "On Sale" : ""}
                </span>
              </div>
              <Link
                to={"/product/" + this.props.product.slug}
                className="image-wrap"
              >
                <img
                  src={"/" + this.props.product.image}
                  className="img-fluid"
                  alt=""
                />
                <img
                  src={"/" + this.props.product.image}
                  className="img-fluid"
                  alt=""
                />
              </Link>
              <div className="product-hover-icon-wrapper">
                <span className="single-icon single-icon--add-to-cart">
                  <button
                    data-tippy="Add to cart"
                    data-tippy-inertia="true"
                    onClick={() => this.props.addToCart(this.props.product)}
                    data-tippy-animation="shift-away"
                    data-tippy-delay={50}
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                    className="btn btn--icon btn--icon--left"
                  >
                    <i className="fa fa-shopping-basket" />
                    <span>ADD TO CART</span>
                  </button>
                </span>
              </div>
              <div className="product-info">
                <p className="title">
                  <Link to={"/product/" + this.props.product.slug}>
                    {this.props.product.title}
                  </Link>
                </p>
                <p className="price">{this.props.product.price}$</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CategoryCard;
