import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
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

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className='mt-20'>
      <div data-aos="fade-up" data-aos-duration="2000" className='flex justify-center bg-black text-white container mx-auto rounded'>
        <div className='text-center mx-auto p-10'>
          <h1 className='text-xl mb-3'>Have a Project in Mind?</h1>
          <p className='font-bold text-5xl mb-5'>Let me help you</p>
          <div>
            <button className='btn bg-white text-black p-3 rounded-lg' onClick={openModal}>
              Contact Now
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed bg-black/70 inset-0 flex items-center justify-center z-10">
          <dialog className="modal modal-bottom sm:modal-middle z-50 rounded-lg w-full max-w-md mx-auto lg:max-w-lg md:max-w-2xl" open>
            <div className="modal-box p-8 bg-white text-black rounded-lg">
              <div className="modal-action flex justify-end ">
                <button className="btn border-2 py-2 px-4 rounded-full border-green-500 hover:bg-green-500" onClick={closeModal}>X</button>
              </div>
              <h3 className="font-bold text-2xl text-center">Hello!</h3>
              <hr className='border-2 border-gray-300 '/>
              {!isSent ? (
                <form ref={form} onSubmit={sendEmail} className='flex flex-col py-4 gap-3'>
                  <label>Name :</label>
                  <input type="text" name="user_name" className='border-2 border-gray-400 ' required />
                  <label>Email :</label>
                  <input type="email" name="user_email" className='border-2 border-gray-400' required />
                  <label>Message :</label>
                  <textarea name="message" className='border-2 border-gray-400' required />
                  <button type="submit" className='bg-[#ff8c00] w-full p-2 rounded-lg'>
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </form>
              ) : (
                <div className='text-center'>
                  <h4 className='text-lg font-bold'>Your message has been sent!</h4>
                </div>
              )}
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default Contact;
