import React from 'react';
import './About.css';
import ABOUTME from '../../assets/goku_card.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about-me">
          <img src={ABOUTME} alt="" className='about-me-image' />
        </div>

        <div className="about_content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about_icon' />
              <h5>Work With Developers</h5>
              <small>6+ Developers</small>
            </article>
            <article className='about-card'>
              <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis iure qui labore! Sint corrupti iusto laborum sit ex consequuntur repellat ab praesentium nemo esse maxime qui perferendis id, soluta placeat cumque similique quos laudantium cupiditate? Aut autem explicabo harum aliquam et sunt reiciendis nisi sapiente odio adipisci
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About