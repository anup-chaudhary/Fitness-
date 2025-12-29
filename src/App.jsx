import React from 'react';
import Navigation from './Components/Navigation';
import Herosection from "./Components/Herosection";
import Blog from './Components/Blog';
import { Element } from 'react-scroll';
import Story from './Components/Story';
import Programs from './Components/Programs';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Team from './Components/Team';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
      <Navigation />
      <Element name="hero" className='element'>
        <Herosection />
      </Element>
      <Story />
      <Element name='programs' className='element' >
        <Programs />
      </Element>
      <Features />
      <Element name='price' className='element'>
        <Pricing />
      </Element>
      <Team />
      <Testimonial />
      <Element name="blog" className='element'>
        <Blog />
      </Element>
      <Footer />
    </>
  );
};

export default App;
