import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { css, StyleSheet } from 'aphrodite';

import { Col, style } from '../src/components';

describe('Col', () => {
  it('Should add class equal to props', () => {
    const wrapper = shallow(<Col xs={12} sm={8} md={6} lg={4} />);
    const classes = ['col-xs-12', 'col-sm-8', 'col-md-6', 'col-lg-4'];
    classes.forEach((c) => {
      expect(wrapper.props().className).toContain(css(style[c]));
    });
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const wrapper = shallow(<Col reverse />);
    expect(wrapper.props().className).toContain(css(style.reverse));
  });

  it('Should preserve class', () => {
    const wrapper = shallow(<Col className="foo" md={12} />);
    const { className } = wrapper.props();
    expect(className).toContain('foo');
    expect(className).toContain(css(style['col-md-12']));
  });

  it('Should properly merge styles', () => {
    const styleSheet = StyleSheet.create({
      foo: {},
    });

    const wrapper = shallow(<Col styles={styleSheet.foo} md={12} />);
    const { className } = wrapper.props();
    expect(className).toContain(css(styleSheet.foo));
    expect(className).toContain(css(style['col-md-12']));
  });

  it('Should support auto-width', () => {
    const wrapper = shallow(<Col xs sm md lg />);
    const classes = ['col-xs', 'col-sm', 'col-md', 'col-lg'];
    classes.forEach((c) => {
      expect(wrapper.props().className).toContain(css(style[c]));
    });
  });

  it('Should match the snapshot', () => {
    const tree = renderer.create(
      <Col xs={12} />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should support custom tag name', () => {
    const wrapper = shallow(<Col xs={12} tagName="ul" />);
    expect(wrapper.type()).toBe('ul');
  });
});
