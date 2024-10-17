import React from "react";
import "./Work.scss";
import WorkLayout from "../common/WorkLayout/WorkLayout";
import { work } from "../../util/work";
import { languageTexts } from "../../util/language";
import { useAppSelector } from "../../redux/hooks";
export default function Work() {
	const languageChosen = useAppSelector(state => state.language);
	const language = languageTexts.find(lan => languageChosen === lan.name);
	const workTitle = language?.workTitle;
	const developerWord = language?.developerWord;
	const senior = language?.senior;
	const august = language?.august;
	const september = language?.september;
	const march = language?.march;
	const decembar = language?.decembar;
	const jun = language?.jun;
	const november = language?.november;
	const description = language?.description;
	const description1 = language?.description1;

	const workExperience = [
		{
			name: "Fuel Me",
			years: `${august} 2023 - ${september} 2024`,
			total: "1 year 1 month",
			position: `${senior} Backend ${developerWord}`,
			type: "Hybrid"
		},
		{
			name: "Fuel Me",
			years: `${march} 2023 - ${august} 2023`,
			total: "1 year 1 month",
			position: `Full Stack ${developerWord}`,
			type: "Remote"
		},
		{
			name: "Wiv Technology",
			years: `${decembar} 2021 - ${march} 2023`,
			total: "1 year 4 months",
			position: `Full Stack ${developerWord}`,
			type: "Remote"
		},
		{
			name: "Fuel Me",
			years: `${jun} 2021 - ${november} 2021`,
			total: "6 months",
			position: `Full Stack ${developerWord}`,
			type: "Remote"
		}
	];

	return (
		<div className='work-container'>
			<h1>{workTitle}</h1>
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
			<div className='total-work-years'>
				<h4>Work Experience</h4>
				<h5>3 years 7 months</h5>
			</div>
			{work.map(work => (
				<WorkLayout
					description={work.description}
					description1={work.description1}
					inverse={false}
					jobName={work.name}
					skills={work.skils}
					key={1}
				/>
			))}
		</div>
	);
}
