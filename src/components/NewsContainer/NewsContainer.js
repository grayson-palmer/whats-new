import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
  const newsType = props.newsType.map(news => {
    return <NewsArticle 
      key={news.id}
      headline={news.headline}
      body={news.description}
      img={news.img}
      link={news.url}
    />
  })
  return (
    <section className='newsContainer'>
      {newsType}
    </section>
  )
}

export default NewsContainer;