import React from 'react';
import { useEffect,useState } from 'react';
import CV from '../../assets/CV.pdf';

const CTA = ({dark}) => {
  
  let [n,setn] = useState(0);

  useEffect(()=>{
     if(n > 0){
         document.getElementById('download-cv').classList.toggle('cta-btn-hover');
         document.getElementById('cta-lets-talk').classList.toggle('cta-btn-hover2');
     }
     setn(++n);
  },[dark])

  return (
    <div className='cta'>
        <a href={CV} target='_blank' className='btn' id='download-cv'>Download CV</a>
        <a href="#contact" className='btn btn-primary' id='cta-lets-talk'>Let's Talk</a>
    </div>
  )
}

export default CTA;