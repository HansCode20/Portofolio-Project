import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const About = () => {

  return (
    <AnimatePresence>
      <article className='container mx-auto w-10/12 mt-20'>
          <motion.h1 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            className='text-5xl text-left font-bold text-[#025a4e]'>
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} 
            className='flex flex-col justify-center items-center  leading-6 mt-5 space-y-5'>
            <p className='font-semibold text-[#5a6d68] text-lg '>I am a graduate of Vocational High School (SMK) majoring in Computer and Network Engineering, and am currently studying at the Open University majoring in Information Systems.</p>
            <p className='font-semibold text-[#5a6d68] text-lg'> 
              My interest in front-end development began when I was an intern at a vocational school. At that time, the owner of the shop where I was an intern taught me the basics of HTML. From there, I became more interested in the world of coding and started to study independently at home. 
              During my time at vocational school, I only learned HTML and CSS. However, after graduating in 2023, a friend suggested that I study front-end development further.
            </p>
            <p className='font-semibold text-[#5a6d68] text-lg'>
              I tried to apply to colleges through reports and exams, but was unsuccessful. That prompted me to look for other alternatives, including attending a front-end developer bootcamp while working elsewhere. Currently, I continue to improve my IT skills, especially as a front-end developer, 
              to build a better career in the tech industry.
            </p>
          </motion.div>
      </article>
    </AnimatePresence>
  );
}

export default About;
