import { createElement, PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import createProps from './create-props';
import style from '../components/style';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
};
/* eslint-enable */

export default function Grid(props) {
  const containerClass = css(style[props.fluid ? 'container-fluid' : 'container']);
  const className = [props.className, containerClass].filter(o => o).join(' ');

  return createElement(props.tagName || 'div', createProps(propTypes, props, className));
}

Grid.propTypes = propTypes;
