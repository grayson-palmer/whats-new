import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should present on the dom', () => {
    const wrapper = shallow(<Menu 
      handleChange={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})