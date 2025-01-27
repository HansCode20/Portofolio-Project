import React from 'react';
import Foto from '../assets/Images/Icon & Logo/Foto Profile.png';


const TopContent = () => {
  const openAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  


  return (
    <div
      className="relative flex flex-col md:flex-row justify-evenly items-center text-white w-full bg-black p-8"
      id="home"
    >
      {/* Bagian Kiri */}
      <div className="w-full lg:w-1/3 space-y-5 mb-5">
        <h1 
          className="relative text-xl md:text-7xl font-bold leading-tight"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <span
            className="absolute top-[-20px] md:top-[-30px] left-[-20px] text-yellow-500 italic rotate-[-10deg] font-[cursive] mr-2 text-3xl md:text-5xl"
          >
            I'm
          </span>
          <span className="block text-3xl md:text-5xl">MOKHAMAD</span>
          <span className="block text-3xl md:text-5xl">ILHAM FANANI</span>
        </h1>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="text-left font-medium"
        >
          "I am ready to help and serve you wholeheartedly if you need my help.
          As a front-end developer, I am committed to delivering innovative
          solutions and superior user experiences through responsive and
          attractive design."
        </p>

        <div className="flex space-x-5" data-aos="zoom-in" data-aos-duration="3000">
          <a
           href='https://wa.me/6282228525021'
           className="relative bg-white text-black font-bold py-3 px-8 shadow-md shadow-white rounded-lg">
            Hire Me
            <img
              src="https://img.icons8.com/keek/100/bag-front-view.png"
              alt="bag-front-view"
              className="absolute top-[-20px] right-0 w-10 rotate-12"
            />
          </a>

          <button className="relative bg-white text-black font-bold py-3 px-8 shadow-md shadow-white rounded-lg" onClick={() => openAbout()}>
            More About 
            <img
              src="https://img.icons8.com/3d-fluency/94/mic.png"
              alt="bag-front-view"
              className="absolute bottom-[-20px] right-0 w-10 rotate-12"
            />
          </button>
        </div>
      </div>

      {/* Gambar Profil */}
      <div className="relative flex justify-center mb-8 mt-20 order-1 md:order-2">
        {/* Latar Belakang Elips */}
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#ff7b54] to-[#343aeb] rounded-full blur-2xl opacity-30 z-0"></div>
        {/* Gambar */}
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          src={Foto}
          alt="Profil Picture"
          className="w-96 relative z-10"
        />
      </div>

    </div>
  );
};

export default TopContent;
