import React from "react";
import "./About.scss";
import Button from "../common/Button/Button";

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
			<div className='skills-and-image-container'>
				<div className='skills-container'>
					<div className='first-box'>
						<h4>Front-end</h4>
						<p>
							Typescript / React / Vue / Vuex / Redux Toolkit / React Native / Quasar
							Framework
						</p>
					</div>
					<div className='second-box-about-me'>
						<div className='second-box'>
							<h4>Styles</h4>
							<p>Typescript / React Native / Quasar Framework</p>
						</div>
						<div className='github-button'>
							<div className='github-wrapper'>
								<Button
									onClick={() => {}}
									variant='white-outline'
									icon='/images/github.png'
									className='github'
								/>
								<Button
									onClick={() => {}}
									variant='fill'
									icon='/images/diagonalRight.svg'
									className='arrow-button'
									iconClassName='diagonal-arrow'
								/>
							</div>
						</div>
					</div>
					<div className='first-box'>
						<h4>Front-end</h4>
						<p>
							Typescript / React / Vue / Vuex / Redux Toolkit / React Native / Quasar
							Framework
						</p>
					</div>
					<div className='last-about-section'>
						<p className='last-section-description'>
							Some of my favorite technologies topics, or tools that I worked with.
						</p>
						<div className='second-box'>
							<h4>DevOps</h4>
							<p>Nginx / Brotli / Docker / (CI/CD)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
