import React from 'react'
import Navbar from '../Navbar/Navbar';
import Booking from '../Booking/Book';
import './AboutInfo.css'
import hero from '../../assets/hero.jpg'
import Footer from '../../Footer';
import Subscribe from '../Subscribe/Subscribe';

const AboutInfo = () => {
  return (

    
    <div>

<Navbar/>
        <div className='about-con'>

        <h1>About Us</h1>
    <p>
      Welcome to our website! We are a small team dedicated to delivering high-quality products and services. Our mission is to provide exceptional value to our customers through innovation and excellence.
    </p>
    <p>
      Our team is comprised of experienced professionals who are passionate about their work. We believe in the power of collaboration and are committed to continuous improvement.
    </p>
    <p>
      Thank you for visiting our site. We hope you find what you're looking for and look forward to serving you.
    </p>
        </div>


        <div className="box-con">
   <img src={hero}/>
        <div className="box-con-txt">
            <h1>Responsive Container</h1>
            <p>This Lorem ipsum dolor sit, amet consectetur #lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut quaerat assumenda perferendis a dolore natus
                asperiores quas, necessitatibus culpa, nulla soluta nisi! Unde placeat quia reprehenderit labore pariatur atque?
                adipisicing elit. Null Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, hic explicabo ea iusto nulla 
                itaque aliquid ipsa architecto consectetur nobis repellat nemo. A ut nostrum aliquam, perferendis quasi vel? Tempora.
                a ad accusamus sapiente non molestiae rerum. Libero, beatae architecto mollitia enim provident voluptates cum.
     container with Lorem ipslum, dolor sit amet consectetur adipisicing elit. Dolorem nostrum quam vel at voluptates saepe sunt mole
     stiae commodi, quo iste esse similique aut quisquam e
     xcepturi incidunt. Ab possimus distinctio quidem!an image and text. The layout adjusts
                  to fit landscape orient
                  ations and various screen sizes.</p>
        </div>
    </div>

    <div class="slider">
        <div class="card">
        <img src={hero}/>
            <div class="card-content">
                <h2>Card 1</h2>
                <p>This is the first card.</p>
            </div>
        </div>
        <div class="card">
        <img src={hero}/>
            <div class="card-content">
                <h2>Card 2</h2>
                <p>This is the second card.</p>
            </div>
        </div>
        <div class="card">
        <img src={hero}/>
            <div class="card-content">
                <h2>Card 3</h2>
                <p>This is the third card.</p>
            </div>
        </div>
    </div>

    <Booking/>
    <Subscribe/>

    <Footer/>
    
  </div>
  )
}


export default AboutInfo
