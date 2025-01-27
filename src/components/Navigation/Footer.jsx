import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  const styleFooter = {
    listitem: {
      cursor: 'pointer',
    }
  };

  return (
    <div className='w-full mt-20'>
      <div className='bg-black text-gray-300'>
        <div className='flex flex-col lg:flex-row justify-center p-10 gap-8 py-8'>
          <div className='w-full lg:w-1/3 md:w-full'>
            <h1 className='text-2xl lg:text-3xl md:text-2xl font-bold mb-2'>MIF.</h1>
            <p className='text-md font-medium'>I am ready to help and serve you wholeheartedly if you need my assistance. As a front-end developer, I am committed to delivering innovative solutions and superior user experiences through responsive and attractive design.</p>
          </div>
          <div className='flex lg:flex-row flex-col gap-14'>
            <div>
              <h1 className='text-2xl font-semibold mb-2'>Important Links</h1>
              <ul className='text-md'>
                <Link to="home" spy={true} smooth={true} duration={500} offset={-300} className='font-medium'>
                  <li style={styleFooter.listitem}>Home</li>
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500} offset={-300}>
                  <li style={styleFooter.listitem}>About</li>
                </Link>
                <Link to="projects" spy={true} smooth={true} duration={500} offset={-300}>
                  <li style={styleFooter.listitem}>Projects</li>
                </Link>
              </ul>
            </div>
            <div>
              <h1 className='text-2xl font-semibold mb-2'>Contact Info</h1>
              <ul className='text-md'>
                <li>+6282228525021</li>
                <li>ilhamfanani1306@gmail.com</li>
                <li>Nganjuk, Indonesia</li>
              </ul>
            </div>
            <div>
              <h1 className='text-2xl font-semibold mb-2'>Social Links</h1>
              <ul className='text-md'>
                <li><a href='https://web.facebook.com/ilham.fanani.581?_rdc=1&_rdr' style={styleFooter.listitem}>Facebook</a></li>
                <li><a href='https://www.instagram.com/ilhamfnni_/' style={styleFooter.listitem}>Instagram</a></li>
                <li><a href='https://www.linkedin.com/in/mokhamad-ilham-fanani/' style={styleFooter.listitem}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='p-5 mt-[-30px]'>
          <hr className='border-gray-500 border-2 mb-3'/>
          <p className='text-xs lg:text-md md:text-sm font-bold text-center'>© 2023 Mokhamad Ilham Fanani. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
