import React from 'react';
import techStack from '../assets/json/techStack.json';
import { AnimatePresence, motion } from 'framer-motion';

const TechStack = () => {

  return (
    <AnimatePresence>
      <article className='container mx-auto w-full mt-40'>
          <motion.h1 
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 3 }}
           className='text-5xl text-center font-bold text-[#025a4e]'>
            Tech Stack
          </motion.h1>

            <div className='grid grid-cols-1 gap-4 mt-10 p-5 md:p-0 lg:p-0'>
              {techStack.map((techLogos) => (
                <motion.div 
                key={techLogos.id} 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='container mx-auto flex justify-between items-center w-full md:w-3/4 lg:w-1/2 gap-2 bg-white/20  p-7 rounded hover:scale-105 hover:bg-white  transition-all duration-300 ease-in-out'>
                    <div>
                      <span className='font-medium text-[#025a4e]'>{techLogos.name}</span>
                      <p className='text-sm text-[#5a6d68]'>{techLogos.description}</p>
                    </div>
                    <div className='bg-white/40 rounded-full p-3'>
                      <img src={techLogos.img} alt={techLogos.name} className='w-10'/>
                    </div>
                </motion.div>
              ))}
            </div>
      </article>
    </AnimatePresence>
  );
};

export default TechStack;
