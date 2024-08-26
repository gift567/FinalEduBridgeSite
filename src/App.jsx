import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Social from './Components/Social/Social';
import Products from './Components/Products/Products';
import Workstation from './Components/Workstation/Workstation'
import Footer from '../src/Footer';
import Contact from './Components/Contact/Contact';
import StudyAbroadCarousel from './Components/study-abroad/ui/StudyAbroadCarousel'




const App = () => {
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
        <Footer />
    </div>
  )
}

export default App
