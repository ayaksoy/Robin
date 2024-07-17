import React, { Component } from "react";
import Hero from "../components/Hero";
import alertify from "alertifyjs";
import Swal from "sweetalert2";

class Checkout extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		companyName: "",
		addressLine1: "",
		addressLine2: "",
		country: "",
		townCity: "",
		state: "",
		zipCode: "",
	};

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);

		const order = {
			id: String(Math.floor(Math.random() * 1000000000)),
			trackingid: `FURN - ${Math.random()
				.toString(36)
				.substr(2, 6)
				.toUpperCase()}`,
			products: this.props.cart.map((item) => Number(item.product.id)),
		};

		fetch("http://localhost:3000/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.props.clearCart();
				Swal.fire({
					title: "Order Placed!",
					text: `Your order has been placed! Tracking ID: ${order.trackingid}`,
					icon: "success",
					showCancelButton: true,
					confirmButtonText: "Copy Tracking ID",
					cancelButtonText: "Close",
				}).then((result) => {
					if (result.isConfirmed) {
						navigator.clipboard.writeText(order.trackingid);
						Swal.fire(
							"Copied!",
							"Tracking ID has been copied to clipboard.",
							"success"
						);
					}
				});
			})
			.catch((error) => {
				console.error("Error saving the order", error);
				alertify.error("Error saving the order");
			});
	};

	render() {
		return (
			<>
				<Hero title="Checkout" />
				<div className="page-content-wrapper">
					<div className="checkout-page-wrapper">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="checkout-form">
										<form onSubmit={this.handleFormSubmit}>
											<div className="row row-40">
												<div className="col-lg-7">
													<div id="billing-form" className="billing-form">
														<h4 className="checkout-title">
															Billing &amp; Shipping Address
														</h4>
														<div className="row">
															<div className="col-md-6 col-12">
																<label htmlFor="firstName">First Name*</label>
																<input
																	type="text"
																	id="firstName"
																	name="firstName"
																	placeholder="First Name"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-md-6 col-12">
																<label htmlFor="lastName">Last Name*</label>
																<input
																	type="text"
																	id="lastName"
																	name="lastName"
																	placeholder="Last Name"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-md-6 col-12">
																<label htmlFor="email">Email Address*</label>
																<input
																	type="email"
																	id="email"
																	name="email"
																	placeholder="Email Address"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-md-6 col-12">
																<label htmlFor="phoneNumber">Phone no*</label>
																<input
																	type="text"
																	id="phoneNumber"
																	name="phoneNumber"
																	placeholder="Phone number"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-12">
																<label htmlFor="companyName">
																	Company Name
																</label>
																<input
																	type="text"
																	id="companyName"
																	name="companyName"
																	placeholder="Company Name"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-12">
																<label htmlFor="addressLine1">Address*</label>
																<input
																	type="text"
																	id="addressLine1"
																	name="addressLine1"
																	placeholder="Address line 1"
																	onChange={this.handleInputChange}
																/>
																<input
																	type="text"
																	id="addressLine2"
																	name="addressLine2"
																	placeholder="Address line 2"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-md-6 col-12">
																<label htmlFor="country">Country*</label>
																<select
																	id="country"
																	name="country"
																	className="nice-select"
																	onChange={this.handleInputChange}
																>
																	<option value="İstanbul">İstanbul</option>
																	<option value="Ankara">Ankara</option>
																	<option value="Hatay">Hatay</option>
																	<option value="Antalya">Antalya</option>
																</select>
															</div>
															<div className="col-md-6 col-12">
																<label htmlFor="townCity">Town/City*</label>
																<input
																	type="text"
																	id="townCity"
																	name="townCity"
																	placeholder="Town/City"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-md-6 col-12">
																<label htmlFor="state">State*</label>
																<input
																	type="text"
																	id="state"
																	name="state"
																	placeholder="State"
																	onChange={this.handleInputChange}
																/>
															</div>
															<div className="col-md-6 col-12">
																<label htmlFor="zipCode">Zip Code*</label>
																<input
																	type="text"
																	id="zipCode"
																	name="zipCode"
																	placeholder="Zip Code"
																	onChange={this.handleInputChange}
																/>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-5">
													<div className="row">
														<div className="col-12">
															<h4 className="checkout-title">Cart Total</h4>
															<div className="checkout-cart-total">
																<h4>
																	Product <span>Total</span>
																</h4>
																<ul>
																	{this.props.cart.map((item) => (
																		<li key={item.product.id}>
																			{item.product.title} X {item.quantity}
																			<span>
																				${item.product.price * item.quantity}
																			</span>
																		</li>
																	))}
																</ul>
																<p>
																	Sub Total{" "}
																	<span>
																		$
																		{this.props.cart.reduce(
																			(a, c) =>
																				a + c.product.price * c.quantity,
																			0
																		)}
																	</span>
																</p>
																<p>
																	Shipping Fee <span>$15.00</span>
																</p>
																<h4>
																	Grand Total{" "}
																	<span>
																		$
																		{this.props.cart.reduce(
																			(a, c) =>
																				a + c.product.price * c.quantity,
																			0
																		) + 15}
																	</span>
																</h4>
															</div>
														</div>
														<div className="col-12">
															<button
																className="theme-button place-order-btn"
																type="submit"
															>
																PLACE ORDER
															</button>
														</div>
													</div>
												</div>
											</div>
										</form>
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

export default Checkout;
