import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { css, StyleSheet } from 'aphrodite';

import { Grid, style } from '../src/components';

describe('Grid', () => {
  it('Should add "container" class', () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper.props().className).toEqual(css(style.container));
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    const wrapper = shallow(<Grid fluid />);
    expect(wrapper.props().className).toContain(css(style.fluid));
  });

  it('Should preserve class', () => {
    const wrapper = shallow(<Grid className="foo" />);
    const { className } = wrapper.props();
    expect(className).toContain('foo');
    expect(className).toContain(css(style.container));
  });

  it('Should properly merge styles', () => {
    const styleSheet = StyleSheet.create({
      foo: {},
    });

    const wrapper = shallow(<Grid styles={styleSheet.foo} />);
    const { className } = wrapper.props();
    expect(className).toContain(css(styleSheet.foo));
    expect(className).toContain(css(style.container));
  });

  it('Should have children', () => {
    const wrapper = shallow(
      <Grid className="foo">
        <p />
      </Grid>,
    );
    const { className } = wrapper.props();
    expect(className).toContain('foo');
    expect(className).toContain(css(style.container));
  });

  it('Should add modificators', () => {
    const tree = renderer.create(
      <Grid />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should support custom tag name', () => {
    const wrapper = shallow(<Grid tagName="ul" />);
    expect(wrapper.type()).toBe('ul');
  });
});
