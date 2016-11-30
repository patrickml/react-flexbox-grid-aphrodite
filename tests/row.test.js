import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';

import { Row, style } from '../src/components';

const classContains =
  c => key => (expect(c).toContain(css(style[key])));

describe('Row', () => {
  it('Should add "row" class', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper.props().className).toEqual(css(style.row));
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const wrapper = shallow(<Row reverse />);
    expect(wrapper.props().className).toContain(css(style.reverse));
  });

  it('Should not replace class', () => {
    const wrapper = shallow(<Row className="foo" />);
    const { className } = wrapper.props();
    expect(className).toContain('foo');
    expect(className).toContain(css(style.row));
  });

  it('Should add modificators', () => {
    const wrapper = shallow(
      <Row
        start="xs"
        center="sm"
        end="md"
        top="lg"
        middle="xs"
        bottom="sm"
        around="md"
        between="lg"
        first="xs"
        last="sm"
      />,
    );

    const styleKeys = [
      'row',
      'start-xs',
      'center-sm',
      'end-md',
      'top-lg',
      'middle-xs',
      'bottom-sm',
      'around-md',
      'between-lg',
      'first-xs',
      'last-sm',
    ];

    styleKeys.forEach(
      classContains(wrapper.props().className),
    );
  });

  it('Should support custom tag name', () => {
    const wrapper = shallow(<Row tagName="ul" />);
    expect(wrapper.type()).toBe('ul');
  });
});
