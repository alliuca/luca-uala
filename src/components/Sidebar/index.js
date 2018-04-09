import React from 'react';
import { Container, Block } from './sidebar.theme';

const Sidebar = ({ children }) => (
  <Container>
    { React.Children.map(children, (child, index) => (
      <Block>
        {child}
      </Block>
    )) }
  </Container>
);

export default Sidebar;
