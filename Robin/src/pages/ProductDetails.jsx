import React from "react";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";

const ProductDetails = ({
  getProductBySlug,
  addToCart,
  addToWishlist,
  products,
}) => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  return (
    <>
      <Hero title={product.title} />
      <div className="page-content-wrapper">
        <div className="single-product-slider-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-details-slider-area product-details-slider-area--side-move">
                  <div className="product-badge-wrapper">
                    <span className="hot">Hot</span>
                  </div>
                  <div className="row g-2">
                    <div className="col-md-9 order-1 order-md-2 position-relative">
                      <div className="big-image-wrapper">
                        <div className="enlarge-icon">
                          <a
                            className="btn-zoom-popup"
                            href="/"
                            data-tippy="Click to enlarge"
                            data-tippy-placement="left"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay={50}
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="pe-7s-expand1" />
                          </a>
                        </div>
                        <div
                          className="product-details-big-image-slider-wrapper product-details-big-image-slider-wrapper--side-space theme-slick-slider"
                          data-slick-setting='{
                                      "slidesToShow": 1,
                                      "slidesToScroll": 1,
                                      "arrows": false,
                                      "autoplay": false,
                                      "autoplaySpeed": 5000,
                                      "fade": true,
                                      "speed": 500,
                                      "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
                                      "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
                                  }'
                          data-slick-responsive='[
                                      {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": false} },
                                      {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": false} },
                                      {"breakpoint":991, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
                                      {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} }
                                  ]'
                        >
                          <div className="single-image">
                            <img
                              src={"/" + product.image}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 order-2 order-md-1 position-relative">
                      <div
                        className="product-details-small-image-slider-wrapper product-details-small-image-slider-wrapper--vertical-space theme-slick-slider"
                        data-slick-setting='{
                                  "slidesToShow": 3,
                                  "slidesToScroll": 1,
                                  "centerMode": false,
                                  "arrows": true,
                                  "vertical": true,
                                  "autoplay": false,
                                  "autoplaySpeed": 5000,
                                  "speed": 500,
                                  "asNavFor": ".product-details-big-image-slider-wrapper",
                                  "focusOnSelect": true,
                                  "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-up" },
                                  "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-down" }
                              }'
                        data-slick-responsive='[
                                  {"breakpoint":1501, "settings": {"slidesToShow": 3, "arrows": true} },
                                  {"breakpoint":1199, "settings": {"slidesToShow": 3, "arrows": true} },
                                  {"breakpoint":991, "settings": {"slidesToShow": 3, "arrows": true, "slidesToScroll": 1} },
                                  {"breakpoint":767, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                  {"breakpoint":575, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                  {"breakpoint":479, "settings": {"slidesToShow": 2, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} }
                              ]'
                      >
                        <div className="single-image">
                          <img
                            src={"/" + product.image}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        {product.gallery.map((item, index) => (
                          <div className="single-image" key={index}>
                            <img
                              src={"/" + item}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details-description-wrapper">
                  <h2 className="item-title">{product.title}</h2>
                  <p className="price">
                    <span className="discounted-price">{product.price}</span>
                  </p>
                  <p className="description">{product.description}</p>
                  <div className="add-to-cart-btn d-inline-block">
                    <button
                      className="theme-button theme-button--alt"
                      type="button"
                      onClick={() => addToCart(product)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <div className="quick-view-other-info">
                    <div className="other-info-links">
                      <p onClick={() => addToWishlist(product)}>
                        <i className="fa fa-heart-o" /> ADD TO WISHLIST
                      </p>
                    </div>
                    <div className="product-brand">
                      <a href="shop-left-sidebar.html">
                        <img
                          src={"/img/brands/brand-2.png"}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-product-description-tab-area section-space">
          <div className="description-tab-navigation">
            <ul
              className="nav nav-tabs justify-content-center"
              id="nav-tab2"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="description-tab"
                  type="button"
                  data-bs-toggle="tab"
                  data-bs-target="#product-description"
                  role="tab"
                  aria-controls="product-description"
                  aria-selected="true"
                >
                  DESCRIPTION
                </button>
              </li>
            </ul>
          </div>
          <div className="single-product-description-tab-content">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="description-content">
                        <p className="long-desc">{product.description}</p>
                      </div>
                    </div>
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

export default ProductDetails;
