import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div>
          <div className="footer-area">
            <div className="footer-navigation-area">
              <div className="container wide">
                <div className="row">
                  <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                    <div className="row">
                      <div className="col-6 col-sm-4">
                        <div className="footer-widget">
                          <h4 className="footer-widget__title">ABOUT US</h4>
                          <nav className="footer-widget__navigation">
                            <ul>
                              <li>
                                <a href="/">About Us</a>
                              </li>
                              <li>
                                <a href="/">Newsletter Sign Up</a>
                              </li>
                              <li>
                                <a href="/">History</a>
                              </li>
                              <li>
                                <a href="/">Brands</a>
                              </li>
                              <li>
                                <a href="/">Press Office</a>
                              </li>
                              <li>
                                <a href="/">Contact Us</a>
                              </li>
                              <li>
                                <a href="/">Terms &amp; Conditions</a>
                              </li>
                              <li>
                                <a href="/">Privacy Policy</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                    <div className="row">
                      <div className="col-6 col-sm-4">
                        <div className="footer-widget">
                          <h4 className="footer-widget__title">WORK WITH US</h4>
                          <nav className="footer-widget__navigation">
                            <ul>
                              <li>
                                <a href="/">Careers</a>
                              </li>
                              <li>
                                <a href="/">Affiliates</a>
                              </li>
                              <li>
                                <a href="/">Travel Scholarship</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                    <div className="footer-widget footer-widget--two">
                      <h4 className="footer-widget__title">
                        10% OFF YOUR FIRST ORDER
                      </h4>
                      <p className="footer-widget__text">
                        Join our community and be the first to know about
                        offers, new collections and interior trends.
                      </p>
                      <div className="newsletter-form-area">
                        <form id="mc-form" className="mc-form">
                          <div className="footer-widget__newsletter-form">
                            <input
                              type="email"
                              placeholder="Your Email"
                              required
                            />
                            <button type="submit">SUBSCRIBE US</button>
                          </div>
                        </form>
                      </div>
                      <div className="mailchimp-alerts">
                        <div className="mailchimp-submitting" />
                        <div className="mailchimp-success" />
                        <div className="mailchimp-error" />
                      </div>
                    </div>
                    <div className="footer-widget footer-widget--two">
                      <span className="footer-widget__text footer-widget__text--two">
                        Follow us
                      </span>
                      <ul className="footer-widget__social-links">
                        <li>
                          <a href="/" title="Facebook">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Twitter">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="/" title="LinkedIn">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="/" title="LinkedIn">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Youtube">
                            <i className="fa fa-youtube-play" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-payment-logo">
                      <img
                        src={"/img/icons/payments.png"}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright-area">
              <div className="container wide">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="copyright-text text-center">
                      copyright © 2022 <a href="/">Robin</a>. All Rights
                      Reserved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
            <a
              href="/"
              className="offcanvas-menu-close"
              id="offcanvas-menu-close-trigger"
            >
              <i className="pe-7s-close" />
            </a>
            <div className="offcanvas-wrapper">
              <div className="offcanvas-inner-content">
                <div className="offcanvas-mobile-search-area">
                  <form action="#">
                    <input type="search" placeholder="Search ..." />
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <nav className="offcanvas-naviagtion">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="/">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 02</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 03</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 04</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home 05</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home 06</a>
                        </li>
                        <li>
                          <a href="index-7.html">Home 07</a>
                        </li>
                        <li>
                          <a href="index-8.html">Home 08</a>
                        </li>
                        <li>
                          <a href="index-9.html">Home 09</a>
                        </li>
                        <li>
                          <a href="instagram-shop.html">Instagram Shop</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/">Page</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="faq.html">F.A.Q</a>
                        </li>
                        <li>
                          <a href="service.html">Our Service</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/">Elements</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="/">Shop/Products</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="element-product-category.html">
                                Product Categories
                              </a>
                            </li>
                            <li>
                              <a href="element-product-carousel.html">
                                Products Carousel
                              </a>
                            </li>
                            <li>
                              <a href="element-product-widget.html">
                                Product Widget
                              </a>
                            </li>
                            <li>
                              <a href="element-recent-product.html">
                                Recent Products
                              </a>
                            </li>
                            <li>
                              <a href="element-sale-product.html">
                                Sale Products
                              </a>
                            </li>
                            <li>
                              <a href="element-featured-product.html">
                                Featured Product
                              </a>
                            </li>
                            <li>
                              <a href="element-top-rated-product.html">
                                Top Rated Products
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/">Theming</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="element-blog-post.html">Blog Posts</a>
                            </li>
                            <li>
                              <a href="element-mailchimp-form.html">
                                MailChimp Form
                              </a>
                            </li>
                            <li>
                              <a href="element-accordion-toggles.html">
                                Accordion/Toggles
                              </a>
                            </li>
                            <li>
                              <a href="element-progress-bar.html">
                                Progress Bars
                              </a>
                            </li>
                            <li>
                              <a href="element-countdown-timer.html">
                                Countdown Timer
                              </a>
                            </li>
                            <li>
                              <a href="element-button.html">Buttons</a>
                            </li>
                            <li>
                              <a href="element-testimonial.html">
                                Testimonials
                              </a>
                            </li>
                            <li>
                              <a href="element-google-map.html">Google Maps</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/">Blog</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="/">Blog post list</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-one-column.html">Blog one column</a>
                            </li>
                            <li>
                              <a href="blog-two-column.html">Blog two column</a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                Blog left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog right sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/">Blog post details</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog-post-format-image.html">
                                Blog post format image
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-format-gallery.html">
                                Blog post format gallery
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-format-audio.html">
                                Blog post format audio
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-format-video.html">
                                Blog post format video
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-left-sidebar.html">
                                Blog post left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-right-sidebar.html">
                                Blog post right sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/">Shop</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="/">Shop Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop-fullwidth.html">Shop Fullwidth</a>
                            </li>
                            <li>
                              <a href="shop-list.html">Shop List Layout</a>
                            </li>
                            <li>
                              <a href="shop-no-sidebar.html">Shop No Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">
                                Shop With Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop With Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-brand.html">Shop By Brand</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/">Shop Pages(Details)</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product-details-basic.html">Basic</a>
                            </li>
                            <li>
                              <a href="product-details-fullwidth.html">
                                Fullwidth
                              </a>
                            </li>
                            <li>
                              <a href="product-details-sticky.html">
                                Sticky Details
                              </a>
                            </li>
                            <li>
                              <a href="product-details-bottom-thumbnail.html">
                                Bottom thumbnails
                              </a>
                            </li>
                            <li>
                              <a href="product-details-extra-content.html">
                                Extra content
                              </a>
                            </li>
                            <li>
                              <a href="product-details-variation-image.html">
                                Variations Images
                              </a>
                            </li>
                            <li>
                              <a href="product-details-affiliate.html">
                                Product details affiliate
                              </a>
                            </li>
                            <li>
                              <a href="product-details-group.html">
                                Product details group
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="offcanvas-widget-area">
                  <div className="off-canvas-contact-widget">
                    <div className="header-contact-info">
                      <ul className="header-contact-info__list">
                        <li>
                          <i className="pe-7s-phone" />{" "}
                          <a href="tel://12452456012">(1245) 2456 012 </a>
                        </li>
                        <li>
                          <i className="pe-7s-mail-open" />{" "}
                          <a href="mailto:info@yourdomain.com">
                            info@yourdomain.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="off-canvas-widget-social">
                    <a href="/" title="Facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="/" title="Twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="/" title="LinkedIn">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="/" title="Youtube">
                      <i className="fa fa-youtube-play" />
                    </a>
                    <a href="/" title="Vimeo">
                      <i className="fa fa-vimeo-square" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-overlay" id="search-overlay">
            <span className="close-icon search-close-icon">
              <a href="/" id="search-close-icon">
                <i className="pe-7s-close" />
              </a>
            </span>
            <div className="search-overlay-content">
              <div className="input-box">
                <form action="https://htmldemo.net/robin/robin/index.html">
                  <input type="search" placeholder="Search Products..." />
                </form>
              </div>
              <div className="search-hint">
                <span># Hit enter to search or ESC to close</span>
              </div>
            </div>
          </div>
          <div id="qv-1" className="cd-quick-view">
            <div className="cd-slider-wrapper">
              <div className="product-badge-wrapper">
                <span className="onsale">-17%</span>
                <span className="hot">Hot</span>
              </div>
              <ul className="cd-slider">
                <li className="selected">
                  <img
                    src={"/img/products/product-9-1-600x800.jpg"}
                    alt="Product 2"
                  />
                </li>
                <li>
                  <img
                    src={"/img/products/product-9-2-600x800.jpg"}
                    alt="Product 1"
                  />
                </li>
              </ul>
              <ul className="cd-slider-pagination">
                <li className="active">
                  <a href="#0">1</a>
                </li>
                <li>
                  <a href="#1">2</a>
                </li>
              </ul>
              <ul className="cd-slider-navigation">
                <li>
                  <a className="cd-prev" href="#0">
                    <i className="fa fa-angle-left" />
                  </a>
                </li>
                <li>
                  <a className="cd-next" href="#0">
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="quickview-item-info cd-item-info ps-scroll">
              <h2 className="item-title">Atelier Ottoman Takumi Series</h2>
              <p className="price">
                <span className="main-price discounted">$360.00</span>
                <span className="discounted-price">$300.00</span>
              </p>
              <p className="description">
                Upholstered velvet ottoman with antique stud detailing. Invite
                restrained glamour and on-trend colour into your design scheme
                with the Eichholtz Ponti Ottoman. Inspired by the neo-classical
                influences of Italian icon, Gio Ponti, this contemporary ottoman
                collection is presented in a choice of velvet and linen
                colourways.
              </p>
              <div className="pro-qty d-inline-block">
                <input type="text" defaultValue={1} />
              </div>
              <div className="add-to-cart-btn d-inline-block">
                <button className="theme-button theme-button--alt">
                  ADD TO CART
                </button>
              </div>
              <div className="quick-view-other-info">
                <div className="other-info-links">
                  <a href="/">
                    <i className="fa fa-heart-o" /> ADD TO WISHLIST
                  </a>
                  <a href="/">
                    <i className="fa fa-exchange" /> COMPARE
                  </a>
                </div>
                <table>
                  <tbody>
                    <tr className="single-info">
                      <td className="quickview-title">SKU:</td>
                      <td className="quickview-value">12345</td>
                    </tr>
                    <tr className="single-info">
                      <td className="quickview-title">Categories:</td>
                      <td className="quickview-value">
                        <a href="/">Decor</a>,<a href="/">Living Room</a>,
                        <a href="/">Furniture</a>
                      </td>
                    </tr>
                    <tr className="single-info">
                      <td className="quickview-title">Tags:</td>
                      <td className="quickview-value">
                        <a href="/">Decor</a>,<a href="/">Light</a>
                      </td>
                    </tr>
                    <tr className="single-info">
                      <td className="quickview-title">Share on:</td>
                      <td className="quickview-value">
                        <ul className="quickview-social-icons">
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <a href="#0" className="cd-close">
              Close
            </a>
          </div>
          <button className="scroll-top">
            <i className="fa fa-angle-up" />
          </button>
        </div>
      </>
    );
  }
}

export default Footer;
