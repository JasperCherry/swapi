import React, { useState } from 'react';
import { GameView } from './GameView';
import { OptionsView } from './OptionsView';

const Game = () => {
  const [startGame, setStartGame] = useState(false);
  const [content, setContent] = useState('people');
  const [playersNumber, setPlayersNumber] = useState(2);

  return (
    <div>
      <h1>Game</h1>
      {startGame ? (
        <GameView
          content={content}
          setStartGame={setStartGame}
          playersNumber={playersNumber}
        />
      ) : (
        <OptionsView
          content={content}
          setContent={setContent}
          playersNumber={playersNumber}
          setPlayersNumber={setPlayersNumber}
          setStartGame={setStartGame}
        />
      )}
    </div>
  );
}

export default Game;
