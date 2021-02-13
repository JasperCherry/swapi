import React from 'react';
import {
  ViewWrapper,
  Button,
} from '../Game.styled';

const GameView = (props: any) => {
  const { setStartGame } = props;

  console.log('ffff')

  return (
    <ViewWrapper>
      <Button onClick={() => { setStartGame(false) }} >
        Stop game
      </Button>
    </ViewWrapper>
  );
}

export default GameView;
