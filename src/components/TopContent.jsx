import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Foto from '../assets/Images/Icon & Logo/Foto Profile.png';

const TopContent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when sending email

    emailjs
      .sendForm(
        'service_4irg3pw', 
        'template_wednz5t', 
        form.current, 
        'nZRrSRcN9UB53yQhD'
      )
      .then(
        () => {
          setLoading(false); // Set loading to false when email is sent
          setSent(true); // Set sent to true to hide the form
          console.log('SUCCESS!');
        },
        (error) => {
          setLoading(false); // Set loading to false if there's an error
          console.log('FAILED...', error.text);
        }
      );
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSent(false); // Reset the sent state when closing the modal
  };


  return (
    <div
      className="relative flex flex-col md:flex-row justify-evenly items-center text-white w-full bg-black p-8"
      id="home"
    >
      {/* Bagian Kiri */}
      <div className="w-full lg:w-1/3 space-y-5 mb-5">
        <h1 
          className="relative text-xl md:text-7xl font-bold leading-tight"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <span
            className="absolute top-[-20px] md:top-[-30px] left-[-20px] text-yellow-500 italic rotate-[-10deg] font-[cursive] mr-2 text-3xl md:text-5xl"
          >
            I'm
          </span>
          <span className="block text-3xl md:text-5xl">MOKHAMAD</span>
          <span className="block text-3xl md:text-5xl">ILHAM FANANI</span>
        </h1>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="text-left"
        >
          "I am ready to help and serve you wholeheartedly if you need my help.
          As a front-end developer, I am committed to delivering innovative
          solutions and superior user experiences through responsive and
          attractive design."
        </p>

        <div className="flex space-x-5" data-aos="zoom-in" data-aos-duration="3000">
          <a
           href='https://wa.me/6282228525021'
           className="relative bg-white text-black font-bold py-3 px-8 shadow-md shadow-white rounded-lg">
            Hire Me
            <img
              src="https://img.icons8.com/keek/100/bag-front-view.png"
              alt="bag-front-view"
              className="absolute top-[-20px] right-0 w-10 rotate-12"
            />
          </a>

          <button className="relative bg-white text-black font-bold py-3 px-8 shadow-md shadow-white rounded-lg">
            My Story
            <img
              src="https://img.icons8.com/3d-fluency/94/mic.png"
              alt="bag-front-view"
              className="absolute bottom-[-20px] right-0 w-10 rotate-12"
            />
          </button>
        </div>
      </div>

      {/* Gambar Profil */}
      <div className="relative flex justify-center mb-8 mt-20 order-1 md:order-2">
        {/* Latar Belakang Elips */}
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-[#ff7b54] to-[#343aeb] rounded-full blur-2xl opacity-30 z-0"></div>
        {/* Gambar */}
        <img
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          src={Foto}
          alt="Profil Picture"
          className="w-96 relative z-10"
        />
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay Background */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md" onClick={closeModal}></div>

          {/* Modal Dialog */}
          <dialog className="modal modal-bottom sm:modal-middle z-50 rounded-lg w-full max-w-md mx-auto lg:max-w-lg md:max-w-2xl bg-white" open >
            <div className="modal-box p-8 text-black rounded-lg relative">
              <div className="modal-action absolute top-3 right-4">
                <button className="btn text-xl font-bold" onClick={closeModal}>
                  X
                </button>
              </div>
              {!isSent ? (
                <>
                  <h3 className="font-bold text-2xl text-center">Hello!</h3>
                  <hr className="border-2 border-gray-300" />
                  <form ref={form} onSubmit={sendEmail} className="flex flex-col py-4 gap-3">
                    <label>Name :</label>
                    <input
                      type="text"
                      name="user_name"
                      className="border-2 border-gray-400"
                      required
                    />
                    <label>Email :</label>
                    <input
                      type="email"
                      name="user_email"
                      className="border-2 border-gray-400"
                      required
                    />
                    <label>Message :</label>
                    <textarea
                      name="message"
                      className="border-2 border-gray-400"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-black/80 hover:bg-gray-800 text-white w-full p-2 rounded-lg"
                    >
                      {isLoading ? 'Sending...' : 'Send'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <h4 className="text-lg font-bold">Your message has been sent!</h4>
                </div>
              )}
            </div>
          </dialog>
        </div>
      )}


    </div>
  );
};

export default TopContent;
