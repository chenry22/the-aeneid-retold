import React, { useState } from 'react';
import Typewriter from './Typewriter';
import Button from 'react-bootstrap/Button';
import data from '../data.json';

const MidScene = ({book, onEnd}) => {
    const [finished, setFinished] = useState(false);
    const txt = data["mid" + book];

    const completed = () => {
        setFinished(true);
    }

    // make on click skip
    return (
        <>
        {finished ? (
            <div className='mid-scene'>
                <span>{txt.map((content, index) => (
                    <p key={index}><i>{content}</i></p>
                ))}</span>
                <Button onClick={onEnd}>Continue</Button>
            </div>
        ) : (
            <div className='mid-scene'>
                <Typewriter completedType={completed} text={txt} charDelay={70} sentenceDelay={500}/>
                <Button onClick={onEnd}><i>Skip Scene</i></Button>
            </div>
        )}
        </>
    );
}

export default MidScene;