import React, { useEffect } from 'react';
import Navigation from '../fragment/Navigation';
import TopContent from '../components/TopContent';
import About from './About';
import Projects from './Projects';
import SkillMarqueAnimation from '../components/SkillMarqueAnimation';
import aos from 'aos';
import 'aos/dist/aos.css';


function Home() {
  // Inisialisasi AOS saat komponen dimuat
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className="bg-black">
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

        <div className='py-20'>
          <SkillMarqueAnimation/>
        </div>

      </Navigation>
    </div>
  );
}

export default Home;
