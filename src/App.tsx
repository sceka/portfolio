import React from "react";
import "./App.scss";
import "./styles/fonts.scss";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Work from "./components/Work/Work";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<HeroSection />
			<About />
			<Work />
		</div>
	);
}

export default App;
