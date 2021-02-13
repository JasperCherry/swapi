import {
  Title,
  StyledLink,
} from './Main.styled';

const Main = () => {
  return (
    <div>
      <Title>Main</Title>
        <div>
          <StyledLink to="/game">
            Play Game
          </StyledLink>
        </div>
        <div>
          <StyledLink to="/results">
            Results
          </StyledLink>
        </div>
    </div>
  );
}

export default Main;
