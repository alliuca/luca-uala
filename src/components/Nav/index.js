import React from 'react';
import { Container, Item, Link } from './nav.theme';

const Nav = () => (
  <Container>
    <Item>
      <Link href="/">Lorem</Link>
    </Item>
    <Item>
      <Link href="/">Ipsum</Link>
    </Item>
    <Item>
      <Link href="/">Dolor</Link>
    </Item>
  </Container>
);

export default Nav;
