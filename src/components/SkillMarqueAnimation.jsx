import React from 'react'
import Marquee from "react-fast-marquee";
import NextImage from '../assets/Images/Icon & Logo/NextLogo.svg';

const SkillMarqueAnimation = () => {

    const Logos = [
        { id: 1, name: "HTML", img: "https://img.icons8.com/color/html-5--v1.png",},
        { id: 2, name: "CSS", img: "https://img.icons8.com/color/css3.png"},
        { id: 3, name: "Javascript", img: "https://img.icons8.com/color/javascript--v1.png" },
        { id: 4, name: "React JS", img: "https://img.icons8.com/color/react-native.png" },
        { id: 5, name: "React Vite", img: "https://img.icons8.com/fluency/vite.png" },
        { id: 6, name: "Next", img: NextImage }
    ]

    const LogosTwo = [
        { id: 1, name: "Redux", img: "https://img.icons8.com/color/240/redux.png" },
        { id: 2, name: "Tailwind", img: "https://img.icons8.com/color/tailwind_css.png" },
        { id: 3, name: "Bootstrap", img: "https://img.icons8.com/color/bootstrap--v2.png" },
        { id: 4, name: "Node JS", img: "https://img.icons8.com/fluency/node-js.png" },
        { id: 5, name: "Firebase", img: "https://img.icons8.com/color/firebase.png" }
    ]


  return (
    <div className='space-y-5'>
        <Marquee direction='right'>
            <div className='flex gap-10'>
            {Logos.map((image) => (
                    <div key={image.id} className='flex justify-center items-center space-x-5 border border-gray-500 rounded-lg p-2'>
                        <img src={image.img} alt={image.name} className='w-5' />
                        <h1 className='text-white font-medium'>{image.name}</h1>
                    </div>
            ))}
            </div>
        </Marquee>

        <Marquee direction='left'>
            <div className='flex gap-10'>
            {LogosTwo.map((image) => (
                    <div key={image.id} className='flex justify-center items-center space-x-5 border border-gray-500 rounded-lg p-2'>
                        <img src={image.img} alt={image.name} className='w-5' />
                        <h1 className='text-white font-medium'>{image.name}</h1>
                    </div>
            ))}
            </div>
        </Marquee>
    </div>
  )
}

export default SkillMarqueAnimation