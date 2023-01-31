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
            <div className="heading">Misc</div>
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
