import { Link } from 'react-router-dom';
import styled, { createGlobalStyle} from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 30px;
  &:hover {
    color: orange;
  }
`;

export const ThemeText = styled.p`
  color: ${({ theme }) => theme.text};
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
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const PaddingFrame = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
`;
