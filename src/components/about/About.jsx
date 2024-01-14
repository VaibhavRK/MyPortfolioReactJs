import React, {useState,useEffect} from 'react';
import './About.css';
import ABOUTME from '../../assets/vaibhav_card.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = ({dark}) => { 
  let [n,setn] = useState(0);

  useEffect(()=>{
      if(n > 0){
         document.getElementById('about-heading-theme').classList.toggle('about-me-theme');
         document.getElementById('about-card-1').classList.toggle('card-about-theme-change');
         document.getElementById('about-card-2').classList.toggle('card-about-theme-change');
         document.getElementById('about-card-3').classList.toggle('card-about-theme-change');
         document.getElementById('contact-lets-talk').classList.toggle('contact-lets-talk-theme');
      }
      setn(++n);
  },[dark]);

  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2 id='about-heading-theme' >About Me</h2>

      <div className="container about_container">
        <div className="about-me">
          <img src={ABOUTME} alt="" className='about-me-image' />
        </div>

        <div className="about_content">
          <div className="about-cards">
            <article className='about-card' id='about-card-1'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
            <article className='about-card' id='about-card-2'>
              <FiUsers className='about_icon' />
              <h5>Work With Developers</h5>
              <small>6+ Developers</small>
            </article>
            <article className='about-card' id='about-card-3'>
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p style={!dark ? {color:'#2c2c6c'}:{} } >
            I am a passionate BTech student at IIT BHU, dedicated to crafting innovative solutions through code. Proficient in both JavaScript and C++, my journey in project development spans six months, where I've honed skills in both frontend and backend realms. While I possess competence in creating engaging frontend interfaces, my heart lies in backend development, where I find my true passion.
          </p>

          <a href="#contact" className='btn btn-primary' id='contact-lets-talk'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About