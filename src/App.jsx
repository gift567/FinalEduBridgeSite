import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Language from "./Components/Social/Social.jsx";
import Footer from "./Footer.jsx";


const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Language/>
        <Footer />
    </div>
  )
}

export default App
