import React from 'react';
import './NewsArticle.css';
import arrow from '../../arrow.png';

const NewsArticle = (props) => {
  return (
    <section className='news-card'>
      <section className='img-container'>
        <img src={props.img} alt={props.headline}/>
      </section>
      <h1 className='news-headline'>{props.headline}</h1>
      <p className='news-description'>{props.body}</p>
      <footer className='footer-info'>
        <a className='url-link' href={props.link}>Link To Article<img className='arrow-img' src={arrow} alt='arrow icon'/></a>
      </footer>
    </section>
  )
}

export default NewsArticle;