import React, {useRef} from 'react'
import { AnimatePresence, easeIn, easeInOut, motion, useInView } from 'framer-motion'
import BootcampSertifikat from '../assets/Images/Sertifikat/Dibimbing.png'
import hacktiv from '../assets/Images/Sertifikat/Hacktiv.jpg'
import Edspert1 from '../assets/Images/Sertifikat/Edspert1.png'
import Edspert2 from '../assets/Images/Sertifikat/Edspert2.png'

const Certificates = () => {
    const certificate = [
        {
            id : 1,
            img : Edspert1,
        },
        {
            id : 2,
            img : Edspert2,
        },
        {
            id : 3,
            img : BootcampSertifikat,
        },
        {
            id : 4,
            img: hacktiv
        }
    ];
  

  return (
  <AnimatePresence>
    <div className='mt-40'>
        <motion.div 
           initial={{ opacity : 0 }}
           animate={{ opacity : 1 }}
           transition={{ duration : 1 , ease : easeInOut }}
           className="space-y-10 mb-20">
          <h1 className="text-5xl md:text-[9rem] text-center font-bold text-[#025a4e]">
            Awards
          </h1>
          <h4 className="container mx-auto text-center w-80 text-[#025a4e]">
            Some certificates that i received from bootcamp and webinar, my webinar certificate should not be only two but it is lost because the pdf file has been deleted
          </h4>
       </motion.div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 p-5">
            {certificate.map((awards) => (
                <motion.div
                  initial={{ scale : 0 }}
                  animate={ { scale : 1 } }
                  transition={{ duration : 1, ease : easeIn}}
                  key={awards.id}
                >
                  <div className='bg-white/40 p-6 rounded-xl'>
                        <img
                            src={awards.img}
                            alt="Awards"
                            className="w-full h-full md:h-96"
                        />
                  </div>
                </motion.div>
            ))}
        </div>

    </div>
  </AnimatePresence>
  )
}

export default Certificates;