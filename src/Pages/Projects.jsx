import React, { useEffect, useState } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../components/ProjectCard';
import Modal from '../fragment/ModalProject';
import Quranku from '../assets/Images/Project/Quranku_Web.png';
import Travelins from '../assets/Images/Project/Travelins_Web.png';
import SinarBulan from '../assets/Images/Project/Sinar_Bulan.png';
import ReactProject from '../assets/Images/Project/Simple_User.png';
import NextProject from '../assets/Images/Project/Create_Food.png';
import GlamourApparel from '../assets/Images/Project/Glamour_Apparel.png';
import Kabarin from "../assets/Images/Project/Kabarin_News.png";
import Macom from "../assets/Images/Project/Macom_Web.png";

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    aos.init();
  }, []);

  const Logos = [
    { id: 1, name: "HTML", img: "https://img.icons8.com/color/html-5--v1.png" },
    { id: 2, name: "CSS", img: "https://img.icons8.com/color/css3.png" },
    { id: 3, name: "Javascript", img: "https://img.icons8.com/color/javascript--v1.png" },
    { id: 4, name: "React JS", img: "https://img.icons8.com/color/react-native.png" },
    { id: 5, name: "React Vite", img: "https://img.icons8.com/fluency/vite.png" },
    { id: 6, name: "Next", img: "https://img.icons8.com/color/nextjs.png"},
    { id: 7, name: "Redux", img: "https://img.icons8.com/color/240/redux.png" },
    { id: 8, name: "Tailwind", img: "https://img.icons8.com/color/tailwind_css.png" },
    { id: 9, name: "Bootstrap", img: "https://img.icons8.com/color/bootstrap--v2.png" },
    { id: 10,name: "Node JS", img: "https://img.icons8.com/fluency/node-js.png"},
    { id: 11, name: "Axios", img: "https://logowik.com/content/uploads/images/axios3626.jpg" },
    { id: 12, name: "Firebase",img: "https://img.icons8.com/color/firebase.png" }
  ];

  const projects = [
    { id: 1, name: 'Quranku', description: 'Memanfaatkan data dari Api SantriKoding & myQuran untuk menampilkan data dari Surah, Doa, dan Asmaul Husna', img: Quranku, techStack: [5,11,8], githubUrl : "https://github.com/HansCode20/QuranKu", liveUrl : "https://quran-ku-kappa.vercel.app/" },
    { id: 2, name: 'Travelins', description: 'Memanfaatkan data Create, Update, Delete, Edit, Read, DLL dari API Bootcamp Dibimbing.id Sehingga User bisa melihat tampilan awal saat belum login dan bisa mengatur dashboard saat menjadi Admin', img: Travelins, techStack: [5, 11, 7, 8], githubUrl : "https://github.com/HansCode20/Travelins", liveUrl : "https://travelins.vercel.app/" },
    { id: 3, name: 'Sinar Bulan', description: 'Membuat Website Restaurant Sederhana Dengan menggunakan HTML, CSS, JavaScript dan Bootstrap', img: SinarBulan, techStack: [1, 2, 9 ,3 ], githubUrl : "https://github.com/HansCode20/MiniProject_MokhamadIlhamFanani", liveUrl : "https://hanscode20.github.io/MiniProject_MokhamadIlhamFanani/index.html" },
    { id: 4, name: 'List User', description: 'Membuat List User dengan tambahan Fitur Register dan login Dengan Pemanggilan API dari Dibimbing', img: ReactProject, techStack: [5,11,8], githubUrl : "https://github.com/HansCode20/Mini-Project-Rct", liveUrl : "https://mini-project-rct.vercel.app/" },
    { id: 5, name: 'Create Food', description: 'Membuat Website Food dengan Fitur Create, Edit, Delete dengan Menggunakan NextJS dan dari API dibimbing', img: NextProject, techStack: [6,7,11,8], githubUrl : "https://github.com/HansCode20/Assigment-Next", liveUrl : "https://assigment-next.vercel.app/makanan" },
    { id: 6, name: 'Glamour Apparel Store', description: 'Membuat E-commerce dengan memanfaatkan Api dari FakeStore dengan membuat fitur card item Add, remove beserta Lainnya ',img: GlamourApparel , techStack: [5,7,11,8,12], githubUrl : "https://github.com/HansCode20/Store", liveUrl : "https://glamour-apparel.vercel.app/" },
    { id: 7, name: 'Kabarin News', description: 'Membuat Website Berita dengan menggunakan API CNN sumbernya dari github daftar api lokal indonesia dengan menggunakan ',img: Kabarin, techStack: [1, 2, 3, 4, 8], githubUrl : "https://github.com/HansCode20/Kabarin-News", liveUrl : "https://kabarin-news.vercel.app/" },
    { id: 8, name: 'Macom', description: 'Membuat Website Manga dengan menggunakan API dari Mangahook', img: Macom, techStack: [1, 2, 3, 4, 8], githubUrl : "", liveUrl : "https://macom.vercel.app/" },
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
      <h1 data-aos="fade-up" data-aos-duration="2000" className="container mx-auto text-white text-center text-3xl font-semibold mb-10">Projects</h1>
     {/* Grid Proyek */}
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-5 md:p-20 lg:p-20 w-full md:w-3/4 mx-auto bg-white/20 opacity-90">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`${
            (index + 1) % 3 === 0 ? "sm:col-span-2 " : "sm:col-span-1"
          }`}
        >
          <ProjectCard project={project} isOpen={openModal} />
        </div>
      ))}
    </div>

      <Modal isOpen={openModal} project={currentProject} logos={Logos} onClose={closeModal} />
    </div>
  );
}

export default Projects;
