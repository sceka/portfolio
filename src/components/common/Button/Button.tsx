import React from "react";
import "./Button.scss";

type Props = {
	variant: "fill" | "white-outline" | "gray-outline";
	icon?: string;
	label?: string;
	className?: string;
};

export default function Button({ variant, icon, label, className }: Props) {
	return (
		<button className={`${variant} ${className ? className : "button"}`}>
			{label && !icon ? (
				label
			) : !label && icon ? (
				<img className='icon' src={icon} alt={icon} />
			) : (
				<div className='icon-and-label'>
					{<img className='icon' src={icon} alt={icon} />}
					<label>{label}</label>
				</div>
			)}
		</button>
	);
}
