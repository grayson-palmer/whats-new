import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';

class App extends Component {
  constructor() {
    super();
    this.state = { articles: {
        local: local,
        entertainment: entertainment, 
        technology: technology, 
        science: science,
        health: health
      },
      chosen: local
    }
  }

  handleChange = (newsString) => {
    console.log(this.state);
    let newsType = this.state.articles[newsString];
    this.setState({chosen: newsType});
  }

  render () {
    return (
      <div className="app">
        <Menu handleChange={this.handleChange} />
        <SearchForm />  
        <NewsContainer newsType={this.state.chosen} />
      </div>
    );
  }
}

export default App;
