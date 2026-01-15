import React from 'react'
import Hero from './Hero'
import Products from './Products';
import AboutUs from './AboutUs';
import Solutions from './Solutions';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import Service from './Service';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Service/>
        <Products/>
        <Contact/>
        <AboutUs/>
        <Solutions/>
        <Clients/>
        
        <Footer/>
    </div>
  )
}

export default Home;