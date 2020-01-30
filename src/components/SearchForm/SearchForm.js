import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {} 
  }

  render() {
    return (
      <form>
        <input className='search-input' type='text' placeholder='Search for news article here.' />
        <button className='search-button' type='button'>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;