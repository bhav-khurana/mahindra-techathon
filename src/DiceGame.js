import React, { useState } from 'react';
import './DiceGame.css';

const DiceGame = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [dieResult, setDieResult] = useState(null);

  const rollDie = () => {
    const result = Math.floor(Math.random() * 6) + 1;

    setDieResult(result);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className="DiceGame">
      <h1>Die Rolling Game</h1>
      <p>Current Player: Player {currentPlayer}</p>

      {dieResult !== null && (
        <p>
          Player {currentPlayer} rolled a {dieResult}!
        </p>
      )}

      <button onClick={rollDie} disabled={dieResult !== null}>
        Roll Die
      </button>

      <p>
        <strong>Instructions:</strong> Click the "Roll Die" button to take your turn.
      </p>
    </div>
  );
};

export default DiceGame;
