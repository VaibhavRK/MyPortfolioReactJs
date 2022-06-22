import React from 'react';
import CTA from './CTA';
import './Header.css';
import ME from '../../assets/goku.png';
import SocialIcons from './SocialIcons';
import { useEffect,useState } from 'react';

const Header = ({dark}) => {

  let [n,setn] = useState(0);

  useEffect(()=>{
      if(n > 0){
         document.getElementById('theme-scroll-down').classList.toggle('header-scroll-theme')
         document.getElementsByClassName('header_container')[0].classList.toggle('header-theme')
      }
      setn(++n);
  },[dark]);

  return (
    <header>
    <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Vaibhav Gupta</h1>
        <h5 className="text-light">FullStack MERN Developer</h5>
        <CTA className='cta' dark={dark} />

        <div className="me">
          <img src={ME} alt="my image" />
        </div>

        <a href="#contact" className='scroll_down' id='theme-scroll-down'>Scroll Down</a>
        <SocialIcons />
    </div>
    </header>
  )
}

export default Header