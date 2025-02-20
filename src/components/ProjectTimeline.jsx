import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <>
    <div key={project.id} className='relative hover:-translate-y- shadow-sm cursor-pointer transition-all duration-300 ease-in-out'>
      <div className="relative group flex flex-col rounded-lg h-[400px] oveflow-hidden ">
        <div className="space-y-5">
          <h4 className="text-2xl w-3/4 font-bold text-[#025a4e]">{project.name}</h4>
          <p className="text-[#5a6d68] font-medium">{project.description}</p>
        </div>
        {/* Pastikan gambar tetap dalam batas kartu */}
        <img
          src={project.img}
          alt={project.name}
          className="absolute left-0 bottom-0 w-full h-56 object-cover object-top rounded-t-lg shadow-sm group-hover:opacity-0 transition duration-100 ease-in"
        />
        {/* Group Hover */}
        <div className='absolute w-full left-1/2 -translate-x-1/2 bottom-10 opacity-0 group-hover:opacity-100 space-y-5'>
            <span className='text-lg font-bold text-[#025a4e]'>Tech Stack</span>
            <div className='flex justify-between items-center'>
              <div className='flex flex-wrap items-center gap-3'>
                {project.techStack.map((tech) => (
                  <div key={tech.id} className='flex items-center gap-2 px-2 py-2 bg-white/40 rounded-lg  '>
                    <img src={tech.img} alt={tech.name} className='w-5'/>
                    <span className='font-medium text-[#5a6d68]'>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>

      <div className='absolute top-0 right-5  flex items-center space-x-4'>
        <div className='relative group'>
          <a href={project.githubUrl} target='_blank'>
            <FaGithub className='text-xl text-black/50'/>
          </a>
           <span class="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-gray-800 p-2 whitespace-nowrap text-xs text-white group-hover:scale-100">Github Link</span>
        </div>
        <div className='relative group'>
          <a href={project.liveUrl} target='_blank'>
            <FaLink className='text-xl text-black/50'/>
          </a>
            <span class="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-gray-800 p-2 whitespace-nowrap text-xs text-white group-hover:scale-100">Preview Url</span>
          </div>
      </div>
    </div>
    </>
  );
}

export default ProjectCard;
