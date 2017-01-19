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
        start="xs,sm,md,lg"
        center="xs,sm,md,lg"
        end="xs,sm,md,lg"
        top="xs,sm,md,lg"
        middle="xs,sm,md,lg"
        bottom="xs,sm,md,lg"
        around="xs,sm,md,lg"
        between="xs,sm,md,lg"
        first="xs,sm,md,lg"
        last="xs,sm,md,lg"
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should support custom tag name', () => {
    const wrapper = shallow(<Row tagName="ul" />);
    expect(wrapper.type()).toBe('ul');
  });
});
