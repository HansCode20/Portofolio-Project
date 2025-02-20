import React from "react";
import Foto from '../assets/Images/icons/Profile.png';
import { IoClose } from "react-icons/io5";

const ContactModal = ({ isOpen, onClose }) => {
  const phoneNumber =  6282228525021;

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-10 right-10 w-80 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center bg-[#025a4e] p-4 rounded-t-lg">
        <div className="flex items-center gap-4">
          <img src={Foto} alt="Foto Image" className="w-8 border-2 rounded-full"/>
          <div className="flex flex-col">
            <span className="text-md font-bold text-white">Ilhám WhatsApp</span>
            <span className="text-sm font-medium text-white">Ask me a question</span>
          </div>
        </div>
        <button onClick={onClose}>
          <IoClose className="text-2xl text-white"/>
        </button>
      </div>

      {/* Chat Content */}
      <div className="p-4 space-y-4 rounded-b-lg backdrop-blur-lg">
        <p className="bg-white w-fit p-2 rounded-lg text-sm">Hi!</p>
        <p className="bg-white w-fit p-2 rounded-lg text-sm">
          Hi, I'm Ilham. How can I help you today?
        </p>
        <div className="text-right">
          <a 
            href={`https://wa.me/${phoneNumber}?text=Halo, saya butuh bantuan!`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#025a4e] w-fit p-2 rounded-lg text-sm font-medium hover:bg-white  transition-all duration-200 ease-in">
             Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
