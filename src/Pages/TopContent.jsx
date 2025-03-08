import React from 'react';
import Foto from '../assets/Images/icons/Profile.png';
import { AnimatePresence, motion } from 'framer-motion';


const TopContent = () => {
  
  return (
    <section className="relative p-8 mt-20">
    {/* Nama */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center mt-20"
    >
      <h1 className="text-5xl md:text-[10rem] font-bold text-[#025a4e]">
        I'm Ilhám.
      </h1>
    </motion.div>

    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="flex flex-col md:flex-col lg:flex-row justify-center gap-20 mt-20"
      >
        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full md:w-full lg:w-1/2 space-y-8 order-2 md:order-2 lg:order-1"
        >
          <h2 className="text-5xl text-left font-bold text-[#025a4e]">
            I'm a Frontend Developer based in Nganjuk, Indonesia.
          </h2>
          <p className="font-semibold text-left text-xl text-[#5a6d68] leading-7">
            I am ready to help and serve you wholeheartedly if you need my help. As a front-end
            developer, I am committed to delivering innovative solutions and superior user
            experiences through responsive and attractive design.
          </p>
          <p className="font-semibold text-left text-xl text-[#5a6d68] leading-7">
            I strive to create seamless, user-friendly interfaces that enhance engagement and
            functionality, ensuring every project meets the highest standards of quality and
            performance.
          </p>
        </motion.div>

        {/* Gambar */}
        <motion.img
          src={Foto}
          alt="Foto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-96 h-auto object-contain mx-auto md:auto lg:mx-0 order-1 md:order-1 lg:order-2"
        />
      </motion.div>
    </AnimatePresence>
  </section>
  );
};

export default TopContent;
