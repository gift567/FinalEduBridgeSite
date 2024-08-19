

import React from 'react'
import './About.css'

import right_arrow from '../../assets/right_arrow.png'
import about_pic from '../../assets/about_pic.png'

const About = () => {
  return (
    <div className='about-section'>

        <div className='about-words'>
        <h3>
        About Us
      </h3>

      <h1> That way one stop to your Online <br/> Study Center </h1>

      <p> As an Online Study center ,social enterprise and study abroad agency, our center combines a commitment to educational excellence with a strong dedication to social impact. We offer personalized, high-quality learning experiences tailored to individual needs while supporting global educational opportunities that promote cross-cultural understanding. By reinvesting our profits into community-driven initiatives, we ensure that every student's success also contributes to meaningful, positive change in the world.</p>

      <button className='about_btn'>Learn More <img src={right_arrow} alt='' /> </button>
        </div>
     
     <img src= {about_pic} alt=''/>
    </div>
  )
}

export default About
