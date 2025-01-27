import React from 'react';

function ProjectCard({ project, isOpen }) {
  return (
    <div key={project.id} className="relative shadow-2xl rounded-xl overflow-hidden group">
      <img
        data-aos="fade-up"
        data-aos-duration="2000"
        className="group-hover:blur-[3px] w-full object-cover transition-all duration-300 ease-out"
        src={project.img}
        alt={project.name}
      />
      <div className="absolute inset-0  flex flex-col justify-end p-6 gap-2 group-hover:bg-opacity-80 group-hover:bg-black transition-all duration-300 ease-out">
        <h1 className="text-3xl font-bold text-white text-center lg:text-left opacity-0 group-hover:opacity-100 transition-opacity">
          {project.name}
        </h1>
        <button
          className="text-white w-full lg:w-1/3 opacity-0 group-hover:opacity-100 transition-opacity border-2 rounded-lg border-white p-2 hover:bg-gray-200 hover:text-black"
          onClick={() => isOpen(project)}
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
