import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  drawCard,
  createPlayers,
  checkGameResult,
} from './func';
import {
  GET_PEOPLE,
  GET_STARSHIPS,
} from './queries';
import {
  Button,
  Card,
  CardWrapper,
  CardTitle,
  CardValue,
  SectionWrapper,
} from './GameView.styled';

const GameView = (props: any) => {
  const { setStartGame, content, playersNumber } = props;
  const { data, loading, error } = useQuery(content === 'people' ? GET_PEOPLE : GET_STARSHIPS);
  const [players, updatePlayers] = useState(createPlayers(playersNumber));
  const [block, setBlock] = useState(false);

  const restart = () => {
    const newPlayers = createPlayers(playersNumber);
    updatePlayers(newPlayers);
    setBlock(false);
  }

  useEffect(() => {
    const { newPlayers, gameFinished } = checkGameResult(content, players);

    if (gameFinished && !block) {
      updatePlayers(newPlayers);
      setBlock(true);
      const storedResults: any = JSON.parse(localStorage.getItem('storedResults') || '[]');
      const newResult = {
        players: newPlayers,
        date: new Date().toString(),
      };
      storedResults.push(newResult);
      localStorage.setItem('storedResults', JSON.stringify(storedResults));
    }
  });

  const cards = players.map((player: any, index: number) =>
    <CardWrapper key={player.id}>
      <h4>Player {player.id + 1}</h4>
      <Card
        winner={player.winner}
        onClick={() => {
          if (player.draw) return;
          const randomCard = drawCard(content, data, players);
          const newPlayers = JSON.parse(JSON.stringify(players))
          newPlayers[index].card = randomCard;
          newPlayers[index].draw = true;
          updatePlayers(newPlayers);
        }}
      >
        {player.draw ? (
          <>
            <CardTitle>Name</CardTitle>
            <CardValue><b>{player.card.name}</b></CardValue>
            <CardTitle>{ content === 'people' ? 'Height' : 'Hyperdrive Rating' }</CardTitle>
            <CardValue><b>{ content === 'people' ? player.card.height : player.card.hyperdriveRating }</b></CardValue>
          </>
        ) : (
          <>
            <h3>Click to draw</h3>
          </>
        )}
      </Card>
    </CardWrapper>
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <div>
      <SectionWrapper>
        {cards}
      </SectionWrapper>
      <SectionWrapper>
        <Button onClick={() => { setStartGame(false) }} >
          Options
        </Button>
        {block ? (
          <Button onClick={restart} >
            Restart
          </Button>
        ) : null}
      </SectionWrapper>
    </div>
  );
}

export default GameView;
