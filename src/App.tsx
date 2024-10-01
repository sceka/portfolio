import React from "react";
import "./App.scss";
import "./styles/fonts.scss";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<HeroSection />
			<About />
		</div>
	);
}

export default App;
