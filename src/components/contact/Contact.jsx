import React from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {RiWhatsappFill} from 'react-icons/ri';

import { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import { useState } from 'react';


const Contact = ({dark}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y5ztjhh', 'template_1e068fr', form.current, 'user_yuM5wVARQK6MVI3au39iz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
       <h5 style={!dark ? {color:'#2c2c6c'}:{}}>Get in Touch</h5>
       <h2 style={!dark ? {color:'#1f1f38',fontWeight:700}:{}}>Contact Me</h2>

       <div className="container contact_container">
          <div className="all-contact-routes">
             <div className={dark ? "contact-card":"contact-card contact-card-theme"}>
                <HiOutlineMail size={20} className='contact-card-icons' />
                <h3>Email</h3>
                <h4>vaibhavgarg541@gmail.com</h4>
                <a href='mailto:vaibhavgarg541@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
             </div>
             <div className={dark ? "contact-card":"contact-card contact-card-theme"}>
                <FaFacebookMessenger size={20} className='contact-card-icons' />
                <h3>Messenger</h3>
                <h4>Vaibhav Gupta</h4>
                <a href='https://www.facebook.com/profile.php?id=100065791463692' target='_blank' rel='noreferrer'>Send a message</a>
             </div>
             <div className={dark ? "contact-card":"contact-card contact-card-theme"}>
                <RiWhatsappFill size={20} className='contact-card-icons' />
                <h3>WhatsApp</h3>
                <h4>+91 8860650528</h4>
                <a href='https://api.whatsapp.com/send?phone=8860650528' target='_blank' rel='noreferrer'>Send a message</a>
             </div>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={(e)=>{sendEmail(e)}} >
              <input type="text" name='name' placeholder='Your Full Name'  autoComplete='off' required />
              <input type="email" name='email' placeholder='Your Email' autoComplete='off' autoCorrect='off' required />
              <textarea name="message" id="" placeholder='Your Message'  autoComplete='off' required></textarea>
              <button type='submit' className='contact-send-btn'>Send Message</button>
            </form>
          </div>
       </div>
    </section>
  )
}

export default Contact;