import React, { useState } from 'react';
import data from '../data.json';
import Button from 'react-bootstrap/Button';
import Typewriter from "./Typewriter";

const StoryChoice = ({ scenario, onChoice, onGameResult }) => {
	// TODO: implement typing effect
	const scenarios = data.book1;
	const currentScenario = scenarios[scenario];
	const [completed, setCompleted] = useState(false);

	const handleChoice = (choice) => {
		setCompleted(false);
		onChoice(choice);
	};

	function completedType(childSignal){
		// fade in buttons
		setCompleted(childSignal);
	}

	// TODO: fix Continue button showing up too early
	return (
		<div className="container" style={{ maxWidth: '500px' }}>
			<div className="story-body">
				<Typewriter completedType={completedType} text={ currentScenario.text } charDelay={50} sentenceDelay={500}/>
				<div className={completed ? "choices fadeIn" : "choices fadeOut"}>
					{completed && currentScenario.choices.map((choice, index) => (
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
