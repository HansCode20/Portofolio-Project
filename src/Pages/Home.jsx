import React, { useEffect } from 'react';
import TextMotion from '../fragment/TextMotion';
import Navigation from '../fragment/Navigation';
import Foto from '../assets/Images/Profile.png';
import TextAnimate from '../components/TextAnimate';
import About from './About';
import Projects from './Projects';
import Skill from './Skill';
import Contact from './Contact';
import CV from '../assets/Images/Sertifikat/CV.pdf';
import aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const sentence = "Mokhamad Ilham Fanani".split("");
  const onButtonClick = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  useEffect(() => {
    aos.init();
  },[])


  return (
    <div>
      <Navigation>
        <div className='p-8  text-white bg-black w-full' id='home'>
          <div className='flex justify-center mb-8 mt-20'>
            <img data-aos="zoom-in-up" data-aos-duration="2000" src={Foto} alt="ProfilPicture" width={200} />
          </div>
          <div className='flex justify-center mb-8 w-full lg:w-1/3 mx-auto '>
            <h1 data-aos="zoom-in-up" data-aos-duration="2000" className='text-center text-sm lg:text-4xl font-bold'>Hi I Am
              <br />
              <span className='text-sm lg:text-2xl md:text-3xl'>
                <TextMotion>{sentence[0]}</TextMotion>
                <TextMotion>{sentence[1]}</TextMotion>
                <TextMotion>{sentence[2]}</TextMotion>
                <TextMotion>{sentence[3]}</TextMotion>
                <TextMotion>{sentence[4]}</TextMotion>
                <TextMotion>{sentence[5]}</TextMotion>
                <TextMotion>{sentence[6]}</TextMotion>
                <TextMotion>{sentence[7]}</TextMotion>
                {" "}
                <TextMotion>{sentence[9]}</TextMotion>
                <TextMotion>{sentence[10]}</TextMotion>
                <TextMotion>{sentence[11]}</TextMotion>
                <TextMotion>{sentence[12]}</TextMotion>
                <TextMotion>{sentence[13]}</TextMotion>
                <TextMotion>{sentence[14]}</TextMotion>
                {" "}
                <TextMotion>{sentence[15]}</TextMotion>
                <TextMotion>{sentence[16]}</TextMotion>
                <TextMotion>{sentence[17]}</TextMotion>
                <TextMotion>{sentence[18]}</TextMotion>
                <TextMotion>{sentence[19]}</TextMotion>
                <TextMotion>{sentence[20]}</TextMotion>
                <TextMotion>{sentence[21]}</TextMotion>
                <TextMotion>{sentence[22]}</TextMotion>
              </span>
            </h1>
          </div>

          <div className='flex justify-center w-full lg:w-1/3 mx-auto mb-5'>
            <p data-aos="zoom-in-up" data-aos-duration="2000" className='text-center'>" I am ready to help and serve you wholeheartedly if you need my help. As a front-end developer, I am committed to delivering innovative solutions and superior user experiences through responsive and attractive design."</p>
          </div>
          <div className='flex justify-center'>
            <button onClick={onButtonClick} data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="1000" className='px-4 py-4 mt-8 text-sm font-semibold  bg-black rounded-lg bg-white text-black hover:bg-[#bcf9b9] transition duration-300 hover:ease-in'>Download CV  </button>
          </div>
        </div>
        <TextAnimate />
        <div id='about'>
        <About />
        </div>
        <Skill />
        <div id='projects'>
        <Projects />
        </div>
        <div id='contact'>
        <Contact />
        </div>
      </Navigation>
    </div>
  );
}

export default Home;
