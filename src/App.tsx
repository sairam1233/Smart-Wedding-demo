import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Story from './components/Story';
import Events from './components/Events';
import Couple from './components/Couple';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Couple />
      <Story />
      <Events />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;