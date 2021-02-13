import React from 'react';
import { useQuery } from '@apollo/client';
import {
  GET_PEOPLE,
  GET_STARSHIPS,
} from './queries';
import {
  ViewWrapper,
  Button,
} from '../Game.styled';

const GameView = (props: any) => {
  const {
    setStartGame,
    content,
  } = props;

  const { data, loading, error } = useQuery(content==='people' ? GET_PEOPLE : GET_STARSHIPS);

  console.log({ data, loading, error, content });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <ViewWrapper>
      <Button onClick={() => { setStartGame(false) }} >
        Stop game
      </Button>
    </ViewWrapper>
  );
}

export default GameView;
