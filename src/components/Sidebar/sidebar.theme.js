import styled from 'react-emotion';
import Plx from 'react-plx';

export const Parallax = styled(Plx)`
  position: relative;
  width: 100%;
  order: 1;

  @media (min-width: 900px) {
    position: absolute;
    z-index: 1;
  }

  &.Plx--bellow {
    @media (min-width: 900px) {
      position: fixed;
      top: 260px;
      order: 0;
    }
  }

  ${'' /* &.Plx--between-0-and-1 {
    @media (min-width: 900px) {
      position: fixed;
      top: 260px;
      order: 0;
    }
  }

  &.Plx--bellow {
    @media (min-width: 900px) {
      position: absolute;
      top: ${props => props.containerheight ? `${props.containerheight - 60}px` : 'auto'};
    }
  } */}
`;

export const Container = styled('div')`
  position: absolute;
  max-width: var(--containerMaxWidth);
  width: 100%;
  left: 50%;
  transform: translateX(-50%);

  & > div {
    position: static;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 60px;
    margin: -115px 0 230px;

    @media (min-width: 900px) {
      display: block;
      margin-top: -255px;
      position: absolute;
      right: 98px;
      width: 310px;
      padding: 0;
    }
  }
`;

export const Block = styled('div')`
  position: relative;
  width: 310px;
  min-height: 414px;
  padding: 60px 28px;
  margin-bottom: 30px;
  border-radius: 12px;
  background-color: var(--yellow-1);
  overflow: hidden;

  @media (min-width: 900px) {
    width: 100%;
  }
`;
