import React, { useState, useRef, useEffect } from 'react';
import StoryChoice from './StoryChoice';
import StoryHistory from './StoryHistory';
import MidScene from './MidScene';

const Game = ({endGame}) => {
    const [history, setHistory] = useState([]);
    const [bookNum, setBookNum] = useState(0);
    const [scenario, setScenario] = useState(0);
    const [midSceneHappening, setMidScene] = useState(true);
 
    const handleChoice = (choice) => {
        if (choice.nextScenario !== undefined) {
            if(choice.nextScenario < 0){
                setHistory([]);
                setScenario(0);
                setMidScene(true);
            } else{
                history.push({scenario: scenario, choice: choice.text});
                setScenario(choice.nextScenario);
            }
        }
    };

    const handleMidSceneEnd = () => {
        if(bookNum > 1){
            endGame();
        }

        setBookNum(prev => prev + 1);
        setMidScene(false);
    }

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
    };
 
    return (
        <>
        {midSceneHappening ? (
            <MidScene book={bookNum} onEnd={handleMidSceneEnd}/>
        ) : (
            <div className='game-container'>
                <div className="history-container">
                    {history.map((scen, index) => (
                        <StoryHistory book={bookNum} key={index} scenario={scen.scenario} choice={scen.choice} includeChoice={scen.choice !== "Continue"}/>
                    ))}
                    <AlwaysScrollToBottom />
                </div>
                <div className='storyChoice'>
                    <StoryChoice scenario={scenario} onChoice={handleChoice} bookNum={bookNum}/>
                </div>
            </div>
        )}
        </>
    );
};
 
export default Game;