import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'

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
            <video width="400" controls>
            <source src="https://user-images.githubusercontent.com/10932134/214014725-dcf6141c-c8a1-4856-bec1-839f3fb74209.mp4" type="video/mp4"/>
            </video>
            <video width="400" controls>
            <source src="https://user-images.githubusercontent.com/10932134/215314567-6828be41-a0d2-4fa8-86b3-ee777101f257.mp4" type="video/mp4"/>
            </video>
            <video width="400" controls>
            <source src="https://user-images.githubusercontent.com/10932134/190346566-fa04a640-2048-4e63-873f-fbe1a2cb4c7c.mp4" type="video/mp4"/>
            </video>
            <video width="400" controls>
            <source src="https://user-images.githubusercontent.com/10932134/189576974-c8dbdf79-d296-4ea3-b921-a450bf112134.mp4" type="video/mp4"/>
            </video>
            <video width="400" controls>
            <source src="https://user-images.githubusercontent.com/10932134/189558848-b3160aad-03ee-4efd-9319-a78c784d561e.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
