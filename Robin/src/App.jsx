import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import alertfy from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import OrderTracking from "./components/OrderTracking";
import Categories from "./components/Categories";
import ProductDetail from "./components/ProductDetail";

export default class App extends Component {
	state = {
		blogs: [],
		products: [],
		categories: [],
		originalProducts: [],
		cart: [],
		wishlist: [],
		order: [],
	};

	getBlogs = () => {
		fetch("https://localhosy:3000/blogs")
			.then((response) => response.json())
			.then((blogs) => this.setState({ blogs }));
	};

	getProducts = (categoryId) => {
		let url = "https://localhost:3000/products";
		if (categoryId) {
			url += "?categoryId=" + categoryId;
		}
		fetch(url)
			.then((response) => response.json())
			.then((data) =>
				this.setState({ products: data, originalProducts: data })
			);
	};

	getCategories = () => {
		fetch("https://localhost:3000/categories")
			.then((response) => response.json())
			.then((categories) => this.setState({ categories }));
	};

	componentDidMount() {
		this.getBlogs();
		this.getProducts();
		this.getCategories();
		this.filterProducts();
		this.getOrders();
	}

	filterProducts = (status) => {
		let products;
		if (status === "all") {
			this.setState({ products: this.state.originalProducts });
		} else {
			products = this.state.originalProducts.filter(
				(item) => item.status[status] === true
			);
			this.setState({ products: products });
		}
	};

	addToCart = (product) => {
		let newCart = this.state.cart;
		var addedItem = newCart.find((c) => c.product.id === product.id);
		if (addedItem) {
			addedItem.quantity += 1;
		} else {
			newCart.push({ product: product, quantity: 1 });
		}
		this.setState({ cart: newCart });
		alertfy.success(product.title + " added to cart!");
	};

	removeToCart = (product) => {
		let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
		this.setState({ cart: newCart });
		alertfy.error(product.title + " removed from cart!");
	};
	addToWishlist = (product) => {
		let newWishlist = this.state.wishlist;
		var addedItem = newWishlist.find((c) => c.id === product.id);
		if (!addedItem) newWishlist.push(product);
		this.setState({ wishlist: newWishlist });
		alertfy.success(product.title + " added to wishlist!");
	};

	removeToWishlist = (product) => {
		let newWishlist = this.state.wishlist.filter(
			(c) => c.product.id !== product.id
		);
		this.setState({ wishlist: newWishlist });
		alertfy.error(product.title + " removed from wishlist!");
	};
	searchBlogs = (searchKey) => {
		if (searchKey === "") {
			this.getBlogs();
		}
		let filteredBlogs = this.state.blogs.filter((blog) => {
			return blog.title.toLowerCase().includes(searchKey.toLowerCase());
		});
		this.setState({ blogs: filteredBlogs });
	};

	getBlogBySlug = (slug) => {
		return this.state.blogs.find((products) => products.slug === slug);
	};

	clearCart = () => {
		this.setState({ cart: [] });
	};
	getOrders = () => {
		fetch("https://localhost:3000/orders")
			.then((response) => response.json())
			.then((orders) => this.setState({ orders }));
	};

	getProductsBySlug = (slug) => {
		return this.state.products.find((products) => products.slug === slug);
	};

	render() {
		return (
			<>
				<Header />
			</>
		);
	}
}
