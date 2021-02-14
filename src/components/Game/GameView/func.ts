import { Player } from '../types';

export const createPlayers = (number: number) => {
  const players: Player[] = [];

  for (let i = 0; i < number; i += 1) {
    players.push({
      id: i,
      card: null,
      draw: false,
      winner: false,
    });
  }

  return players;
};

export const drawCard = (content: string, data: any, players: Player[]) => {
  let randomCard: any;
  let duplicate = false;

  if (content === 'people') {
    const people = data.allPeople.people;
    do {
      randomCard = people[Math.floor(Math.random() * people.length)];
      duplicate = !!players.find((player: Player) => player?.card?.id === randomCard.id);
    } while (duplicate);
  } else {
    const starships = data.allStarships.starships;
    do {
      randomCard = starships[Math.floor(Math.random() * starships.length)];
      duplicate = !!players.find((player: Player) => player?.card?.id === randomCard.id);
    } while (duplicate);
  }

  return randomCard;
};

export const checkGameResult = (content: string, players: Player[]) => {
  const newPlayers = JSON.parse(JSON.stringify(players));
  const valueName = content === 'people' ? 'height' : 'hyperdriveRating';
  const gameFinished = !players.some((player: Player) => player.card === null);

  if (!gameFinished) return {
    newPlayers,
    gameFinished: false,
  }

  let highestPoints = 0;
  for (let i = 0; i < newPlayers.length; i += 1) {
    if (highestPoints < newPlayers[i].card[valueName]) {
      highestPoints = newPlayers[i].card[valueName];
    }
  }

  for (let i = 0; i < newPlayers.length; i += 1) {
    if (highestPoints === newPlayers[i].card[valueName]) {
      newPlayers[i].winner = true;
    }
  }

  return {
    newPlayers,
    gameFinished: true,
  };
};
