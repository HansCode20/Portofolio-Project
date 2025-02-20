import React, { useEffect, useState } from 'react'
import pixelArt from '../assets/json/pixelArt.json'
import PixelArtGrid from '../components/PixelArtGrid'

const PixelArt = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
   setTimeout(() => {    
     setData(pixelArt)
     setLoading(false)
   }, 2000);
  }, [])

  return (
    <div className='mt-40'>
        <div className="space-y-10 mb-20">
            <h1 className="text-5xl md:text-[9rem] text-center font-bold text-[#025a4e]">
                 Pixel Art
            </h1>
            <h4 className="container mx-auto text-center w-96 text-[#025a4e]">
            _,   Some of my pixel art works are themed on One Piece characters and made using the Piskel application.
            </h4>
        </div>

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

    </div>
  )
}

export default PixelArt