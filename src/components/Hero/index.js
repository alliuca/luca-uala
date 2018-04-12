import React from 'react';
import { Container, Image } from './hero.theme';

const Hero = ({ src }) => (
  <Container>
    <Image src={src} />
  </Container>
);

export default Hero;
