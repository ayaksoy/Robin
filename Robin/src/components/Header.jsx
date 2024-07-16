import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const url = "#";
    return (
      <>
        <div className="header-area header-area--default header-area--default--white header-sticky">
          <div className="header-navigation-area header-navigation-area--white header-navigation-area--extra-space d-none d-lg-block">
            <div className="container wide">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-info-wrapper header-info-wrapper--alt-style">
                    <div className="header-logo">
                      <a href="index.html">
                        <img
                          src="/img/logo.png"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </a>
                    </div>
                    <div className="header-navigation-wrapper">
                      <nav>
                        <ul>
                          <li className="has">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="has">
                            <Link to="/about">About</Link>
                          </li>
                          <li className="has-children">
                            <a href="/">Categories</a>
                            <ul className="submenu submenu--column-1">
                              {this.props.categories.map((category) => (
                                <li key={category.id}>
                                  <Link to={`/category/${category.id}`}>
                                    {category.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="has">
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li className="has">
                            <Link to="/faq">Faq</Link>
                          </li>
                          <li className="has">
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-icon-area">
                      <div className="account-dropdown">
                        <Link to="/ordertracking">Order Tracking</Link>
                      </div>
                      <div className="header-icon d-flex align-items-center">
                        <ul className="header-icon__list">
                          <li>
                            <Link to="/wishlist">
                              <i className="fa fa-heart-o" />
                              <span className="item-count">
                                {this.props.wishlist.length}
                              </span>
                            </Link>
                            <div className="minicart-wrapper">
                              <p className="minicart-wrapper__title">
                                WISHLIST
                              </p>
                              <div className="minicart-wrapper__items ps-scroll">
                                {this.props.wishlist.map((item) => (
                                  <div
                                    key={item.product.slug}
                                    className="minicart-wrapper__items__single"
                                  >
                                    <p
                                      onClick={() => {
                                        this.props.removeToWishlist(
                                          item.product
                                        );
                                      }}
                                      className="close-icon"
                                    >
                                      <i className="pe-7s-close" />
                                    </p>
                                    <div className="image">
                                      <Link
                                        to={`/product/${item.product.slug}`}
                                      >
                                        <img
                                          src={`/${item.product.image}`}
                                          className="img-fluid"
                                          alt=""
                                          style={{
                                            width: "90px",
                                            height: "100px",
                                          }}
                                        />
                                      </Link>
                                    </div>
                                    <div className="content">
                                      <p className="product-title">
                                        <Link
                                          to={`/product/${item.product.slug}`}
                                        >
                                          {item.product.title}
                                        </Link>
                                      </p>
                                      <p className="product-calculation">
                                        <span className="price">
                                          {item.product.price}$
                                        </span>
                                      </p>
                                      <a
                                        href={url}
                                        onClick={() => {
                                          this.props.addToCart(item.product);
                                        }}
                                        className="wishlist-cart-icon"
                                      >
                                        <i className="fa fa-shopping-basket" />
                                        ADD TO CART
                                      </a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="minicart-wrapper__buttons mb-0">
                                <Link
                                  to="/wishlist"
                                  className="theme-button theme-button--minicart-button mb-0"
                                >
                                  VIEW WISHLIST
                                </Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <Link to="/cart">
                              <i className="fa fa-shopping-basket" />
                              <span className="item-count">
                                {this.props.cart.length}
                              </span>
                            </Link>
                            <div className="minicart-wrapper">
                              <p className="minicart-wrapper__title">CART</p>
                              <div className="minicart-wrapper__items ps-scroll">
                                {this.props.cart.map((item) => (
                                  <div
                                    key={item.product.slug}
                                    className="minicart-wrapper__items__single"
                                  >
                                    <p
                                      className="close-icon"
                                      onClick={() => {
                                        this.props.removeToCart(item.product);
                                      }}
                                    >
                                      <i className="pe-7s-close" />
                                    </p>
                                    <div className="image">
                                      <Link
                                        to={`/product/${item.product.slug}`}
                                      >
                                        <img
                                          src={`/${item.product.image}`}
                                          className="img-fluid"
                                          alt=""
                                          style={{
                                            width: "90px",
                                            height: "100px",
                                          }}
                                        />
                                      </Link>
                                    </div>
                                    <div className="content">
                                      <p className="product-title">
                                        <Link
                                          to={`/product/${item.product.slug}`}
                                        >
                                          {item.product.title}
                                        </Link>
                                      </p>
                                      <p className="product-calculation">
                                        <span className="count">
                                          {item.quantity}
                                        </span>{" "}
                                        x
                                        <span className="price">
                                          {item.product.price} $
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <p className="minicart-wrapper__subtotal">
                                SUBTOTAL:{" "}
                                <span>
                                  {this.props.cart.reduce(
                                    (a, b) => a + b.product.price * b.quantity,
                                    0
                                  )}{" "}
                                  $
                                </span>
                              </p>
                              <div className="minicart-wrapper__buttons">
                                <Link
                                  to="/cart"
                                  className="theme-button theme-button--minicart-button"
                                >
                                  VIEW CART
                                </Link>
                                <Link
                                  to="/checkout"
                                  className="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0"
                                >
                                  CHECKOUT
                                </Link>
                              </div>
                              <p className="minicart-wrapper__featuretext">
                                Free Shipping on All Orders Over $100!
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mobile-navigation d-block d-lg-none">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-md-6">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        src="/img/logo.png"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="mobile-navigation text-end">
                    <ul className="header-icon__list header-icon__list">
                      <li>
                        <Link to="/wishlist">
                          <i className="fa fa-heart-o" />
                          <span className="item-count">1</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart">
                          <i className="fa fa-shopping-basket" />
                          <span className="item-count">3</span>
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="mobile-menu-icon"
                          id="mobile-menu-trigger"
                        >
                          <i className="fa fa-bars" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
