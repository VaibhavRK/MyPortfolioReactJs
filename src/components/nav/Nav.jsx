import React from 'react';
import './Nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMessage} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';

import { useState } from 'react';

const Nav = () => {
  const [active,setActive] = useState('#');
  
  return (
    <nav>
      <a href="#" onClick={()=>setActive('#')} className={active === '#' ? 'nav-active' : ""} > <AiOutlineHome /> </a>
      <a href="#about" onClick={()=>setActive('#about')} className={active === '#about' ? 'nav-active' : ""}> <AiOutlineUser /> </a>
      <a href="#experience" onClick={()=>setActive('#exp')} className={active === '#exp' ? 'nav-active' : ""}> <BiBook /> </a>
      <a href="#projects" onClick={()=>setActive('#projects')} className={active === '#projects' ? 'nav-active' : ""}> <AiOutlineProject /> </a>
      <a href="#contact" onClick={()=>setActive('#contact')} className={active === '#contact' ? 'nav-active' : ""}> <AiOutlineMessage /> </a>
    </nav>
  )
}

export default Nav