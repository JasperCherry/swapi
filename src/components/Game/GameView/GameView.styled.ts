import styled from 'styled-components';

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
