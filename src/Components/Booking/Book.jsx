

import React from 'react'
import './Book.css'
import logo from '../../assets/logo.png'
import right_arrow from '../../assets/right_arrow.png'


const Book = () => {
  return (
<div className="Book-layer">
<div className='Picture'> <img src={logo} alt=''/> </div> 

<div className='book-promo'>

    <h2>Book an Affordable Work Station</h2> 
    <p>
          We offer affordable work station with 24/7 power supply and unlimited internet
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad morem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            asperiores natus ad molestiae aliquid explicabo. Iste eaque quo et
            commodi.
    </p>

</div> 

  <button className='book-btn'>Book Now <img src={right_arrow} alt='' /> </button>
    </div>
  )
}

export default Book
