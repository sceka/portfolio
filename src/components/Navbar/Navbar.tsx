import React from "react";
import "./Navbar.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeLanguage } from "../../redux/reducers/languageSlice";
import { languageTexts } from "../../util/dist/language";

export default function Navbar() {
	const languageChosen = useAppSelector(state => state.language);
	const dispatch = useAppDispatch();
	function onClickChange(language: string) {
		dispatch(changeLanguage(language));
	}
	return (
		<div className='n-container'>
			<div>
				<p className='navbar-name'>Marko Scekic</p>
			</div>
			<div className='navbar-menu'>
				{languageTexts
					.find(language => language.name === languageChosen)
					?.navbar.map(item => (
						<p key={item}>{item}</p>
					))}
			</div>
			<div className='big-circle'></div>
			<div className='language-menu'>
				<p
					onClick={() => onClickChange("EN")}
					style={languageChosen === "EN" ? { textDecoration: "underline" } : {}}>
					En
				</p>
				<p
					onClick={() => onClickChange("RU")}
					style={languageChosen === "RU" ? { textDecoration: "underline" } : {}}>
					Ru
				</p>
				<p
					onClick={() => onClickChange("SR")}
					style={languageChosen === "SR" ? { textDecoration: "underline" } : {}}>
					Sr
				</p>
			</div>
			{/* TODO: Add burger menu */}
		</div>
	);
}
