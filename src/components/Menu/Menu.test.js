import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('', () => {
    const wrapper = shallow(<Menu 
      handleChange={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})