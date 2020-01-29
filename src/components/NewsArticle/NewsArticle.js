import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <section className='newsCard'>
      <section className='imgContainer'>
        <img src={props.img} alt={props.headline}/>
      </section>
      <h1 className='newsHeadline'>{props.headline}</h1>
      <p className='newsDescription'>{props.body}</p>
      <footer className='footerInfo'>
        <a className='urlLink' href={props.link}>Link To Article</a>
      </footer>
    </section>
  )
}

export default NewsArticle;