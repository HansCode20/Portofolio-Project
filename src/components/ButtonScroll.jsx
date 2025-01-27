import React from 'react';
import ButtonArrow from '../assets/Images/Icon & Logo/ArrowButton.gif';

const ButtonScroll = () => {
    const arrowScroll = () => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

  return (
    <div className='bg-white p-2 rounded-full' onClick={() => arrowScroll()}>
        <img src={ButtonArrow} alt='Icons Button'/>
    </div>
  )
}

export default ButtonScroll;