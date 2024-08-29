import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Social from './Components/Social/Social';
import Products from './Components/Products/Products';
import Footer from '../src/Footer';
import Banner from '../src/Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Book from './Components/Booking/Book';
import Subscribe from './Components/Subscribe/Subscribe';

import {useEffect} from 'react';




const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Banner/>
        <Products/>
        <Social/>
        <Book/>
        <Contact/>
        <Subscribe/>
        <Footer />
    </div>
  )
}

export default App
