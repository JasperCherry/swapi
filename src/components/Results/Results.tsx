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
        <pre><SmallText>{JSON.stringify(storedResults.reverse(), null, 4) }</SmallText></pre>
      </ScrollWrapper>
    </div>
  );
}

export default Results;
