import React from 'react';
import data from '../data.json';
import Button from 'react-bootstrap/Button';
import Typewriter from "./Typewriter";

const StoryChoice = ({ scenario, onChoice, onGameResult }) => {
	// TODO: implement typing effect
	const scenarios = data.book1;
	const currentScenario = scenarios[scenario];

	const handleChoice = (choice) => {
		onChoice(choice);
	};

	return (
		<div className="container" style={{ maxWidth: '500px' }}>
			<div className="story-body">
				<Typewriter text={ currentScenario.text } charDelay={50} sentenceDelay={200}/>
				<div className="choices">
					{currentScenario.choices.map((choice, index) => (
						<div key={index} className="choice-item">
							<Button variant="primary" onClick={() => handleChoice(choice)}>
							{choice.text}</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default StoryChoice;
