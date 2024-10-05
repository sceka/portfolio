import React from "react";
import "./Button.scss";

type Props = {
	variant: "fill" | "white-outline" | "gray-outline";
	icon?: string;
	label?: string;
	className?: string;
	iconClassName?: string;
	onClick: () => void;
};
export default function Button({ variant, icon, label, className, iconClassName, onClick }: Props) {
	return (
		<button className={`${variant} ${className ? className : "button"}`} onClick={onClick}>
			{label && !icon ? (
				<label className='label'>{label}</label>
			) : !label && icon ? (
				<img
					className={`${iconClassName ? iconClassName : "icon"} ${
						variant === "fill" ? "icon-fill" : ""
					}`} // apply special class if variant is "fill"
					src={icon}
					alt={icon}
				/>
			) : (
				<div className='icon-and-label'>
					<img
						className={`${iconClassName ? iconClassName : "icon"} ${
							variant === "fill" ? "icon-fill" : ""
						}`}
						src={icon}
						alt={icon}
					/>
					<label>{label}</label>
				</div>
			)}
		</button>
	);
}
