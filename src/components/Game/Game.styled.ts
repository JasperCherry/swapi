import styled from 'styled-components';

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
`;

export const SectionWrapper = styled.div`
  padding: 10px;
`;

export const Button = styled.button`
  color: black;
  font-size: 20px;
  margin: 5px;
`;

export const CardWrapper = styled.div`
  margin: 20px;
`;

export interface CardProps {
  winner: boolean;
}

export const Card = styled.div<CardProps>`
  border-radius: 10px;
  background-color: ${props => props.winner ? 'green' : 'orange'};
  width: 150px;
  height: 242px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

export const CardTitle = styled.p`
  color: black;
  font-size: 14px;
`;

export const CardValue = styled.p`
  color: black;
  font-size: 16px;
`;
