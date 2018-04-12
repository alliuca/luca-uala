import styled from 'react-emotion';

export const Container = styled('div')`
  position: relative;
  flex: 1;

  @media (min-width: 900px) {
    margin-right: calc(33% + 80px);
  }
`;
