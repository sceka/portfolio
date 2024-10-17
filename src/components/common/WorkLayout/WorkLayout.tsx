import React from "react";
import "./WorkLayout.scss";
import Button from "../Button/Button";

type Props = {
	jobName: string;
	inverse: boolean;
	skills: string[];
	description: string;
	description1: string;
	description2?: string;
};

export default function WorkLayout({
	jobName,
	inverse,
	skills,
	description,
	description1,
	description2
}: Props) {
	return (
		<div className={!inverse ? "work-layout-normal" : "work-layout-inverse"}>
			<div className='work-details'>
				<h1>{jobName}</h1>
				<div className='work-details-skills'>
					{skills.map(skill => (
						<div className='skills-circle'>{skill}</div>
					))}
				</div>
				<div className='company-description'>
					{description && <p dangerouslySetInnerHTML={{ __html: description }} />}
					{description1 && (
						<p
							className='company-description1'
							dangerouslySetInnerHTML={{ __html: description1 }}
						/>
					)}
					{description2 && (
						<p
							className='company-description2'
							dangerouslySetInnerHTML={{ __html: description2 }}
						/>
					)}
				</div>
				<div className='github-button-work-section'>
					<div className='github-wrapper'>
						<Button
							onClick={() => {}}
							variant='white-outline'
							icon='/images/github.png'
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
				</div>
			</div>
		</div>
	);
}
