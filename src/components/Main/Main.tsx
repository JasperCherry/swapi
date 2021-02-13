import {
  Title,
  StyledLink,
} from './Main.styled';

const Main = () => {
  return (
    <div>
      <Title>Main menu</Title>
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
