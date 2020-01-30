import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should update the input state based on the handleChange method', () => {
    const mockUpdate = jest.fn();
    const wrapper = shallow(<SearchForm updateNews={mockUpdate}/>);
    const mockEvent = {
      target: {
        value: 'Spider-Man'
      }
    }
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('input')).toEqual('Spider-Man');
  })
})