import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../CarouselItem/CarouselItem";
import "./CustomCarousel.scss";
export default function CustomCarousel() {
	return (
		<Carousel
			autoPlay={true}
			infiniteLoop={true}
			className='carousel'
			showThumbs={false}
			thumbWidth={200}
			showIndicators={false}
			centerMode={true}
			centerSlidePercentage={60}
			dynamicHeight={false}
			showStatus={false}>
			<div>
				<CarouselItem image={"/images/fuelme1.jpg"} />
			</div>
			<div>
				<img src='assets/2.jpeg' />
				<p className='legend'>Legend 2</p>
			</div>
			<div>
				<img src='assets/3.jpeg' />
				<p className='legend'>Legend 3</p>
			</div>
		</Carousel>
	);
}
