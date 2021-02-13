import {
  StyledLink,
} from '../../App.styled';

const Results = () => {
  const storedResults = JSON.parse(localStorage.getItem('storedResults') || '[]');;

  return (
    <div>
      <h1>Results</h1>
      <StyledLink to="/">
        Main menu
      </StyledLink>
      <div><pre>{JSON.stringify(storedResults.reverse(), null, 4) }</pre></div>
    </div>
  );
}

export default Results;
