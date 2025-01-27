import React, { useEffect } from 'react';
import TechStack from'../components/TechStack';
import meFoto from '../assets/Images/Icon & Logo/About_me.jpg';
import aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const linkCertificate = () => {
    window.open('https://drive.google.com/drive/folders/1P01trNAhiXiCC9_UjH_yfE4XWgSa4uxs?usp=sharing')
  }
  useEffect(() => {
    aos.init();
  },[])


  return (
    <div className='container mx-auto p-5' id='about' data-aos="fade-up" data-aos-duration="3000">
      <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
        <div className='relative' >
          <h1 className='text-3xl font-semibold text-white  mb-10 ml-20'>About Me</h1>
          <img src={meFoto} className='rounded-full w-80 mr-4' /> {/* Add margin-right here */}
          <div>
            <button 
            className='absolute text-black font-semibold bg-white rounded-lg py-2 px-4 bottom-0 right-0 shadow-md shadow-white' 
            onClick={() => linkCertificate()}>view certificate</button>
            <img src="https://img.icons8.com/3d-fluency/certificate.png" alt="certificate" className='absolute bottom-6 right-0 w-8 rotate-12'/>
          </div>
        </div>
        
        <div className='w-full md:w-1/2 lg:w-1/2 space-y-5'>
          <p className='text-white w-full text-justify font-semibold'>
          With a vocational school background, I understand the importance of hands-on skills across various industries. I emphasize practical application in tasks, including front-end development, but I also bring adaptability to other fields.
          I'm constantly learning and staying informed about tools and strategies that enhance productivity and efficiency. Currently, I'm pursuing a bachelor's degree in Information Systems at Universitas Terbuka to broaden my expertise, with the flexibility to apply my skills in a range of professional environments beyond IT.
          </p>
          <TechStack />
        </div>

      </div>

      
    </div>

  );
}

export default About;
