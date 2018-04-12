import styled from 'react-emotion';

export const Container = styled('div')`
  position: relative;
  height: 700px;
  overflow: hidden;
`;

export const Image = styled('div')`
  position: absolute;
  top: 60px;
  left: 50%;
  width: 100%;
  min-height: 640px;
  max-width: 100%;
  background: url(${props => props.src}) center 0 no-repeat;
  background-size: cover;
  transform: translateX(-50%);
`;
