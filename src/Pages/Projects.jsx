import React, { useEffect } from 'react';
import ProjectTimeline from '../components/ProjectTimeline';
import DataProjects from '../assets/json/dataProjects.json';
import aos from 'aos';
import 'aos/dist/aos.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Projects() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <article className="mt-40">
      <div className="space-y-10 mb-20">
        <h1 className="text-5xl md:text-[9rem] text-center font-bold text-[#025a4e]">
          Projects
        </h1>
        <h4 className="container mx-auto text-center w-96 text-[#025a4e]">
          Here are some collections of projects I have created from personal projects and bootcamp projects.
        </h4>
      </div>

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
    </article>
  );
}

export default Projects;
