import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Skill Sets</h1>
      <div className="boxes">
        <ServiceBox animation="fade-up" icon="fas fa-code" heading=""/>

      </div>
    </div>
    </>
  )
}

export default Service
