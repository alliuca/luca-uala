import styled from 'react-emotion';
import Plx from 'react-plx';

export const Container = styled(Plx)`
  position: fixed;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 var(--containerPadding);
  background-color: #fff;
`;

export const Logo = styled('a')`
  font: bold 20px Montserrat;
`;
