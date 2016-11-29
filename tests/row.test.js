import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';

import { Row, style } from '../src/components';

describe('Row', () => {
  it('Should add "row" class', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper.props().className).toEqual(css(style.row));
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const wrapper = shallow(<Row reverse />);
    expect(wrapper.props().className).toContain(style.reverse);
  });

  it('Should not replace class', () => {
    const wrapper = shallow(<Row className="foo" />);
    const { className } = wrapper.props();
    expect(className).toContain('foo');
    expect(className).toContain(style.row._name);
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
    const { className } = wrapper.props();

    expect(className).toContain(style.row);
    expect(className).toContain(style['start-xs']);
    expect(className).toContain(style['center-sm']);
    expect(className).toContain(style['end-md']);
    expect(className).toContain(style['top-lg']);
    expect(className).toContain(style['middle-xs']);
    expect(className).toContain(style['bottom-sm']);
    expect(className).toContain(style['around-md']);
    expect(className).toContain(style['between-lg']);
    expect(className).toContain(style['first-xs']);
    expect(className).toContain(style['last-sm']);
  });

  it('Should support custom tag name', () => {
    const wrapper = shallow(<Row tagName="ul" />);
    expect(wrapper.type()).toBe('ul');
  });
});
