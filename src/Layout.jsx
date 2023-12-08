import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Layout = ({ children }) => (
  <div className='relative z-0' style={{backgroundColor: "#051040"}}>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
    </div>
    {children}
  </div>
);

export default Layout;
