import React from 'react';
import data from '../data.json';

const StoryHistory = ({ scenario, choice, includeChoice }) => {
	const scenarios = data.book1;
	return (
		<div className="story-node">
			<div className="story-body">
				<div className="story-desc">{
					scenarios[scenario].text.map((txt, index) => {
						return <p key={index}>{txt}</p> 
					})}</div>
				{includeChoice && <strong className="choice-decision">{choice}</strong>}
			</div>
		</div>
	);
};

export default StoryHistory;
