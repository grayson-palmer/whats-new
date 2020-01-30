import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsArticle', () => {
  it('should be an instance of component', () => {
    const wrapper = shallow(<NewsContainer 
      newsType = {[{
        headline: 'Thanos Back Again', 
        description: 'Purp dude is back', 
        img: 'imgPath',
        url: 'urlPath',
        id: 1
      }]}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})