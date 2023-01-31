import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import Me from '../../../src/images/Me.jpg'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={Me} className="me-img" alt="Personl Picture" />
        </div>
        <div  className="right-content">
        <h2>I'm Chris</h2>
        <p>Hi, my name is Christopher Carucci, I am a full-stack web developer with 1+ years of experience with modern technologies - React.js, Node.js, Express.JS, MongoDB, SQLite, PostgreSql, Heroku, Cloudinary and more.. </p>
        <a href="https://www.linkedin.com/in/christopher-carucci-7a6543264/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
