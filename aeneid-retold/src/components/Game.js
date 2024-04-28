import React, { useState, useRef, useEffect } from 'react';
import StoryChoice from './StoryChoice';
import StoryHistory from './StoryHistory';

const Game = () => {
    // var bookNum = 1;
    const [history, setHistory] = useState([]);

    const [scenario, setScenario] = useState(0);
    const [gameResult, setGameResult] = useState(null);
 
    const handleChoice = (choice) => {
        if (choice.nextScenario !== undefined) {
            history.push({scenario: scenario, choice: choice.text});
            setScenario(choice.nextScenario);
        }
    };
 
    const restartGame = () => {
        setScenario(0);
        setGameResult(null);
        setHistory([]);
    };
 
    const handleGameResult = (result) => {
        setGameResult(result);
    };

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
    };
 
    return (
        <>
        {gameResult ? (
            <center>
                <button onClick={restartGame}>Restart Game</button>
            </center>
        ) : (
            <>
            <div className="history-container">
                {history.map((scen, index) => (
                    <StoryHistory key={index} scenario={scen.scenario} choice={scen.choice} includeChoice={scen.choice !== "Continue"}/>
                ))}
                <AlwaysScrollToBottom />
            </div>

            <StoryChoice scenario={scenario} onChoice={handleChoice} onGameResult={handleGameResult} />
            </>
        )}
        </>
    );
};
 
export default Game;