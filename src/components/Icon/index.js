import React, { Component } from 'react';
import Fire from './fire';
import ToiletPaper from './toilet-paper';
import Drop from './drop';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.selectIcon = this.selectIcon.bind(this);
  }

  selectIcon() {
    switch (this.props.type.toLowerCase()) {
      case 'fire':
        return <Fire />;
      case 'toilet-paper':
        return <ToiletPaper />;
      case 'drop':
        return <Drop />;
      default:
        return null;
    }
  }

  render() {
    const { style, className } = this.props;
    return (
      <span style={style} className={className}>
        { this.selectIcon() }
      </span>
    );
  }
}

export default Icon;
