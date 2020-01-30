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
    let newsType = this.state.articles[newsString];
    this.setState({chosen: newsType});
  }

  updateNews = (input) => {
    let searchResults = [];
    let allNews = [local, entertainment, technology, science, health]
    allNews.forEach(genre => {
      genre.forEach(article => {
        if(article.headline.includes(input) || article.description.includes(input)) {
          searchResults.push(article)
        }
      })
    })
    this.setState({chosen: searchResults});
  }

  render () {
    return (
      <div className="app">
        <Menu handleChange={this.handleChange} />
        <SearchForm updateNews={this.updateNews}/>  
        <NewsContainer newsType={this.state.chosen} />
      </div>
    );
  }
}

export default App;
