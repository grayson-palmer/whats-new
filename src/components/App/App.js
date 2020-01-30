import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsType: 'local'
    }
  }

  handleChange(newsString) {
    this.state.newsType = newsString
  }

  render () {
    return (
      <div className="app">
        <Menu handleChange={this.handleChange} />
        <SearchForm />  
        <NewsContainer newsType={this.state.newsType} />
      </div>
    );
  }
}

export default App;
