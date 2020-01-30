import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should be an instance of component', () => {
    const wrapper = shallow(<NewsArticle 
      props = {[{
        headline: 'Thanos Back Again', 
        body: 'Purp dude is back', 
        img: 'imgPath',
        link: 'urlPath',
        key: 1
      }]}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})