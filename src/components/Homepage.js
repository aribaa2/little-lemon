import Header from './Header'
import Hero from './Hero';
import Weekly from './Weekly';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

import React from 'react'

export const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Weekly />
      <Testimonials />
      <About />
      <Footer />
    </>
  )
}
export default Homepage;
