import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    } 
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <form>
        <input className='search-input' type='text' placeholder='Search for news article here.' onChange={this.handleChange} />
        <button className='search-button' type='button' onClick={() => this.props.updateNews(this.state.input)}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;