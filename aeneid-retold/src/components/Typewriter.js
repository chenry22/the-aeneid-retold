import { useState, useEffect } from 'react';

const Typewriter = ({ text, charDelay, sentenceDelay }) => {
    // text is an array of sentences
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currSentence, setCurrentSentence] = useState(0);
    const [sentences, setSentences] = useState([]);
    const [usedCharDelay, setCharDelay] = useState(charDelay);
    const [active, setActive] = useState(false);

    function skipType(){
        setCharDelay(10);
    }

    useEffect(() => {
        let timeout;
        
        if (text[currSentence] != null && currentIndex < text[currSentence].length) {
            setActive(true);
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currSentence][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, usedCharDelay);
        } else if(currSentence <= text.length){
            // when sentence finished
            setActive(true);
            sentences.push(currentText);
            setCurrentSentence(prev => prev + 1);
            setCurrentText("");
            setCurrentIndex(0);
            setCharDelay(charDelay);

            timeout = setTimeout(() => {}, sentenceDelay);
        } else{
            setCurrentText("");
        }
    
        return () => clearTimeout(timeout);
    }, [currentIndex, currSentence, usedCharDelay, active, charDelay, sentenceDelay, text, currentText, sentences]);
  
    useEffect(() => {
        setActive(true);
        setCurrentText('');
        setCurrentIndex(0);
        setCurrentSentence(0);
        setSentences([]);
        setCharDelay(charDelay);
    }, [text, charDelay, active])

    return (
        <span onClick={skipType}>
            {sentences.map((txt, index) => (
                <p key={index}>{txt}</p>
            ))}
            <p>{currentText}</p>
        </span>
    );
  };
  
  export default Typewriter;