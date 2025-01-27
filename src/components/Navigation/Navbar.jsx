import React, { useState } from 'react';
import { Link } from "react-scroll";
import { LuDownload } from "react-icons/lu";
import CV from '../../assets/Images/Sertifikat/Resume.pdf';
import "../../style/Navbar.css";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
     const link = document.createElement('a');
        link.href = CV;
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

  return (
    <div className='bg-black/80 text-white fixed p-5 top-0 w-full z-50'>
      <div className='container flex grid-cols-3  mx-auto justify-between items-center font-semibold'>
        <div className='text-2xl font-bold '>
          MIF.
        </div>
        <div className='hidden md:flex space-x-12'>
          <Link to="home" spy={true} smooth={true} duration={500} offset={-300} onClick={closeMenu} className='nav-link font-bold' activeClass='active'>Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500} offset={-300} onClick={closeMenu} className='nav-link font-bold' activeClass='active'>About</Link>
          <Link to="projects" spy={true} smooth={true} duration={500} offset={-300} onClick={closeMenu} className='nav-link font-bold' activeClass='active'>Projects</Link>
        </div>
        <button className='hidden md:flex items-center space-x-2' onClick={downloadResume}>
          <h1 className='font-bold'>Resume</h1>
          <LuDownload className='text-lg'/>
        </button>

        <div className='flex md:hidden'>
          <button onClick={toggleMenu}>
            <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              {isMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black text-white z-10 transition-transform transform ${isMenuOpen ? '' : '-translate-x-full'}`}>
          <div className='flex flex-col items-center justify-center h-full gap-4 text-3xl'>
            <button onClick={closeMenu} className="absolute top-0 right-0 m-4 text-white">
              <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <Link to="home" spy={true} smooth={true} duration={500} onClick={closeMenu} className='nav-link' >Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} className='nav-link'>About</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} onClick={closeMenu} className='nav-link'>Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
  