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
			<div className='second-section'>
				<p>
					My goal is to write <span>maintainable code</span>, <span>clean</span> and
					<span>understandable code</span> to process development was enjoable.
				</p>
				<h1>Developer</h1>
			</div>
			<div className='action-buttons'>
				<div className='aciton-btns'>
					<Button
						variant='white-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
					/>
					<Button
						variant='white-outline'
						label='LinkedIn'
						icon='/images/linkedin.png'
						className='action-btn'
					/>
				</div>
				<div>
					<Button
						variant='white-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
					/>
				</div>
				<div className='aciton-btns'>
					<Button
						variant='white-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
					/>
					<Button
						variant='white-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
					/>
				</div>
			</div>
		</div>
	);
}
