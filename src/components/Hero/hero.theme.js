import styled from 'react-emotion';

export const Container = styled('div')`
  position: relative;
  height: 640px;
  overflow: hidden;
`;

export const Image = styled('img')`
  position: absolute;
  top: 60px;
  left: 50%;
  max-width: 100%;
  transform: translateX(-50%);
`;
