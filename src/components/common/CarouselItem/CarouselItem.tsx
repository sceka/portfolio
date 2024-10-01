import React from "react";
import "./CarouselItem.scss";
import Button from "../Button/Button";

type Props = {
	image: string;
	title: string;
	description: string;
};

export default function CarouselItem({ image, title, description }: Props) {
	return (
		<div className='carousel-item'>
			<img src={image} alt={image} className='carousel-image' />
			<div className='item-details'>
				<h1>{title}</h1>
				<p>{description}</p>
				<div className='carousel-buttons'>
					<div className='carousel-project-button'>
						{/* TODO: Change onClick function */}
						<Button variant='fill' label='Read More' onClick={() => {}} />
					</div>
					<div className='carousel-more-button'>
						{/* TODO: Add normal right arrow with transparent background */}
						{/* TODO: Change onClick function */}
						<Button variant='fill' icon='/images/ccc.png' onClick={() => {}} />
					</div>
				</div>
			</div>
		</div>
	);
}
