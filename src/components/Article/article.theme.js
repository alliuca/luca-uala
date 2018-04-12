import styled, { css } from 'react-emotion';

export const Container = styled('div')`
  margin-bottom: 70px;

  ${props => {
    if (props.type === 'sidebar') {
      return css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 0;

        &:before {
          content: attr(data-article-index);
          display: block;
          position: absolute;
          top: -70px;
          left: -30px;
          color: var(--yellow-2);
          font: bold 216px Montserrat, sans-serif;
        }
      `;
    }
    if (props.type === 'modal') {
      return css`
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-bottom: 0;
      `;
    }
  }}
`;

export const Header = styled('header')`
  position: relative;
`;

export const SubTitle = styled('span')`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
`;

export const Title = styled('h2')`
  margin-bottom: 25px;

  a {
    color: #000;
    font-size: ${props => props.type === 'sidebar' ? '26px' : '36px'};
    text-decoration: none;
  }
`;

export const Body = styled('div')`
  padding-bottom: 25px;
  margin-bottom: 19px;
  border-bottom: 2px solid var(--grey-1);
  color: var(--grey-2);
  line-height: 24px;
`;

export const Footer = styled('footer')`
  display: flex;
  justify-content: space-between;
`;

export const Gallery = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  height: 180px;
  margin-top: 70px;

  img {
    width: 80px;
    height: 80px;
    margin: 0 18px;
    border-radius: 8px;

    &:nth-child(3n + 1) {
      width: 177px;
      height: inherit;
      margin: 0;
    }
  }

  ${props => props.type === 'modal' && css`
    flex-direction: row;
    flex-wrap: nowrap;
    height: 328px;
    padding: 74px 0 74px 97px;
    margin: auto -60px -60px;
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    overflow: hidden;
    display: block;
    white-space: nowrap;

    img {
      &, &:nth-child(3n + 1) {
        display: inline-block;
        width: 177px;
        height: 177px;
        margin: 0 19px 0 0;
      }
    }
  `}
`;

export const Actions = styled('div')`
  display: flex;

  & > span {
    margin: 0 10px;
  }
`;
