import React from 'react';
import techStack from '../assets/json/techStack.json';

const TechStack = () => {

  return (
    <article className='container mx-auto w-full mt-40'>
        <h1 className='text-5xl text-center font-bold text-[#025a4e]'>Tech Stack</h1>
        <div className='grid grid-cols-1 gap-4 mt-10 p-5 md:p-0 lg:p-0'>
          {techStack.map((techLogos) => (
            <div key={techLogos.id} className='container mx-auto flex justify-between items-center w-full md:w-3/4 lg:w-1/2 gap-2 bg-white/20  p-7 rounded hover:scale-105 hover:bg-white  transition-all duration-300 ease-in-out'>
                <div>
                  <span className='font-medium text-[#025a4e]'>{techLogos.name}</span>
                  <p className='text-sm text-[#5a6d68]'>{techLogos.description}</p>
                </div>
                <div className='bg-white/40 rounded-full p-3'>
                  <img src={techLogos.img} alt={techLogos.name} className='w-10'/>
                </div>
            </div>
          ))}
        </div>
    </article>
  );
};

export default TechStack;
