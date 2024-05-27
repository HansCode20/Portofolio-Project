import React, { useEffect } from 'react'
import NextImage from '../assets/Images/NextLogo.svg'
import aos from 'aos';
import 'aos/dist/aos.css';

function Skill() {
    useEffect(() => {
        aos.init();
    },[])

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
            img: NextImage
    
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
    ]


  return (
     <div data-aos="fade-up" data-aos-duration="2000" className='mt-[-100px] bg-[black] lg:mx-[200px] md:mx-[200px] m-7 rounded-xl'>
        <div className='grid grid-cols-5 lg:flex md:flex justify-center gap-8 mt-10 p-5'>
        {Logos.map((logo) => (
            <div key={logo.id}>
                <img src={logo.img} alt={logo.name} className='logo hover:scale-125 transition-all duration-300 ease-out' />
            </div>
        ))}
        </div>

        <style jsx>{`
                    .logo {
                        width: 5rem; /* Default size */

                    }

            @media screen and (max-width: 768px) {
                /* For devices with max width 768px (tablet and below) */
                .logo {
                    width: 4rem; /* Adjust size for smaller screens */
                }
            }
        `}</style>
    </div>
  )
}

export default Skill
