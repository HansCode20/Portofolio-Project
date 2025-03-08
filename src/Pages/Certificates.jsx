import React, {useRef} from 'react'
import { AnimatePresence, easeIn, easeInOut, easeOut, motion, useInView } from 'framer-motion'
import BootcampSertifikat from '../assets/Images/Sertifikat/Dibimbing.png'
import Edspert1 from '../assets/Images/Sertifikat/Edspert1.png'
import Edspert2 from '../assets/Images/Sertifikat/Edspert2.png'

const Certificates = () => {
    const certificate = [
        {
            id : 1,
            img : Edspert1,
            decoration : "https://img.icons8.com/fluency/48/certificate--v2.png"
        },
        {
            id : 2,
            img : Edspert2,
            decoration : "https://img.icons8.com/fluency/certificate--v2.png"
        },
        {
            id : 3,
            img : BootcampSertifikat,
            decoration : "https://img.icons8.com/fluency/96/certificate--v2.png"
        }
    ];

    const titleRef = useRef(null);
    const certificatesRef = useRef(null);
  
    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const iscertificatesInView = useInView(certificatesRef, { once: true, margin: "-50px" });


  return (
  <AnimatePresence>
    <div className='mt-40'>
        <motion.div 
           ref={titleRef}
           initial={{ opacity : 0 }}
           animate={ isTitleInView ? { opacity : 1 } : {}}
           transition={{ duration : 2 , ease : easeInOut }}
           className="space-y-10 mb-20">
          <h1 className="text-5xl md:text-[9rem] text-center font-bold text-[#025a4e]">
            Awards
          </h1>
          <h4 className="container mx-auto text-center w-80 text-[#025a4e]">
            Some certificates that i received from bootcamp and webinar, my webinar certificate should not be only two but it is lost because the pdf file has been deleted
          </h4>
       </motion.div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 p-5">
            {certificate.map((awards, index) => (
                <motion.div
                  ref={certificatesRef}
                  initial={{ scale : 0 }}
                  animate={ iscertificatesInView ? { scale : 1 } : {}}
                  transition={{ duration : 1, ease : easeIn}}
                  key={awards.id}
                  className={`relative ${
                      index === 2 ? 'col-span-1 md:col-span-2 lg:cols-span-2 flex justify-center' : ''
                  }`}
                >
                  <div className='relative bg-white/40 p-6 rounded-xl'>
                        <img
                            src={awards.img}
                            alt="Awards"
                            className={`object cover ${awards.id === 3 ? "h-full md:h-[500px]" : "w-full mx-auto"}`}
                        />
                        <div className='absolute top-0 right-0'>
                            {awards.id === 1 || awards.id === 2 ? 
                            <img src="https://img.icons8.com/clouds/certificate.png" alt="certificate" className='w-20'/>  
                            : 
                            <img src="https://img.icons8.com/bubbles/certificate.png" alt="certificate" className='w-20'/>
                            }
                        </div>
                  </div>
                </motion.div>
            ))}
        </div>

    </div>
  </AnimatePresence>
  )
}

export default Certificates;