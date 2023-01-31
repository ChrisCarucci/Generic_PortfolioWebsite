import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'
import ServiceBox2 from '../../components/ServiceBox2/ServiceBox'
import ServiceBox3 from '../../components/ServiceBox3/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Technology Stack</h1>
      <div className="boxes">
        <ServiceBox animation="fade-up" icon="fas fa-code" heading=""/>
        <ServiceBox2 animation="fade-up" icon="fas fa-code" heading=""/>
        <ServiceBox3 animation="fade-up" icon="fas fa-code" heading=""/>
      </div>
    </div>
    </>
  )
}

export default Service
