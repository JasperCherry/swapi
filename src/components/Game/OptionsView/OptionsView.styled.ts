import styled from 'styled-components';

export const OptionTitle = styled.p`
  color: black;
  font-size: 20px;
`;

interface OptionTextProps {
  selected: boolean;
};

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
