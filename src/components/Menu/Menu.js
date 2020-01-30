import React, { Component } from 'react';
import './Menu.css';
import localImg from '../../location.png';
import techImg from '../../lightbulb.png';
import entImg from '../../tickets.png';
import sciImg from '../../rocket.png';
import healthImg from '../../health.png';

const Menu = (props) => {
  return (
    <nav>
      <h1>What's <span className='new'>New?</span></h1>
      <ul className='nav-items'>
        <li className='nav-category' onClick={() => props.handleChange('local')}><img src={localImg} alt='local news'></img>Local News</li>
        <li className='nav-category' onClick={() => props.handleChange('technology')}><img src={techImg} alt='technology'></img>Technology</li>
        <li className='nav-category' onClick={() => props.handleChange('entertainment')}><img src={entImg} alt='entertainment'></img>Entertainment</li>
        <li className='nav-category' onClick={() => props.handleChange('science')}><img src={sciImg} alt='science'></img>Science</li>
        <li className='nav-category' onClick={() => props.handleChange('health')}><img src={healthImg} alt='health'></img>Health</li>
      </ul>
    </nav>
  )
}

export default Menu;