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
