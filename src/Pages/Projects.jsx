import React, { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import aos from 'aos';
import 'aos/dist/aos.css';
import Quranku from '../assets/Images/Project/Quranku.png';
import Travelins from '../assets/Images/Project/Travelins.png';
import SinarBulan from '../assets/Images/Project/sinar bulan.png';
import ReactProject from '../assets/Images/Project/React Simple Project.png';
import NextProject from '../assets/Images/Project/Next Simple Project.png';
import GlamourApparel from '../assets/Images/Project/FakeStore.png';
import Kabarin from "../assets/Images/Project/Kabarin.png";

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    aos.init();
  }, []);

  const Logos = [
    {
        id: 1,
        name: "HTML",
        img: "https://img.icons8.com/color/html-5--v1.png",
    },
    {
        id: 2,
        name: "CSS",
        img: "https://img.icons8.com/color/css3.png"
    },
    {
        id: 3,
        name: "Javascript",
        img: "https://img.icons8.com/color/javascript--v1.png"
    },
    {
        id: 4,
        name: "React JS",
        img: "https://img.icons8.com/color/react-native.png"
    },
    {
        id: 5,
        name: "React Vite",
        img: "https://img.icons8.com/fluency/vite.png"
    },
    {
        id: 6,
        name: "Next",
        img: "https://img.icons8.com/color/nextjs.png"
    },
    {
        id: 7,
        name: "Redux",
        img: "https://img.icons8.com/color/240/redux.png"
    },
    {
        id: 8,
        name: "Tailwind",
        img: "https://img.icons8.com/color/tailwind_css.png"
    },
    {
        id: 9,
        name: "Bootstrap",
        img: "https://img.icons8.com/color/bootstrap--v2.png"
    },
    {
        id: 10,
        name: "Node JS",
        img: "https://img.icons8.com/fluency/node-js.png"
    },
    {
      id: 11,
      name: "Axios",
      img: "https://logowik.com/content/uploads/images/axios3626.jpg"
    },
    {
      id: 12,  
      name: "Firebase",
      img: "https://img.icons8.com/color/firebase.png"
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'Quranku',
      description: 'Memanfaatkan data dari Api SantriKoding & myQuran untuk menampilkan data dari Surah, Doa, dan Asmaul Husna',
      img: Quranku,
      techStack: [5,11,8],
      githubUrl : "https://github.com/HansCode20/QuranKu",
      liveUrl : "https://quran-ku-kappa.vercel.app/"
    },
    {
      id: 2,
      name: 'Travelins',
      description: 'Memanfaatkan data Create, Update, Delete, Edit, Read, DLL dari API Bootcamp Dibimbing.id Sehingga User bisa melihat tampilan awal saat belum login dan bisa mengatur dashboard saat menjadi Admin',
      img: Travelins,
      techStack: [5, 11, 7, 8],
      githubUrl : "https://github.com/HansCode20/Travelins",
      liveUrl : "https://travelins.vercel.app/"
    },
    {
      id: 3,
      name: 'Sinar Bulan',
      description: 'Membuat Website Restaurant Sederhana Dengan menggunakan HTML, CSS, JavaScript dan Bootstrap',
      img: SinarBulan,
      techStack: [1, 2, 9 ,3 ],
      githubUrl : "https://github.com/HansCode20/MiniProject_MokhamadIlhamFanani",
      liveUrl : "https://hanscode20.github.io/MiniProject_MokhamadIlhamFanani/index.html"
    },
    {
      id: 4,
      name: 'List User',
      description: 'Membuat List User dengan tambahan Fitur Register dan login Dengan Pemanggilan API dari Dibimbing',
      img: ReactProject,
      techStack: [5,11,8],
      githubUrl : "https://github.com/HansCode20/Mini-Project-Rct",
      liveUrl : "https://mini-project-rct.vercel.app/"
    },
    {
      id: 5,
      name: 'Create Food',
      description: 'Membuat Website Food dengan Fitur Create, Edit, Delete dengan Menggunakan NextJS dan dari API dibimbing',
      img: NextProject,
      techStack: [6,7,11,8],
      githubUrl : "https://github.com/HansCode20/Assigment-Next",
      liveUrl : "https://assigment-next.vercel.app/makanan"
    },
    {
      id: 6,
      name: 'Glamour Apparel Store',
      description: 'Membuat E-commerce dengan memanfaatkan Api dari FakeStore dengan membuat fitur card item Add, remove beserta Lainnya ',
      img: GlamourApparel ,
      techStack: [5,7,11,8,12],
      githubUrl : "https://github.com/HansCode20/Store",
      liveUrl : "https://glamour-apparel.vercel.app/"
    },
    {
      id: 7,
      name: 'Kabarin News',
      description: 'Membuat Website Berita dengan menggunakan API CNN sumbernya dari github daftar api lokal indonesia dengan menggunakan ',
      img: Kabarin,
      techStack: [1, 2, 3, 4, 8],
      githubUrl : "https://github.com/HansCode20/Kabarin-News",
      liveUrl : "https://kabarin-news.vercel.app/"
    }
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <div>
      <h1 data-aos="fade-up" data-aos-duration="2000"  className='py-10 mt-20 text-4xl font-bold text-center'>Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 gap-10 p-4 w-full lg:w-2/3 mx-auto'>
        {projects.map((project) => (
          <div key={project.id} className='relative shadow-2xl rounded-xl overflow-hidden group'>
            <img data-aos="fade-up" data-aos-duration="2000" className='group-hover:blur-[3px] transition-all duration-300 ease-out' src={project.img} alt={project.name} />
            <div className='absolute inset-0 flex flex-col justify-end p-6 gap-2 group-hover:bg-opacity-80 group-hover:bg-black transition-all duration-300 ease-out'>
              <h1 className='text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity'>{project.name}</h1>
              <button 
               className='text-white w-1/4 opacity-0 group-hover:opacity-100 transition-opacity border-2 rounded-lg border-white p-2 hover:bg-gray-200 hover:text-black'
               onClick={() => openModal(project)}
               >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && currentProject && (
        <div className="fixed bg-black/70 inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 opacity-50"></div>
          <dialog className="modal modal-bottom sm:modal-middle z-50 rounded-lg w-full  max-w-md mx-auto lg:max-w-lg md:max-w-2xl" open>
            <div className="modal-box p-8">
              <h1 className="font-bold text-3xl text-center mb-3">{currentProject.name}</h1>
              <hr className='border-black'/>
              <h2 className="py-4 font-bold text-xl">Description :</h2>
              <p className='text-lg mb-4'>
                {currentProject.description}
              </p>
              <h2 className='font-bold text-xl'>Tech Stack :</h2>
              <div className='flex justify-start py-4'>
                {currentProject.techStack.map((id) => {
                  const logo = Logos.find((logo) => logo.id === id);
                  return logo ? <img key={logo.id} src={logo.img} alt={logo.name} className="w-14 mr-4" /> : null;
                })}
              </div>
              <div className="modal-action mt-4 flex justify-between">
                <button className="btn border-2 p-2 rounded-lg bg-black  text-white" onClick={closeModal}>Close</button>
                <div className='gap-5 flex mt-4'>
                 {currentProject.githubUrl && (
                    <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-2xl hover:text-gray-500" />
                    </a>
                  )}
                  {currentProject.liveUrl && (
                    <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaLink className="text-2xl hover:text-gray-500 " />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default Projects;
