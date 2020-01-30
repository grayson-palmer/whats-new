import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set the state using the handleChange method to a different article type', () => {
    const wrapper = shallow(<App />);
    const mockPlaceholder = [{}];
    const mockState = {articles: {
      mockData: [{
        id: 5,
        headline: 'Its Thanos Time!',
        img: 'imgPath',
        description: 'Lets get purple',
        url: 'urlPath'
      }]
    },
    chosen: mockPlaceholder
  }
  wrapper.setState(mockState);

  wrapper.instance().handleChange('mockData');
  expect(wrapper.state('chosen')).toEqual(mockState.articles['mockData']);
  })
  
})
