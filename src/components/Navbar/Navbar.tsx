import React, { useState } from "react";
import "./Navbar.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/reducers/languageSlice";

export default function Navbar() {
	const [language, setLanguage] = useState("EN");
	const languageChosen = useAppSelector(state => state.language);
	const dispatch = useAppDispatch();
	function onClickChange(language: string) {
		setLanguage(language);
		dispatch(changeLanguage(language));
	}
	return (
		<div className='n-container'>
			<div>
				<p className='navbar-name'>Marko Scekic</p>
			</div>
			<div className='navbar-menu'>
				<p>About</p>
				<p>Projects</p>
				<p>Bla</p>
				<p>Truc</p>
			</div>
			<div className='big-circle'></div>
			<div className='language-menu'>
				<p
					onClick={() => onClickChange("EN")}
					style={language === "EN" ? { textDecoration: "underline" } : {}}>
					En
				</p>
				<p
					onClick={() => onClickChange("RU")}
					style={language === "RU" ? { textDecoration: "underline" } : {}}>
					Ru
				</p>
				<p
					onClick={() => onClickChange("SR")}
					style={language === "SR" ? { textDecoration: "underline" } : {}}>
					Sr
				</p>
			</div>
			{/* TODO: Add burger menu */}
		</div>
	);
}
