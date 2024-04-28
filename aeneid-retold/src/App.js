import './App.css';
import React, { useState } from 'react';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [startGame, setStart] = useState(false);

  const beginGame = () => {
    setStart(true);
  };

  const endGame = () => {
    setStart(false);
  }

  return (
    <>
    {startGame ? (
      <div className="container">
        <div className="gameHeader">
          <h2>The Aeneid: Retold</h2>
        </div>
        <div className="game">
          <Game />
        </div>
        <br></br>
        <Button variant="outline-info" size="sm" onClick={endGame}>Back to Main</Button>
      </div>
    ) : (
      <div className="beginScreen">
        <h1>The Aeneid: Retold</h1>
        <Button onClick={beginGame}>Begin</Button>
      </div>
    )}
    </>
)}

export default App;