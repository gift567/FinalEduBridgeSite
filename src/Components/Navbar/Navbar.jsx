import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>

<img src={logo} alt="" className='logo'/>
<ul>
    <li>HOME</li>
    <li>ABOUT US</li>
    <li>SERVICES</li>
    <li>STUDY ABROAD</li>
    <li>EVENTS</li>
    <li>SOCIAL ENTERPRISE</li>
    <li><button className='btn'>CONTACT US</button></li>
</ul>
     </nav>
  )
}

export default Navbar
