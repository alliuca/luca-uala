import React from 'react';
import { Container, Logo } from './header.theme';
import Nav from 'components/Nav';

const parallaxData = [{
  start: 300,
  end: 360,
  properties: [
    {
      startValue: 0,
      endValue: -100,
      property: 'translateY',
      unit: '%',
    }
  ]
}];

const Header = () => (
  <Container parallaxData={parallaxData}>
    <Logo>Asdrubale</Logo>
    <Nav />
  </Container>
);

export default Header;
