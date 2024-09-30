import React from "react";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<div className='n-container'>
			<div className='navbar-name'>
				<p>Marko Scekic</p>
			</div>
			<div className='navbar-menu'>
				<p>About</p>
				<p>Projects</p>
				<p>Bla</p>
				<p>Truc</p>
			</div>
			<div className='language-menu'>En Russian</div>
			{/* TODO: Add burger menu */}
		</div>
	);
}
