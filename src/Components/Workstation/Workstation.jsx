import React from 'react'
import desk from '../../assets/desk.png'
import './Workstation.css'
import logo from '../../assets/logo.png'
import right_arrow from '../../assets/right_arrow.png'

const Workstation = () => {
  return (
    <div className='work-section'>
      <div className="desk-img">
      <img src={desk} alt=''/>

      </div>
      
      <div className="left-text">
      <img src={logo} alt=''/>
      
        <h1>Book an Affordable Work Station</h1>
        <p className="text-gray-600 text-center text-md md:text-lg">
          We offer affordable work station with 24/7 power supply and unlimited internet
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad morem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
            commodi.
           </p>
           <button className='workstation-btn'>Book Now <img src={right_arrow} alt='' /> </button>
      </div>
    </div>
  )
}

export default Workstation
