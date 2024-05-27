  import React from 'react';
  import Marquee from 'react-fast-marquee';
  import { PiStarFourFill } from "react-icons/pi";

  function TextAnimate() {
    return (
      <div className="text-animate bg-black text-white w-full p-5 ">
        <Marquee >
          <div className="marquee flex gap-6 justify-center mb-5">
            {Array.from({ length: 5  }, ( index) => (
              <div key={index}>
                <div className="text-center flex gap-7">
                <h1 className='font-bold text-2xl'>Front End Developer</h1>
                <PiStarFourFill className='text-xl text-[#FFC107]'/>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    );
  }

  export default TextAnimate;
