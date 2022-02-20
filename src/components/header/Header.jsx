import React from 'react';
import CTA from './CTA';
import './Header.css';
import ME from '../../assets/goku.png';
import SocialIcons from './SocialIcons';

const Header = () => {
  return (
    <header>
    <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Vaibhav Gupta</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA className='cta' />

        <div className="me">
          <img src={ME} alt="my image" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <SocialIcons />
    </div>
    </header>
  )
}

export default Header