import React, { useState, useEffect } from 'react';
import data from '../data.json';
import Button from 'react-bootstrap/Button';
import Typewriter from "./Typewriter";

const StoryChoice = ({ scenario, onChoice, bookNum }) => {
	const scenarios = data["book" + bookNum];
	const currentScenario = scenarios[scenario];
	const [completed, setCompleted] = useState(false);

	const handleChoice = (choice) => {
		setCompleted(false);
		onChoice(choice);
	};

	const completedType = (childSignal) => {
		// fade in buttons
		setCompleted(childSignal);
	}

	useEffect(() => {
		// make sure to reset fading effect appropriately
		setCompleted(false);
	}, [scenario, onChoice, bookNum])

	return (
		<div className="choice-container">
			<div className="story-body">
				<Typewriter completedType={completedType} text={ currentScenario.text } charDelay={50} sentenceDelay={500}/>
				<ul className={completed ? "choices fadeIn" : "choices fadeOut"}>
					{completed && currentScenario.choices.map((choice, index) => (
						<li key={index} className="choice-item">
							<Button variant="primary" onClick={() => handleChoice(choice)}>
							{choice.text}</Button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default StoryChoice;
