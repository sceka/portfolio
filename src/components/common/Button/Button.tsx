import React from "react";
import "./Button.scss";

type Props = {
	variant: "fill" | "outline";
	icon?: string;
	label?: string;
};

export default function Button({ variant, icon, label }: Props) {
	return (
		<button className={`${variant} button`}>
			{label ? label : <img className='icon' src={icon} alt={icon} />}
		</button>
	);
}
