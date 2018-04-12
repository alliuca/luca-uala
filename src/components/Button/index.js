import React from 'react';
import { Element } from './button.theme';

const Button = (props) => (
  <Element {...props}>{ props.children }</Element>
);

export default Button;
