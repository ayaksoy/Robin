import React, { Component } from "react";
import Hero from "../components/Hero";

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
		orderId: "",
		orderDetails: null,
	};

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();

		const order = {
			id: Math.floor(Math.random() * 1000000000).toString(),
			trackingid: `FURN-${Math.random()
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
			.then((res) => res.json())
			.then((data) => {
				console.log("Order saved successfully", data);
				this.props.clearCart();
				alert(`Tracking Id: ${order.trackingid}`);
				this.props.addOrder(order); // Yeni siparişi ekle
				this.setState({ orderId: order.id, orderDetails: order });
			})
			.catch((err) => {
				console.error("Error saving order", err);
			});
	};

	handleTrackOrder = (e) => {
		e.preventDefault();

		const { orderId } = this.state;
		const orderDetails = this.props.orders.find(
			(order) => order.id === orderId
		);

		if (!orderDetails) {
			this.setState({ orderDetails: null, error: "Order not found" });
		} else {
			this.setState({ orderDetails, error: null });
		}
	};

	render() {
		const { orderDetails, error } = this.state;

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
															{/* ... other form inputs */}
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
												<div className="col-lg-5">
													<div className="row">
														<div className="col-12">
															<h4 className="checkout-title">Cart Total</h4>
															<div className="checkout-cart-total">
																{/* ... cart summary */}
															</div>
														</div>
													</div>
												</div>
											</div>
										</form>
										<div className="order-tracking-wrapper">
											<div className="order-track-form">
												<p>
													To track your order please enter your Order ID in the
													box below and press the "Track" button. This was given
													to you on your receipt and in the confirmation email
													you should have received.
												</p>
												<form onSubmit={this.handleTrackOrder}>
													<div className="row">
														<div className="col-lg-12">
															<label htmlFor="orderId">Order ID</label>
															<input
																type="text"
																id="orderId"
																name="orderId"
																value={this.state.orderId}
																onChange={this.handleInputChange}
																placeholder="Found in your order confirmation email"
															/>
														</div>
														<div className="col-lg-12 text-center">
															<button
																className="theme-button theme-button--order-track"
																type="submit"
															>
																TRACK
															</button>
														</div>
													</div>
												</form>
												{error && <p>{error}</p>}
												{orderDetails && (
													<div className="order-details">
														<h3>Order Details</h3>
														<p>Tracking ID: {orderDetails.trackingid}</p>
														<h4>Products:</h4>
														<ul>
															{orderDetails.products.map((productId) => {
																const product = this.props.products.find(
																	(p) => p.id === productId
																);
																if (!product) {
																	return (
																		<li key={productId}>
																			Product with ID {productId} not found
																		</li>
																	);
																}
																return (
																	<li key={productId}>
																		<div className="product-info">
																			<h4>{product.title}</h4>
																			<p>Price: ${product.price}</p>
																		</div>
																	</li>
																);
															})}
														</ul>
														<h4>Total Price:</h4>
														<p>
															$
															{orderDetails.products.reduce(
																(total, productId) => {
																	const product = this.props.products.find(
																		(p) => p.id === productId
																	);
																	return product
																		? total + product.price
																		: total;
																},
																0
															)}
														</p>
													</div>
												)}
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
	}
}

export default Checkout;
