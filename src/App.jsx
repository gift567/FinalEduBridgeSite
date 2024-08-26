import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Social from './Components/Social/Social';
import Products from './Components/Products/Products';
import Workstation from './Components/Workstation/Workstation'
import Contact from './Components/Contact/Contact';
import Language from "./Components/Social/Social.jsx";
import Footer from "./Footer.jsx";
import StudyAbroadCarousel from "./Components/study-abroad/ui/StudyAbroadCarousel.jsx";
import {useEffect} from "react";



const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Products/>
        <Social/>
        <Workstation/>
        <StudyAbroadCarousel/>
        <Contact/>
        <Language/>
        <Footer />
    </div>
  )
}

export default App
