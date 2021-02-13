import styled from 'styled-components';

export const SmallText = styled.p`
  color: ${({ theme }) => theme.text};
`;

export const ScrollWrapper = styled.div`
  margin-top: 30px;
  overflow-y: scroll;
  border: 3px solid ${({ theme }) => theme.text};
  height: 500px;
`;
