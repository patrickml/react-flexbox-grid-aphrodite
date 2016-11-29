import React, { PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import createProps from './create-props';
import style from './style';

const ModificatorType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
};
/* eslint-enable */

function getClassNames(props) {
  const modificators = [props.className, css(style.row)];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < modificatorKeys.length; ++i) {
    const key = modificatorKeys[i];
    const value = props[key];
    if (value) {
      modificators.push(css(style[`${key}-${value}`]));
    }
  }

  if (props.reverse) {
    modificators.push(css(style.reverse));
  }

  return modificators.filter(o => o).join(' ');
}

export default function Row(props) {
  return React.createElement(props.tagName || 'div', createProps(propTypes, props, getClassNames(props)));
}

Row.propTypes = propTypes;
