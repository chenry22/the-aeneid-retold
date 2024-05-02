import './App.css';
import React, { useState } from 'react';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import map from "./img/blank_map.png";

function App() {
  const [startGame, setStart] = useState(false);

  const beginGame = () => {
    setStart(true);
  };

  const endGame = () => {
    if(window.confirm("Are you sure?")){
      setStart(false);
    }
  }

  const forceEndGame = () => {
    setStart(false);
  }

  return (
    <>
    {startGame &&
      <>
      <div className='background'>
        <TransformWrapper limitToBounds={true} disablePadding={true}>
          <TransformComponent>
            <img src={map} alt="map"></img>
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div className="top-container">
        <div className="gameHeader">
          <h2>The Aeneid: Retold</h2>
        </div>
        <div className="game">
          <Game endGame={forceEndGame}/>
          <Button variant="info" size="sm" onClick={endGame}>Back to Main</Button>
        </div>
      </div>
      </>
    }

    {!startGame && 
      <div className="beginScreen">
        <h1>The Aeneid: Retold</h1>
        <Button onClick={beginGame}>Begin</Button>
      </div>
    }
    </>
)}

export default App;