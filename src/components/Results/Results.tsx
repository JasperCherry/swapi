import {
  StyledLink,
  Title,
} from '../../App.styled';
import {
  SmallText,
  ScrollWrapper,
} from './Results.styled';

const Results = () => {
  const storedResults = JSON.parse(localStorage.getItem('storedResults') || '[]');;

  return (
    <div>
      <Title>Results</Title>
      <StyledLink to="/">
        Main menu
      </StyledLink>
      <ScrollWrapper>
        <SmallText><pre>{JSON.stringify(storedResults.reverse(), null, 4) }</pre></SmallText>
      </ScrollWrapper>
    </div>
  );
}

export default Results;
