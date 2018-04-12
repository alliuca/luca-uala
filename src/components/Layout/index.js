import React from 'react';
import { Container } from './layout.theme.js';

const Layout = ({ children, style }) => (
  <Container style={style}>
    { children }
  </Container>
);

export default Layout;
