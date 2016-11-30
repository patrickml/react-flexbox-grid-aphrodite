import React from 'react';
import renderer from 'react-test-renderer';
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
    expect(wrapper.props().className).toContain(css(style.reverse));
  });

  it('Should preserve class', () => {
    const wrapper = shallow(<Row className="foo" />);
    const { className } = wrapper.props();
    expect(className).toContain('foo');
    expect(className).toContain(css(style.row));
  });

  it('Should add modificators', () => {
    const tree = renderer.create(
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

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should support custom tag name', () => {
    const wrapper = shallow(<Row tagName="ul" />);
    expect(wrapper.type()).toBe('ul');
  });
});
