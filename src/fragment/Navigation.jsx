import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Navigation/Footer';

function Navigation({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}

export default Navigation;
    