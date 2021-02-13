import { Link } from 'react-router-dom';
import styled, { createGlobalStyle} from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  &:hover {
    color: orange;
  }
`;

export const ThemeText = styled.p`
  color: black;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
`;

interface ThemeProps {
  body: string;
};

interface GlobalStylesProps {
  theme: ThemeProps,
};

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    background: ${({ theme }) => theme.body};
  }
`;

export const MainFrame = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
`;
