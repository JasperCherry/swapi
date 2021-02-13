import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  color: black;
`;

export const OptionTitle = styled.p`
  color: black;
  font-size: 20px;
`;

export interface OptionTextProps {
  selected: boolean;
}

export const OptionText = styled.p<OptionTextProps>`
  color: ${props => props.selected ? 'red' : 'black'};
  cursor: pointer;
`;

export const SectionWrapper = styled.div`
  padding: 10px;
`;

export const Button = styled.button`
  color: black;
  font-size: 20px;
  margin: 5px;
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  margin: 20px;
  display: inline-block;
`;

export interface CardProps {
  winner: boolean;
}

export const Card = styled.div<CardProps>`
  border-radius: 10px;
  background-color: ${props => props.winner ? 'green' : 'orange'};
  width: 200px;
  height: 324px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
`;

export const CardTitle = styled.p`
  color: black;
  font-size: 14px;
`;

export const CardValue = styled.p`
  color: black;
  font-size: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  &:hover {
    color: orange;
  }
`;
