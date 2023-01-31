import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/TextUtils.png'
import img5 from  '../../images/Portfolio.png'
import img3 from  '../../images/FoodDelivery.png'
import img4 from  '../../images/Gym.png'
import img1 from  '../../images/AlarmClock.png'
import img2 from  '../../images/FileDownloader.png'
import img6 from  '../../images/TexttoSpeech.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <video width="400" controls>
            <source src="https://user-images.githubusercontent.com/10932134/212802919-8e1cde77-0355-4749-a2da-a173814618a0.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
