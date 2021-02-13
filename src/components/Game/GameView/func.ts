export const createPlayers = (number: number) => {
  const players: any = [];

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

export const drawCard = (content: any, data: any, players: any) => {
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

export const checkGameResult = (content: any, players: any) => {
  const newPlayers = JSON.parse(JSON.stringify(players));
  const valueName = content === 'people' ? 'height' : 'hyperdriveRating';
  const gameFinished = !players.some((player: any) => player.card === null);

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
