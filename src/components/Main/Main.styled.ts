import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  color: black;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  &:hover {
    color: orange;
  }
`;
