import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

class Wishlist extends Component {
  render() {
    return (
      <>
        <Hero title="Wishlist" subtitle="Wishlist" />
        <div className="page-content-wrapper">
          <div className="shopping-cart-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cart-table-container">
                    <table className="cart-table">
                      <thead>
                        <tr>
                          <th className="product-name" colSpan={2}>
                            Product
                          </th>
                          <th className="product-price">Price</th>
                          <th className="product-subtotal">&nbsp;</th>
                          <th className="product-remove">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.wishlist.map((item) => (
                          <tr>
                            <td className="product-thumbnail">
                              <Link to={"/product/" + item.product.slug}>
                                <img
                                  src={"/" + item.product.image}
                                  className="img-fluid"
                                  alt=""
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link to={"/product/" + item.product.slug}>
                                {item.product.title}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="price">
                                ${item.product.price}
                              </span>
                            </td>
                            <td className="add-to-cart">
                              <button
                                onClick={() =>
                                  this.props.addToCart(item.product)
                                }
                                className="theme-button theme-button--alt theme-button--wishlist"
                              >
                                ADD TO CART
                              </button>
                            </td>
                            <td className="product-remove">
                              <button
                                onClick={() =>
                                  this.props.removeToWishlist(item.product)
                                }
                              >
                                <i className="pe-7s-close" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Wishlist;
