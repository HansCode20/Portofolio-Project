import React, { useEffect } from 'react';
import Navigation from '../fragment/Navigation';
import TopContent from '../components/TopContent';
import About from './About';
import Projects from './Projects';
import ButtonScroll from '../components/ButtonScroll';
import aos from 'aos';
import 'aos/dist/aos.css';


function Home() {
  // Inisialisasi AOS saat komponen dimuat
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className="relative bg-black">
      <Navigation>

        <div className='py-20'>
          <TopContent />
        </div>

        <div id="about" className='py-20'>
          <About />
        </div>

        <div id="projects" className='py-20'>
          <Projects />
        </div>

        <div className='fixed bottom-5 right-5'>
          <ButtonScroll/>
        </div>


      </Navigation>
    </div>
  );
}

export default Home;
