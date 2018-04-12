import React, { Component } from 'react';
import { Parallax, Container, Block } from './sidebar.theme';

const parallaxData = [{
  start: 0,
  end: 440,
  properties: [
    {
      startValue: 0,
      endValue: 40,
      property: 'translateY',
    }
  ]
}];

class Sidebar extends Component {
  state = {
    containerHeight: 0,
  }

  componentDidUpdate() {
    if (this.state.containerHeight === 0) {
      this.setState({
        containerHeight: this.containerHeight.getBoundingClientRect().height,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { containerHeight } = this.state;
    return (
    <Parallax parallaxData={parallaxData} containerheight={containerHeight}>
      <Container>
        <div ref={c => this.containerHeight = c}>
          { React.Children.map(children, child => (
            <Block>
              {child}
            </Block>
          )) }
        </div>
      </Container>
    </Parallax>
    );
  }
};

export default Sidebar;
