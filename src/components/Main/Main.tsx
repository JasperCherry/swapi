import {
  StyledLink,
} from '../../App.styled';

const Main = () => {
  return (
    <div>
      <h1>Main menu</h1>
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
