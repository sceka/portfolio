import React from "react";
import "./HeroSection.scss";
import Button from "../common/Button/Button";

export default function HeroSection() {
	return (
		<div className='hero-section'>
			<div className='first-section'>
				<div className='first-section-title'>Full-stack</div>{" "}
				<div className='buttons'>
					<div className='projects-button'>
						<Button variant='fill' label='Projects' />
					</div>
					<div className='arrow-button'>
						{/* TODO: Add normal right arrow with transparent background */}
						<Button variant='fill' icon='/images/ccc.png' />
					</div>
				</div>
			</div>
			{/* <div className='second-section'>Aaa</div> */}
		</div>
	);
}
