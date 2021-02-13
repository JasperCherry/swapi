import React from 'react';
import {
  OptionText,
  OptionTitle,
  SectionWrapper,
  ViewWrapper,
  Button,
} from '../Game.styled';

const Game = (props: any) => {
  const {
    content,
    setContent,
    playersNumber,
    setPlayersNumber,
    setStartGame,
  } = props;

  return (
    <ViewWrapper>
      <SectionWrapper>
        <OptionTitle>Choose content:</OptionTitle>
        <OptionText
          selected={content === 'people' ? true : false}
          onClick={() => { setContent('people') }}
        >
          People
        </OptionText>
        <OptionText
          selected={content === 'startships' ? true : false}
          onClick={() => { setContent('startships') }}
        >
          Starships
        </OptionText>
      </SectionWrapper>
      <SectionWrapper>
        <OptionTitle>Number of players:</OptionTitle>
        <OptionText
          selected={playersNumber === 2 ? true : false}
          onClick={() => { setPlayersNumber(2) }}
        >
          2 players
        </OptionText>
        <OptionText
          selected={playersNumber === 3 ? true : false}
          onClick={() => { setPlayersNumber(3) }}
        >
          3 players
        </OptionText>
        <OptionText
          selected={playersNumber === 4 ? true : false}
          onClick={() => { setPlayersNumber(4) }}
        >
          4 players
        </OptionText>
      </SectionWrapper>
      <Button onClick={() => { setStartGame(true) }} >
        Start Game
      </Button>
    </ViewWrapper>
  );
}

export default Game;
