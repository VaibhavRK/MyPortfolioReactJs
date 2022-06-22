import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import {BsSunFill,BsMoonStarsFill} from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [dark,setDark] = useState(true);
  let [n,setn] = useState(0);

  const handleTheme = () =>{
    setDark(!dark);
  }

  useEffect(()=>{
    
    if(n > 0){
      document.body.classList.toggle('body-light');
    }
    setn(++n);
    
  },[dark])

  return (
    <div className="App">
       <BsSunFill className={dark ? 'light-theme':'hide-theme'} size={40} style={{cursor:'pointer'}}  onClick={handleTheme}  />
       <BsMoonStarsFill className={!dark ? 'dark-theme':'hide-theme'} size={40} style={{cursor:'pointer'}}  onClick={handleTheme} />
       <Header dark={dark} />
       <Nav />
       <About dark={dark} />
       <Experience dark={dark} />
       <Projects dark={dark} />
       <Contact dark={dark} />
       <Footer dark={dark} />
    </div>
  );
}

export default App;
