import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  &:hover {
    color: orange;
  }
`;
