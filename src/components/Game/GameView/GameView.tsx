import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  GET_PEOPLE,
  GET_STARSHIPS,
} from './queries';
import {
  ViewWrapper,
  Button,
  Card,
  CardWrapper,
  CardTitle,
  CardValue,
  SectionWrapper,
} from '../Game.styled';

const createPlayers = (number: number) => {
  const players: any = [];

  for (let i = 0; i < number; i += 1) {
    players.push({
      id: i,
      card: null,
      draw: false,
    });
  }

  return players;
};

const drawCard = (content: any, data: any, players: any) => {
  let randomCard: any;
  let duplicate = false;

  if (content === 'people') {
    const people = data.allPeople.people;
    do {
      randomCard = people[Math.floor(Math.random() * people.length)];
      duplicate = !!players.find((player: any) => player?.card?.name === randomCard.name);
    } while (duplicate);
  } else {
    const starships = data.allStarships.starships;
    do {
      randomCard = starships[Math.floor(Math.random() * starships.length)];
      duplicate = !!players.find((player: any) => player?.card?.name === randomCard.name);
    } while (duplicate);
  }

  return randomCard;
};

const GameView = (props: any) => {
  const { setStartGame, content, playersNumber } = props;
  const { data, loading, error } = useQuery(content === 'people' ? GET_PEOPLE : GET_STARSHIPS);

  const [players, updatePlayers] = useState(createPlayers(playersNumber));

  const cards = players.map((player: any, index: number) =>
    <CardWrapper key={player.id}>
      <h4>Player {player.id + 1}</h4>
      <Card
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
    <ViewWrapper>
      <SectionWrapper>
        {cards}
      </SectionWrapper>
      <SectionWrapper>
      <Button onClick={() => { setStartGame(false) }} >
        Stop game
      </Button>
      </SectionWrapper>
    </ViewWrapper>
  );
}

export default GameView;
