import React from 'react';
import './Projects.css';

import Blog_img from '../../assets/blog-img.jpeg';
import Weather_img from '../../assets/weatherApp.jpg';
import WhatsApp_Clone_img from '../../assets/whatsapp_clone.png';
import Todo_img from '../../assets/todolist.png';
import Back_Api_img from '../../assets/back_api.png';

import 'swiper/css/bundle';
import 'swiper/css/navigation';


const project_data = [
  {
    id: 1,
    Blog_Img: Blog_img,
    Project_title: "Blog Web Application (MERN)",
    github: "https://dashboard.heroku.com/apps/mernblogweb",
    liveUrl: "https://dashboard.heroku.com/apps/mernblogweb"
  },
  {
    id: 2,
    Blog_Img: Weather_img,
    Project_title: "Weather App (React)",
    github: "https://github.com/VaibhavRK/ReactWeatherApp",
    liveUrl: "https://vaibhavrk.github.io/ReactWeatherApp/"
  },
  {
    id: 3,
    Blog_Img: WhatsApp_Clone_img,
    Project_title: "WhatsaApp Clone",
    github: "https://github.com/VaibhavRK/WhatsAppClone",
    liveUrl: "https://whatsapp-clone-lime.vercel.app/"
  },
  {
    id: 4,
    Blog_Img: Todo_img,
    Project_title: "Todo List (Simple Project for Learning)",
    github: "https://github.com/VaibhavRK/reactToDoList",
    liveUrl: "https://vaibhavrk.github.io/reactToDoList/"
  },
  {
    id: 5,
    Blog_Img: Back_Api_img,
    Project_title: "Converting Excel file data into API and save to the database",
    github: "https://github.com/VaibhavRK/petBackend",
    liveUrl: "https://pet-app-fastjob.herokuapp.com/api"
  }
]

const Projects = ({dark}) => {
  return (
    <section id='projects'>
      <h5 style={!dark ? {color:'#2c2c6c'}:{}}>My Recent Work</h5>
      <h1 style={!dark ? {color:'#1f1f38'}:{}}>Projects</h1>

      <div className="container project_container">

       {
         project_data.map((ele)=>{
           return (
              <article className={dark ? 'project_item' : 'project_item project-item-theme'}>
                <div className="project_item-image">
                  <img src={ele.Blog_Img} alt="blog-img" />
                </div>
                <h3 className='text-light'>{ele.Project_title}</h3>
                <div className="project_item-cta">
                  <a href={ele.github} target='_blank' className='btn' >Github</a>
                  <a href={ele.liveUrl} target='_blank' className='btn btn-primary' > Live Demo </a>
                </div>
              </article>
           )
         })
       }

      </div>
    </section>
  )
}

export default Projects