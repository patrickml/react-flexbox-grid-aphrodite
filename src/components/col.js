import { createElement } from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import createProps from './create-props';
import style from './style';

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xsFirst: PropTypes.bool,
  smFirst: PropTypes.bool,
  mdFirst: PropTypes.bool,
  lgFirst: PropTypes.bool,
  xsLast: PropTypes.bool,
  smLast: PropTypes.bool,
  mdLast: PropTypes.bool,
  lgLast: PropTypes.bool,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  // Aphrodite SheetDefinitions
  styles: PropTypes.any,
  tagName: PropTypes.string,
  children: PropTypes.node,
};
/* eslint-enable */

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xsFirst: 'first-xs',
  smFirst: 'first-sm',
  mdFirst: 'first-md',
  lgFirst: 'first-lg',
  xsLast: 'last-xs',
  smLast: 'last-sm',
  mdLast: 'last-md',
  lgLast: 'last-lg',
};

function getClassNames(props) {
  const extraClasses = [];

  if (props.reverse) {
    extraClasses.push(style.reverse);
  }

  const classes = Object.keys(props)
    .filter(key => classMap[key])
    .map(key => style[Number.isInteger(props[key]) ? (`${classMap[key]}-${props[key]}`) : classMap[key]])
    .concat(extraClasses)
    .filter(k => typeof k === 'object')
    .concat([props.styles]);

  return !props.className ? css(...classes) : `${props.className} ${css(...classes)}`;
}

export default function Col(props) {
  const className = getClassNames(props);

  return createElement(props.tagName || 'div', createProps(propTypes, props, className));
}

Col.propTypes = propTypes;
