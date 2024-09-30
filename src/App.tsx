import React from "react";
import "./App.scss";
import "./styles/fonts.scss";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<HeroSection />
		</div>
	);
}

export default App;
