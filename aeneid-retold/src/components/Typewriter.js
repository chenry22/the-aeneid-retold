import { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, charDelay, sentenceDelay, completedType }) => {
    // text is an array of sentences
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currSentence, setCurrentSentence] = useState(0);
    const [sentences, setSentences] = useState([]);
    const [usedCharDelay, setCharDelay] = useState(charDelay);

    const [timeoutActive, setSentTimeout] = useState(false);
    const completed = useRef(false);

    function skipType(){
        if(!completed.current){
            setCharDelay(10);
        }
    }

    useEffect(() => {
        let timer  = setTimeout(() => {
            setSentTimeout(false);
        }, sentenceDelay);
        return () => clearTimeout(timer);
    }, [timeoutActive, sentenceDelay])

    useEffect(() => {
        let timeout;
        
        if (!timeoutActive && text[currSentence] != null && currentIndex < text[currSentence].length) {
            completed.current = false;
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currSentence][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, usedCharDelay);
        } else if(!timeoutActive && currSentence < text.length){
            // when sentence finished
            completed.current = false;
            sentences.push(currentText);
            setCurrentSentence(prev => prev + 1);
            setCurrentText("");
            setCurrentIndex(0);
            setCharDelay(charDelay);
            if(currSentence < text.length){
                setSentTimeout(true);
            }
        } else if(currSentence >= text.length){
            setCurrentText("");
            completed.current = true;
            completedType(true);
        }
    
        return () => clearTimeout(timeout);
    }, [currentIndex, currSentence, usedCharDelay, timeoutActive,
        charDelay, sentenceDelay, text, currentText, sentences, completedType]);
  
    useEffect(() => {
        setCurrentText('');
        setCurrentIndex(0);
        setCurrentSentence(0);
        setSentences([]);
        setCharDelay(charDelay);
    }, [text, charDelay])

    return (
        <span onClick={skipType}>
            {sentences.map((txt, index) => (
                <p key={index}>{txt} </p>
            ))}
            <p>{currentText}</p>
        </span>
    );
  };
  
  export default Typewriter;