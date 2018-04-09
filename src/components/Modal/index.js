import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Container, Content } from './modal.theme';

const Modal = ({ children, collapsed }) => (
    <Container
      collapsed={collapsed}
    >
      <Content>
        { children }
      </Content>
    </Container>
);

export default Modal;
