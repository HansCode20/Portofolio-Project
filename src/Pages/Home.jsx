import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TopContent from "./TopContent";
import About from "../components/About";
import TechStack from "../components/TechStack";

function Home() {
  // Refs untuk mendeteksi ketika elemen masuk ke dalam viewport
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);

  const isTopInView = useInView(topRef, { once: true, margin: "-150px" });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });

  return (
    <main className="relative container mx-auto space-y-20">
      {/* TopContent - Fade Up */}
      <motion.div
        ref={topRef}
        initial={{ opacity: 0 }}
        animate={isTopInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TopContent />
      </motion.div>

      {/* About - Slide dari kiri */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <About />
      </motion.div>

      {/* TechStack - Zoom In */}
      <motion.div
        ref={techRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isTechInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TechStack />
      </motion.div>
    </main>
  );
}

export default Home;
