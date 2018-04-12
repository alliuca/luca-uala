import styled, { css, keyframes } from 'react-emotion';

const appear = keyframes`
  from { opacity: 0.01 }
  to { opacity: 1 }
`;

const appearShift = keyframes`
  from { opacity: 0.01; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0); }
`;

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

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--grey-4);
    animation: ${appear} .3s ease forwards;
  }
`;

export const Content = styled('div')`
  ${props => {
    const c = props.collapsed;
    const ct = c.top;
    const cl = c.left;
    const cr = c.right;
    const cw = c.width;
    const ch = c.height;
    const targetW = window.innerWidth - ((window.innerWidth - cr) * 2);
    const targetH = window.innerHeight - 200;
    const ey = targetH / ch;
    const eh = ch + (ch * (ey - 1));
    return css`
      position: absolute;
      top: 0;
      right: ${`${window.innerWidth - cl - cw}px`};
      align-self: stretch;
      width: ${`${cw}px`};
      height: ${`${ch}px`};
      padding: 60px;
      border-radius: 12px;
      background-color: var(--yellow-1);
      overflow: hidden;
      transform-origin: right 0;
      animation: ${() => {
        return keyframes`
          from {
            width: ${`${cw}px`};
            height: ${`${ch}px`};
            transform: translateY(${`${ct}px`});
          }
          to {
            width: ${`${targetW}px`};
            height: ${`${targetH}px`};
            transform: translateY(${`${(window.innerHeight / 2) - (eh / 2)}px`});
          }
        `
      }} .25s ease forwards;
    `;
  }}

  & > div {
    height: 100%;

    & > * {
      opacity: 0;
      transform: translateY(100%);
      animation: ${appearShift} .4s ease forwards;

      ${props => {
        const tot = props.nChildren * 0.25;
        const children = [];
        for (let i = 0; i < props.nChildren; i++) {
          children.push(`
            &:nth-child(${i + 1}) {
              animation-delay: ${tot - (0.15 * (i))}s;
            }
          `);
        }
        return css`${children}`;
      }
    }
  }
`;
