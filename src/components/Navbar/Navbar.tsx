import React, { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
	const [language, setLanguage] = useState("EN");
	function onClickChange(language: string) {
		setLanguage(language);
	}
	return (
		<div className='n-container'>
			<div>
				<p className='navbar-name'>Marko Scekic</p>
			</div>
			<div className='navbar-menu'>
				<p>About</p>
				<p>Projects</p>
				<p>Bla</p>
				<p>Truc</p>
			</div>
			<div className='big-circle'></div>
			<div className='language-menu'>
				<p
					onClick={() => onClickChange("EN")}
					style={language === "EN" ? { textDecoration: "underline" } : {}}>
					En
				</p>
				<p
					onClick={() => onClickChange("RU")}
					style={language === "RU" ? { textDecoration: "underline" } : {}}>
					Ru
				</p>
				<p
					onClick={() => onClickChange("SR")}
					style={language === "SR" ? { textDecoration: "underline" } : {}}>
					Sr
				</p>
			</div>
			{/* TODO: Add burger menu */}
		</div>
	);
}
