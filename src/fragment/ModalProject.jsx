import React from 'react';
import { FaGithub, FaLink } from "react-icons/fa";

function Modal({ isOpen, project, logos, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed bg-black/70 inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 opacity-50"></div>
      <dialog className="modal modal-bottom sm:modal-middle z-50 rounded-lg w-full max-w-md mx-auto lg:max-w-lg md:max-w-2xl" open>
        <div className="modal-box p-8">
          <h1 className="font-bold text-3xl text-center mb-3">{project.name}</h1>
          <hr className="border-black" />
          <h2 className="py-4 font-bold text-xl">Description :</h2>
          <p className="text-lg mb-4">{project.description}</p>
          <h2 className="font-bold text-xl">Tech Stack :</h2>
          <div className="flex justify-start py-4">
            {project.techStack.map((id) => {
              const logo = logos.find((logo) => logo.id === id);
              return logo ? <img key={logo.id} src={logo.img} alt={logo.name} className="w-14 mr-4" /> : null;
            })}
          </div>
          <div className="modal-action mt-4 flex justify-between">
            <button className="btn border-2 p-2 rounded-lg bg-black text-white" onClick={onClose}>Close</button>
            <div className="gap-5 flex mt-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:text-gray-500" />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaLink className="text-2xl hover:text-gray-500" />
                </a>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
