import React, { useState } from 'react';
import { GameView } from './GameView';
import { OptionsView } from './OptionsView';
import { Title } from './Game.styled';

const Game = () => {
  const [startGame, setStartGame] = useState(false);
  const [content, setContent] = useState('people');
  const [playersNumber, setPlayersNumber] = useState(2);

  return (
    <div>
      <Title>Game</Title>
      {startGame ? (
        <GameView
          setStartGame={setStartGame}
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
