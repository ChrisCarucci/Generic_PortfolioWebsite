import React from 'react'
import './ServiceBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ServiceBox(props) {
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
            <div className="heading">{props.heading}</div>
            <img src="https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=Django&logoColor=white" alt ="skill"/>
            <img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" alt ="skill"/>
            <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"alt ="skill"/>
            <img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" alt ="skill"/>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt ="skill"/>
            <img src="https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=for-the-badge&logo=GNU-Bash&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/Sequelize-52B0E7.svg?style=for-the-badge&logo=Sequelize&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/SQLite-003B57.svg?style=for-the-badge&logo=SQLite&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/MongoDB-000000.svg?style=for-the-badge&logo=MongoDb&logoColor=darkgreen"alt ="skill"/>
            <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/VMware-607078.svg?style=for-the-badge&logo=VMware&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/Heroku-430098.svg?style=for-the-badge&logo=Heroku&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/Linux-FCC624.svg?style=for-the-badge&logo=Linux&logoColor=black"alt ="skill"/>
            <img src="https://img.shields.io/badge/Windows%2011-0078D4.svg?style=for-the-badge&logo=Windows-11&logoColor=white"alt ="skill"/>
            <img src="https://img.shields.io/badge/Cloudinary-0827F5.svg?style=for-the-badge"alt ="skill"/>
            <img src="https://camo.githubusercontent.com/c5135c484e53a6aaad4e096fdf0c7ffde40fb6cc1530ea4cd16878de5b5adae0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6174657269616c25323055692d3030374646463f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7569266c6f676f436f6c6f723d7768697465"alt ="skill"/>
            <p className='text'>{props.text}</p>
          </div>
        </div>    
    </div>
    </>
  )
}

export default ServiceBox
