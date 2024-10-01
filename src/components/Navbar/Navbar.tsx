import React from "react";
import "./Navbar.scss";

export default function Navbar() {
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
				<p>En</p>
				<p>Ru</p>
			</div>
			{/* TODO: Add burger menu */}
		</div>
	);
}
