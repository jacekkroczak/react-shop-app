//TODO:
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// *** COMPONENTS *** //
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './components/ProductList/ProductPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// *** PAGES *** //
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import ErrorPage from './pages/errorPage';
import Home from './pages/home';
import Payment from './pages/payment';
import Shop from './pages/shop';

const App = () => {
	return (
		<Router>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/shop" exact element={<Shop />} />
				<Route path="/shop/product/:id" element={<ProductPage />} />
				<Route path="/payment" exact element={<Payment />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
