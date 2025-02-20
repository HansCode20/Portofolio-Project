import React from 'react'

const PixelArtGrid = ({ art }) => {
  return (
    <div key={art.id} className='relative group'>
        <div className="absolute bottom-0 inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-0 rounded-lg group-hover:opacity-0"></div>
        <img src={art.img} className='w-full h-full object-cover  rounded-lg group-hover:opacity-0 transition duration-200 ease-in-out'/>
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/40 w-full h-full rounded-lg'></div>

        <div className="absolute top-4 left-5 text-black font-bold space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <h4 className="text-2xl font-bold text-[#025a4e]">
              {art.Name}
            </h4>
            <p className='text-wrap text-sm lg:text-xl w-11/12 text-left text-[#5a6d68] font-medium'>{art.description}</p>
        </div>
    </div>
  )
}

export default PixelArtGrid;
