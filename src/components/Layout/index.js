import React from 'react';
import { Container } from './layout.theme.js';

const Layout = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default Layout;
