import React from 'react'
import './ServiceBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ServiceBox2(props) {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div data-aos = {props.animation}>
       <div className="card">
          <div class="box">
            <div className="icon"><i class={props.icon}></i></div>
            <div className="heading">Frontend</div>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt ="skill"/>
            <img src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=for-the-badge&logo=GNU-Bash&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/Sequelize-52B0E7.svg?style=for-the-badge&logo=Sequelize&logoColor=white"alt ="skill"/>
            
          </div>
        </div>    
    </div>
    </>
  )
}

export default ServiceBox2
