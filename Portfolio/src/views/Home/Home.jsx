import React from 'react'
import './Home.css'
import Sentience from '../../../src/images/Sentience.jpg'


import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Hello, My name is</p>
          <h1>Chris</h1>
          <h2>And I'm a  <span className="typing"></span></h2>
          <a href="https://drive.google.com/file/d/1J0aPm4_27w7DRy3-lWDdXn2IXy2mxqzC/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={Sentience} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

