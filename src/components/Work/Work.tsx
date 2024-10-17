import React from "react";
import "./Work.scss";

export default function Work() {
	const workExperience = [
		{
			name: "Fuel Me",
			years: "Aug 2023 - Septembar 2024",
			total: "1 year 1 month",
			position: "Senior Backend Developer",
			type: "Hybrid"
		},
		{
			name: "Fuel Me",
			years: "March 2023 - August 2023",
			total: "1 year 1 month",
			position: "Full Stack Developer",
			type: "Remote"
		},
		{
			name: "Wiv Technology",
			years: "Decembar 2021 - March 2023",
			total: "1 year 4 months",
			position: "Full Stack Developer",
			type: "Remote"
		},
		{
			name: "Fuel Me",
			years: "Jun 2021 - November 2021",
			total: "6 months",
			position: "Full Stack Developer",
			type: "Remote"
		}
	];
	return (
		<div className='work-container'>
			<h1>Work</h1>
			{workExperience.map(work => (
				<div className='work-experience'>
					<div className='years'>
						<p className='year'>{work.years}</p>
						<p className='total-years'>{work.total}</p>
					</div>
					<div className='name'>{work.name}</div>
					<div className='position'>
						{work.position} | {work.type}
					</div>
				</div>
			))}
		</div>
	);
}
