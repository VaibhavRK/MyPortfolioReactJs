import React, {useState,useEffect} from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = ({dark}) => {
  
  let [n,setn] = useState(0);

  useEffect(()=>{
      if(n > 0){
        //  document.querySelector('.experience_frontend').classList.add('exp-cont-theme');
      }
      setn(++n);
  },[dark]);

  return (
    <section id='experience'>
      <h5 style={!dark ? {color:'#2c2c6c'}:{}}>What Skills I Have</h5>
      <h2 style={!dark ? {color:'#1f1f38',fontWeight:700}:{}}>My Experience</h2>

        <div className={dark ? "container experience_container":"container experience_container experience-container-theme"}>

          <div className={dark ? '': 'experience_frontend'}>
            <h3 style={!dark ? {color:'white'}:{}} >Frontend Developement</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>SASS</h4>
                <small className='text-light'>basic</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          
          <div className={dark ? 'experience_backend':'experience_backend experience-theme'}>
          <h3 style={!dark ? {color:'white'}:{}}>Programming Languages & Backend Developement</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>C</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>C++</h4>
                <small className='text-light'>Advance</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>DSA</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsPatchCheckFill className='experience_details-icon' />
                <div>
                <h4>Express Js</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>

        </div>
         
    </section>
  )
}

export default Experience