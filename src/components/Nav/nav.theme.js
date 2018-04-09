import styled from 'react-emotion';

export const Container = styled('ul')`
  margin: 0 auto 0;
  padding: 0 53px 0 0;
`;

export const Item = styled('li')`
  display: inline-block;
  margin: 0 10px;
  list-style: none;
`;

export const Link = styled('a')`
  color: var(--grey-2);
  font: 14px OpenSans;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;
