import React from "react";
import "./About.scss";

export default function About() {
	return (
		<div className='about-container'>
			<div className='about-title-section'>
				<h4>.../About me...</h4>
				<div className='about-description'>
					<p>
						Hello! I am Marko, I'm <span>full-stack developer</span>. More than{" "}
						<span>3 years</span> experience.
					</p>
				</div>
			</div>
		</div>
	);
}
