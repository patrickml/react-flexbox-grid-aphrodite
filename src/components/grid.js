import { createElement } from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import createProps from './create-props';
import style from '../components/style';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  // Aphrodite SheetDefinitions
  styles: PropTypes.any,
  children: PropTypes.node,
};
/* eslint-enable */

export default function Grid(props) {
  const containerClass = css(style[
    props.fluid ? 'container-fluid' : 'container'],
    props.styles,
  );
  const className = [props.className, containerClass].filter(o => o).join(' ');

  return createElement(props.tagName || 'div', createProps(propTypes, props, className));
}

Grid.propTypes = propTypes;
