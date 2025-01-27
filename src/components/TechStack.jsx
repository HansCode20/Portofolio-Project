import React from 'react';
import NextImage from '../assets/Images/Icon & Logo/NextLogo.svg';

const TechStack = () => {
  const Logos = [
    { id: 1, name: "HTML", img: "https://img.icons8.com/color/html-5--v1.png" },
    { id: 2, name: "CSS", img: "https://img.icons8.com/color/css3.png" },
    { id: 3, name: "Javascript", img: "https://img.icons8.com/color/javascript--v1.png" },
    { id: 4, name: "React JS", img: "https://img.icons8.com/color/react-native.png" },
    { id: 5, name: "React Vite", img: "https://img.icons8.com/fluency/vite.png" },
    { id: 6, name: "Next", img: NextImage },
    { id: 7, name: "Redux", img: "https://img.icons8.com/color/redux.png" },
    { id: 8, name: "Tailwind", img: "https://img.icons8.com/color/tailwind_css.png" },
    { id: 9, name: "Bootstrap", img: "https://img.icons8.com/color/bootstrap--v2.png" },
    { id: 10, name: "Node JS", img: "https://img.icons8.com/fluency/node-js.png" },
    { id: 11, name: "Firebase", img: "https://img.icons8.com/color/firebase.png" }
  ];

  return (
    <>
      <h1 className='text-white font-bold border-b w-fit'>Tech Stack</h1>
      <div className='flex flex-wrap gap-4'>
        {Logos.map((techLogos) => (
          <div key={techLogos.id} className='flex items-center gap-2 bg-gray-600 p-2 rounded hover:scale-110 transition duration-300 ease-in-out'>
              <img src={techLogos.img} alt={techLogos.name} className='w-10'/>
              <span className='text-white font-medium'>{techLogos.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
