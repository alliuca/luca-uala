import React, { Component } from 'react';
import { Container, Content } from './modal.theme';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.contentRef && !this.contentRef.contains(e.target)) {
      this.props.setModalVisibility(false);
    }
  }

  render() {
    const { children, collapsed } = this.props;
    return (
      <Container innerRef={node => this.containerRef = node}>
        <Content
          innerRef={node => this.contentRef = node}
          collapsed={collapsed}
          nChildren={this.props.nChildren}
        >
          {children}
        </Content>
      </Container>
    );
  }
};

export default Modal;
