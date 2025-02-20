import React, { useEffect } from 'react';
import TopContent from './TopContent';
import About from '../components/About';
import TechStack from '../components/TechStack';
import aos from 'aos';
import 'aos/dist/aos.css';


function Home() {
  // Inisialisasi AOS saat komponen dimuat
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <main className="relative container mx-auto space-y-20 ">
      <div>
          <TopContent />
      </div>
      <div>
          <About />
      </div>
      <div>
        <TechStack />
      </div>
    </main>
  );
}

export default Home;
