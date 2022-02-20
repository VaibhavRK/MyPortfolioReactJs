import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const SocialIcons = () => {
  return (
    <div className='header_socials'>
       <a href="https://www.linkedin.com/in/vaibhav-gupta-462042215/" rel="noreferrer" target='_blank'> <AiFillLinkedin size={20} color='yellow' className='social-icons' /> </a>
       <a href="https://www.facebook.com/profile.php?id=100065791463692" rel="noreferrer" target='_blank'> <AiFillFacebook size={20} className='social-icons' /> </a>
       <a href="https://www.instagram.com/vaibhav_2521/" rel="noreferrer" target='_blank'> <AiFillInstagram size={20} className='social-icons' /> </a>
    </div>
  )
}

export default SocialIcons;