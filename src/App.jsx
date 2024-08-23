import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Social from './Components/Social/Social';
import Products from './Components/Products/Products';
import Workstation from './Components/Workstation/Workstation'
import Contact from './Components/Contact/Contact';
import Language from "./Components/Social/Social.jsx";
import Footer from "./Footer.jsx";
import StudyAbroad from "./Components/study-abroad/StudyAbroad.jsx";
import {StudyAbroadCarousel} from "./Components/study-abroad/ui/StudyAbroadCarousel.jsx";



const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Products/>
        <Social/>
        <Workstation/>
        <StudyAbroadCarousel />
        <Contact/>
        <Language/>
        <Footer />
    </div>
  )
}

export default App
