import React from "react";
import Button from "../Button/Button";
import "./TwoPieceButton.scss";

type Props = {
	icon: "github" | "website";
};

export default function TwoPieceButton({ icon }: Props) {
	return (
		<div className='github-wrapper'>
			<Button
				onClick={() => {}}
				variant='white-outline'
				icon={icon === "github" ? "/images/github.png" : "/images/website.png"}
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
	);
}
