import {
  Title,
  StyledLink,
} from './Results.styled';

const Results = () => {
  const storedResults = JSON.parse(localStorage.getItem('storedResults') || '[]');;

  return (
    <div>
      <Title>Results</Title>
      <StyledLink to="/">
        Main menu
      </StyledLink>
      <div><pre>{JSON.stringify(storedResults.reverse(), null, 4) }</pre></div>
    </div>
  );
}

export default Results;
