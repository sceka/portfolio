import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../CarouselItem/CarouselItem";
import "./CustomCarousel.scss";
import Button from "../Button/Button";

export default function CustomCarousel() {
	const CustomPrevArrow = (onClickHandler: () => void) => (
		<div className='circle'>
			<Button
				className='custom-arrow custom-prev'
				onClick={onClickHandler}
				variant='white-outline'
				icon='/images/arrow-left.svg'
			/>
		</div>
	);

	const CustomNextArrow = (onClickHandler: () => void) => (
		<Button
			className='custom-arrow custom-next'
			onClick={onClickHandler}
			variant='white-outline'
			icon='/images/right-arrow.svg'
		/>
		// <button  onClick={onClickHandler}>
		// 	<img src='/images/right-arrow.svg' alt='Next' />
		// </button>
	);

	return (
		<div className='carousel-container'>
			<div className='carousel-shadow start-shadow'></div>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				className='carousel'
				showThumbs={false}
				showIndicators={false}
				centerMode={true}
				centerSlidePercentage={50}
				dynamicHeight={false}
				showStatus={false}
				renderArrowPrev={CustomPrevArrow}
				renderArrowNext={CustomNextArrow}>
				<div className='carousel-slide'>
					<CarouselItem
						title='Fuel Me - Order Fuel Simplifed'
						description='I was working with fuel me for several years and it was great to be there and part of the team which i was part of the team'
						image={"/images/fuelme2.jpg"}
					/>
				</div>
				<div>
					<CarouselItem
						title='Fuel Me - Order Fuel Simplifed'
						description='I was working with fuel me for several years and it was great to be there and part of the team which i was part of the team'
						image={"/images/fuelme2.jpg"}
					/>
				</div>
				<div>
					<CarouselItem
						title='Fuel Me - Order Fuel Simplifed'
						description='I was working with fuel me for several years and it was great to be there and part of the team which i was part of the team'
						image={"/images/fuelme2.jpg"}
					/>
				</div>
			</Carousel>
			{/* Shadow at the end of the carousel */}
			<div className='carousel-shadow end-shadow'></div>
		</div>
	);
}
