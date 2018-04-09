import React from 'react';
import { Container, Logo } from './header.theme';
import Nav from 'components/Nav';

const Header = () => (
  <Container>
    <Logo>Asdrubale</Logo>
    <Nav />
  </Container>
);

export default Header;
