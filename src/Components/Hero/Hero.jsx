import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/right_arrow.png'



const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure you that we are the Best Study center</h1>
        <p>At our online study center, we pride ourselves on delivering personalized, high-quality education tailored to each student's unique needs, ensuring they receive the most effective support possible. Our cutting-edge technology and expert instructors provide an engaging and interactive learning experience, making complex subjects accessible and enjoyable</p>
        <button className='btn'>Learn More <img src={right_arrow} alt='' /> </button>
      </div>
    </div>
  )
}

export default Hero
