import React from "react";
import "./CarouselItem.scss";

type Props = {
	image: string;
};

export default function CarouselItem({ image }: Props) {
	return (
		<div className='carousel-item'>
			<img src={image} alt={image} className='carousel-image' />
		</div>
	);
}
