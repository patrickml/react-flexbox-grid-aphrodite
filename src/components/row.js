import { createElement } from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import createProps from './create-props';
import style from './style';

const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  reverse: PropTypes.bool,
  start: PropTypes.string,
  center: PropTypes.string,
  end: PropTypes.string,
  top: PropTypes.string,
  middle: PropTypes.string,
  bottom: PropTypes.string,
  around: PropTypes.string,
  between: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  className: PropTypes.string,
  // Aphrodite SheetDefinitions
  styles: PropTypes.any,
  tagName: PropTypes.string,
  children: PropTypes.node,
};
/* eslint-enable */

function getClassNames(props) {
  const modificators = [style.row];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < modificatorKeys.length; ++i) {
    const key = modificatorKeys[i];
    const value = props[key];
    if (value) {
      value.split(',').forEach((m) => {
        modificators.push(style[`${key}-${m}`]);
      });
    }
  }

  if (props.reverse) {
    modificators.push(style.reverse);
  }

  const classes = modificators.filter(o => o && typeof o === 'object').concat([props.styles]);

  return !props.className ? css(...classes) : `${props.className} ${css(...classes)}`;
}

export default function Row(props) {
  return createElement(props.tagName || 'div', createProps(propTypes, props, getClassNames(props)));
}

Row.propTypes = propTypes;
