import React from 'react';
import './Footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai';

const Footer = () => {
  return (
     <div className="container footer-container">
       <h1>Vaibhav Gupta</h1>

       <ul className="all-pages">
         <li> <a href="#">Home</a> </li>
         <li> <a href="#about">About</a> </li>
         <li> <a href="#experience">Experience</a> </li>
         <li> <a href="#projects">Projects</a> </li>
         <li> <a href="#contact">Contact</a> </li>
       </ul>

       <div className="footer-social-icons">
         <a href="https://www.facebook.com/profile.php?id=100065791463692" target='_blank' rel='noreferrer'> <FaFacebookSquare size={40} /> </a>
         <a href="https://www.instagram.com/vaibhav_2521/" target='_blank' rel='noreferrer'> <AiFillInstagram size={40} /> </a>
         <a href="https://twitter.com/home" target='_blank' rel='noreferrer'> <AiFillTwitterSquare size={40} /> </a>
       </div>

       <small> &copy; All right Reserved </small>
     </div>
  )
}

export default Footer