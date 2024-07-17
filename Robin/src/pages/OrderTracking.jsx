import React, { Component } from "react";
import Hero from "../components/Hero";

class OrderTracking extends Component {
	state = {
		orderId: "",
		orderDetails: null,
	};

	handleInputChange = (e) => {
		this.setState({ orderId: e.target.value });
	};

	handleTrackOrder = (e) => {
		e.preventDefault();

		const { orderId } = this.state;

		const orderDetails = this.props.orders.find(
			(order) => order.trackingid === orderId
		);

		if (!orderDetails) {
			console.error("Order not found");
			return;
		}

		this.setState({ orderDetails });
	};

	render() {
		const { orderDetails } = this.state;

		return (
			<>
				<Hero title="Order Tracking" subtitle="Order Tracking" />
				<div className="page-content-wrapper">
					<div className="order-tracking-area">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="order-tracking-wrapper">
										<div className="order-track-form">
											<p>
												To track your order please enter your Order ID in the
												box below and press the "Track" button. This was given
												to you on your receipt and in the confirmation email you
												should have received.
											</p>
											<form onSubmit={this.handleTrackOrder}>
												<div className="row">
													<div className="col-lg-12">
														<label htmlFor="orderId">Order ID</label>
														<input
															type="text"
															id="orderId"
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
											{orderDetails && (
												<div className="order-details">
													<h3>Order Details</h3>
													<p>Tracking ID: {orderDetails.trackingid}</p>
													<h4>Products:</h4>
													<ul>
														{orderDetails.products.map((productId) => {
															// productId'yi string olarak karşılaştırın
															const product = this.props.products.find(
																(p) => p.id === String(productId)
															);
															if (!product) {
																console.error(
																	`Product with ID ${productId} not found`
																);
																return null;
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
																	(p) => p.id === String(productId)
																);
																if (!product) {
																	return total;
																}
																return total + product.price;
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
			</>
		);
	}
}

export default OrderTracking;
