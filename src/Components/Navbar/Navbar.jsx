import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">

<img src={logo} alt="" className='logo'/>
<ul>
    <Link to="/Edubridge-github">
        <li>HOME</li>
    </Link>

    <Link to="/Edubridge-github/About-info">
    <li>ABOUT US</li>
    </Link>
 


    <Link to="/Edubridge-github/services" >
         <li>SERVICES</li>
    </Link>


    <Link to="/Edubridge-github
/study-abroad">
        <li>STUDY ABROAD</li>
    </Link>

    <li>EVENTS</li>

    <Link to="/Edubridge-github/social-enterprise">
    <li>SOCIAL ENTERPRISE</li>
    </Link>

    <li><button className='btn'>CONTACT US</button></li>
</ul>
     </nav>
  )
}

export default Navbar
