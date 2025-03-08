import React, { useEffect, useState, useRef } from 'react'
import { AnimatePresence, easeInOut, motion, useInView } from 'framer-motion'
import pixelArt from '../assets/json/pixelArt.json'
import PixelArtGrid from '../components/PixelArtGrid'

const PixelArt = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
   setTimeout(() => {    
     setData(pixelArt)
     setLoading(false)
   }, 3000);
  }, [])

  const titleRef = useRef(null);
  const pixelRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isPixelInView = useInView(pixelRef, { once: true, margin: "-200px" }); 

  return (
    <div className='mt-40'>
      <AnimatePresence>
          <motion.div 
            ref={titleRef}
            initial={{ opacity : 0 }}
            animate={ isTitleInView ? { opacity : 1 } : {}}
            transition={{ duration : 2 , ease : easeInOut}}
            className="space-y-10 mb-20">
              <h1 className="text-5xl md:text-[9rem] text-center font-bold text-[#025a4e]">
                  Pixel Art
              </h1>
              <h4 className="container mx-auto text-center w-96 text-[#025a4e]">
                  Some of my pixel art works are themed on One Piece characters and made using the Piskel application.
              </h4>
          </motion.div>


      
         <motion.div
          ref={pixelRef}
          initial={{opacity : 0}}
          animate={ isPixelInView ? {opacity : 1} : {}}
          transition={{duration : 2, ease : easeInOut}}
         >
          { loading ? (
              <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4'>
                {[...Array(7)].map((_, index) => (
                  <div key={index} className='animate-pulse bg-white/60 w-full h-[400px] md:h-[500px]'></div>
                ))}
              </div>
          ) : (
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4'>
                {data.map((art) => (
                  <PixelArtGrid art={art}/>
                ))}
            </div>
          )}
         </motion.div>

      </AnimatePresence>
    </div>
  )
}

export default PixelArt