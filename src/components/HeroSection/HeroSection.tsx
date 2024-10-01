import React from "react";
import "./HeroSection.scss";
import Button from "../common/Button/Button";
import CustomCarousel from "../common/CustomCarousel/CustomCarousel";

const links = [
	{
		name: "github",
		link: "https://github.com/sceka"
	},
	{
		name: "linkedin",
		link: "https://www.linkedin.com/in/scekicmarko/"
	}
];

function onClickBtn(icon: string) {
	links.map(link => {
		if (link.name === icon) window.location.href = link.link;
	});
}

export default function HeroSection() {
	return (
		<div className='hero-section'>
			<div className='first-section'>
				<div className='first-section-title'>Full-stack</div>{" "}
				<div className='buttons'>
					<div className='projects-button'>
						{/* TODO: Change onClick function */}
						<Button variant='fill' label='Projects' onClick={() => {}} />
					</div>
					<div className='arrow-button'>
						{/* TODO: Add normal right arrow with transparent background */}
						{/* TODO: Change onClick function */}
						<Button variant='fill' icon='/images/right-arrow.png' onClick={() => {}} />
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
						variant='gray-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
						onClick={() => onClickBtn("github")}
					/>
					<Button
						variant='gray-outline'
						label='LinkedIn'
						icon='/images/linkedin.png'
						className='action-btn'
						iconClassName='btn-icon'
						onClick={() => onClickBtn("linkedin")}
					/>
				</div>
				<div>
					<Button
						variant='gray-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
						// TODO: Add link
						onClick={() => {}}
					/>
				</div>
				<div className='aciton-btns'>
					<Button
						variant='gray-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
						// TODO: Add link
						onClick={() => {}}
					/>
					<Button
						variant='gray-outline'
						label='Github'
						icon='/images/github.png'
						className='action-btn'
						// TODO: Add link
						onClick={() => {}}
					/>
				</div>
			</div>
			<div className='carousel-container'>
				<CustomCarousel />
			</div>
		</div>
	);
}
