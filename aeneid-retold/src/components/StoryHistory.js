import React from 'react';
import data from '../data.json';

const StoryHistory = ({ scenario, choice, includeChoice }) => {
	const scenarios = data.book1;
	return (
		<div className="story-node" style={{ maxWidth: '500px' }}>
			<div className="story-body">
				<p className="story-desc">{scenarios[scenario].text}</p>
				{includeChoice ? 
					<strong className="choice-decision">{choice}</strong>
				: <></>}
			</div>
		</div>
	);
};

export default StoryHistory;
