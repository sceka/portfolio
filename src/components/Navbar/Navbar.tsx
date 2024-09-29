import React from "react";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<div className='n-container'>
			<div>Marko Scekic</div>
			<div className='navbar-menu'>
				<p>About</p>
				<p>Projects</p>
				<p>Bla</p>
				<p>Truc</p>
			</div>
			<div>En Russian</div>
		</div>
	);
}
