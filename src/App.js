import { useState } from 'react';
import "./scss/app.scss";

import Menu from "./components/Menu";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Porfolio from "./components/Porfolio";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Carousel from "./components/Carousel";

export default function App() {
	const [isMenuOpen, setMenuOpen] = useState(false);

  	return (
		<div className="App">
			<Navbar isMenuOpen = {isMenuOpen} setMenuOpen = {setMenuOpen} />

			<Menu isMenuOpen = {isMenuOpen} setMenuOpen = {setMenuOpen} />

			<main className="main-content">
				<Header />
				<Porfolio />
				<Carousel />
				<Testimonial />
				<Contact />
				<Footer />
			</main>
		
			
		</div>
  	);
}

