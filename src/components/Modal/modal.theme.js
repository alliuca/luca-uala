import styled, { css, keyframes } from 'react-emotion';

export const Container = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 25;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey-4);

  ${props => {
    const targetW = 957;
    const targetH = 600;
    const c = props.collapsed;
    const cw = c.width;
    const ch = c.height;
    const ex = targetW / cw;
    const ey = targetH / ch;
    const ew = cw + (cw * (ex - 1));
    const eh = ch + (ch * (ey - 1));

    return css`
      & > span > .fuck {
        display: flex;
        position: absolute;
        top: 0;
        left: ${`${props.collapsed.left}px`};
        width: ${`${props.collapsed.width}px`};
        height: ${`${props.collapsed.height}px`};
        transform-origin: right 0;
        animation: ${() => {
          return keyframes`
            from {
              transform: scale(1) translateY(${`${props.collapsed.top}px`});
            }
            to {
              transform: scale(${ex}, ${ey}) translateY(${`${401.5 - (eh / 2)}px`});
            }
          `
        }} 1s ease forwards;

        background-color: var(--yellow-2);
      }

      & > span > .fuck2 {
        position: relative;
        width: ${`${ew}px`};
        height: ${`${eh}px`};
      }

      & > span > .fuck > .fuck2 {
        transform: scale(1, 1);
      }
    `;
  }}

  .example-appear {
    opacity: 0.01;
  }

  .example-appear.example-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }
`;

export const Content = styled('div')`
  align-self: stretch;
  ${'' /* width: 100%; */}
  ${'' /* max-width: 957px; */}
  ${'' /* width: ${props => `${props.collapsedW}px`}; */}
  ${'' /* height: ${props => `${props.collapsedH}px`}; */}
  padding: 60px;
  border-radius: 12px;
  background-color: var(--yellow-1);
  ${'' /* transform: scale(${props => props.collapsedW / 957}, ${props => props.collapsedH / 603}); */}
  ${'' /* transition: transform 1s; */}
`;
