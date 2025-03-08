import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectTimeline from '../components/ProjectTimeline';
import DataProjects from '../assets/json/dataProjects.json';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from 'framer-motion';

function Projects() {
  const titleRef = useRef(null);
  const projectRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isProjectInView = useInView(projectRef, { once: true, margin: "-200px" });

  return (
    <>
    <AnimatePresence/>
      <article className="mt-40">
          <motion.div 
            ref={titleRef}
            initial={{ opacity : 0 }}
            animate={ isTitleInView ? { opacity : 1 } : {}}
            transition={{ duration : 2 , ease : 'easeInOut'}}
            className="space-y-10 mb-20">
            <h1 className="text-5xl md:text-[9rem] text-center font-bold text-[#025a4e]">
              Projects
            </h1>
            <h4 className="container mx-auto text-center w-96 text-[#025a4e]">
              Here are some collections of projects I have created from personal projects and bootcamp projects.
            </h4>
          </motion.div>
  
         <motion.div
            ref={projectRef}
            initial={{ opacity : 0 }}
            animate={ isProjectInView ? { opacity : 1 } : {}}
            transition={{ duration : 3 , delay : 0.5,  ease : 'easeInOut'}}
         >
          {/* Grid Proyek */}
          <VerticalTimeline>
            {DataProjects.map((project, index) => (
              <VerticalTimelineElement
                key={index}
                position={index % 2 === 0 ? 'left' : 'right'} // Bergantian antara kiri dan kanan
                date={project.date}
                icon={<img src={project.icons} className='w-20'/>}
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                }}            
                contentArrowStyle={{ borderRight: '20px solid rgba(255, 255, 255, 0.3)' }}
                iconStyle={{background: 'rgba(255, 255, 255, 0.5)', color: '#fff', backdropFilter: 'blur(10px)'} }
              >
                <ProjectTimeline project={project} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
         </motion.div>

      </article>
    <AnimatePresence/>
    </>
  );
}

export default Projects;
