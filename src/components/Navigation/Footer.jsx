import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  const date = new Date().getFullYear();

  const linkFooter = [
    { id: 1, name: "Github", link: "home" },
    { id: 2, name: "Instagram", link: "about" },
    { id: 3, name: "linkedIn", link: "projects" },
    { id: 4, name: "CV", link: "contact" },
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
                <li key={link.id} className='text-lg text-[#5a6d68] font-normal'>
                  <Link to={link.link} smooth={true} duration={1000} className='hover:text-[#025a4e]'>{link.name}</Link>
                </li>
              ))}
            </ul>

            <ul className='flex flex-col gap-4'>
              <h6 className='text-[#025a4e] font-bold text-lg mb-3'>Contact</h6>
              <li className='text-lg text-[#5a6d68] font-normal'>Message</li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;
