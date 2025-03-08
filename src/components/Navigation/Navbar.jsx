import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../style/Navbar.css";

function Navbar({ openModal }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navButton = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Projects", link: "/projects" },
    { id: 3, name: "PixelArt", link: "/pixelart" },
    { id: 4, name: "Certificates", link: "/certificates" },
    { id: 5, name: "Contact", action : openModal},
  ];

  const navButtonIcons = [
    { id: 1, img: "https://img.icons8.com/material-outlined/home--v2.png", link: "/" },
    { id: 2, img: "https://img.icons8.com/material-outlined/source-code.png", link: "/projects" },
    { id: 3, img:  "https://img.icons8.com/hatch/pixel-heart.png", link: "/pixelart" },
    { id: 4, img: "https://img.icons8.com/sf-regular/certificate.png", link: "/certificates" },
    { id: 5, img: "https://img.icons8.com/material-outlined/contact-card.png", action : openModal },
  ];


  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-80 md:w-fit lg:w-fit px-4 py-3 text-black/60 z-50 ${
        isScrolled ? "bg-white/50 backdrop-blur-md rounded-full" : "bg-none"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:block md:flex justify-center space-x-5">
        {navButton.map((item) => (
          item.action ? (
            <button
              key={item.id}
              onClick={item.action}
               className="nav-link font-semibold text-md px-4 py-2"
            >
              {item.name}
            </button>
          ) : (
            <NavLink
              to={item.link}
              key={item.id}
              end
              className={({ isActive }) =>
                `nav-link font-semibold text-md px-4 py-2 ${isActive ? "bg-white rounded-full transition-all duration-300 ease-in-out" : ""}`
              }
            >
              {item.name}
            </NavLink>
          )
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden grid grid-cols-5 gap-3">
        {navButtonIcons.map((item) => (
            item.action ? (
            <button
            key={item.id}
            onClick={item.action}
             className="nav-link font-semibold text-md px-4 py-2"
          >
            <img src={item.img} alt="icon" className="w-4 h-6 object-contain"  />
          </button>
        ) : (
          <NavLink
            to={item.link}
            key={item.id}
            end
            className={({ isActive }) =>
              `nav-link font-semibold text-md px-2 py-3 ${isActive ? "bg-white rounded-full  transition-all duration-300 ease-in-out" : ""}`
            }
          >
              <img src={item.img} alt="icon" className="w-4 h-6 object-contain mx-auto"  />
          </NavLink>
        )
        ))}
      </div>

    
    </div>
  );
}

export default Navbar;
