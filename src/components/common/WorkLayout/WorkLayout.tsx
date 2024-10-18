import React from "react";
import "./WorkLayout.scss";
import Button from "../Button/Button";
import TwoPieceButton from "../TwoPieceButton/TwoPieceButton";

type Props = {
	jobName: string;
	inverse: boolean;
	skills: string[];
	description: string;
	description1: string;
	description2?: string;
	github?: string;
	website?: string;
};

export default function WorkLayout({
	jobName,
	inverse,
	skills,
	description,
	description1,
	description2,
	github,
	website
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
				<div className='external-link-button'>
					{!github && <TwoPieceButton icon='github' />}
					{!website && <TwoPieceButton icon='website' />}
				</div>
			</div>
		</div>
	);
}
