import styled, { css } from 'react-emotion';

export const Container = styled('div')`
  margin-bottom: 70px;

  ${props => props.type === 'sidebar' && css`
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
  `}
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

export const Actions = styled('div')`
  display: flex;

  & > span {
    margin: 0 10px;
  }
`;
