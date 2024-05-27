import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative } from 'swiper/modules';
import Dibimbing from '../assets/Images/Sertifikat/Dibimbing.png';
import Edspertsatu from '../assets/Images/Sertifikat/Edspert1.png';
import Edspertdua from '../assets/Images/Sertifikat/Edspert2.png';
import aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    aos.init();
  },[])

  const Sertifikat = [
    {
      id: 1,
      Image: Dibimbing,
    },
    {
      id: 2,
      Image: Edspertsatu,
    },
    {
      id: 3,
      Image: Edspertdua,
    }
  ];

  return (
    <div className='flex flex-col md:flex-row items-center bg-gray-200 m-4 p-10 md:m-10 md:p-10 rounded-lg' id='about'>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mb-10'>
        <div data-aos="zoom-out-down" data-aos-duration="2000"      className='flex flex-col justify-center mb-10 '>
          <h1 className='text-2xl font-semibold mb-3'>About Me</h1>
          <p className='text-4xl font-bold w-full lg:w-2/3 md:w-2/3 mb-8'>And My Skill</p>
          <p className='font-semibold'>
            With a vocational school education background, I understand the importance of practical skills and direct application in the world of work. With a focus on
            <span className='font-bold'> front-end development, </span>
            <br />
            <br/>
            I also always follow developments in web technology to be able to apply design principles that are responsive and attractive to user interfaces.
          </p>
        </div>
        <div className='flex flex-col justify-center mb-10'>
          <Swiper
            data-aos="zoom-in"
            data-aos-duration="2000"
            grabCursor={true}
            effect={'creative'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[Autoplay, EffectCreative]}
            className="mySwiper w-full lg:w-[400px] md:w-2/2" 
          >
            {Sertifikat.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.Image}
                  alt={`Certificate ${item.id}`}
                  className='w-full h-full '
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default About;
