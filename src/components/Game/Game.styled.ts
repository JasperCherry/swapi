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
  padding: 20px;
`;

export const ViewWrapper = styled.div`
`;

export const Button = styled.button`
  color: black;
  font-size: 30px;
`;
