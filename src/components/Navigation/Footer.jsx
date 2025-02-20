import React from 'react';
import { Link } from 'react-scroll';

function Footer({openModal}) {
  const date = new Date().getFullYear();

  const linkFooter = [
    { id: 1, name: "Github", link: "https://github.com/HansCode20" },
    { id: 2, name: "Instagram", link: "https://www.instagram.com/ilhamfnni_/" },
    { id: 3, name: "linkedIn", link: "https://www.linkedin.com/in/mokhamad-ilham-fanani/" },
    { id: 4, name: "CV", link: "https://drive.google.com/file/d/1ZMfyZuGFuQdCH2voGjq2bANy6uTgC5Nw/view?usp=sharing" },
  ]

  return (
    <footer className='container mx-auto flex flex-col md:flex-row justify-evenly items-start py-10 gap-10 p-10 mt-24 w-full '>
        <div className='order-2 md:order-1'>
            <span className='text-lg text-[#5a6d68] font-medium' > &#169; {date} Mokhamad Ilhám Fanani </span>
        </div>

        <div className='flex flex-row gap-20 items-start order-1 md:order-2'>

            <ul className='flex flex-col gap-4'>
              <h6 className='text-[#025a4e] font-bold text-lg mb-3'>Elsewhere</h6>
              {linkFooter.map((link) => (
                <li key={link.id} className='text-lg text-[#5a6d68] font-normal cursor-pointer'>
                  <a href={link.link} smooth={true} duration={1000} className='hover:text-[#025a4e]'>{link.name}</a>
                </li>
              ))}
            </ul>

            <ul className='flex flex-col gap-4'>
              <h6 className='text-[#025a4e] font-bold text-lg mb-3'>Contact</h6>
              <li className='text-lg text-[#5a6d68] font-normal cursor-pointer' onClick={openModal}>Message</li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;
