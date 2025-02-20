import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routeList from "./Routes/Routes";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer"
import ContactModal from "./components/ContactModal";

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openModal = () => setIsContactOpen(true);
  const closeModal = () => setIsContactOpen(false);

  const element = useRoutes(routeList);

  return (
    <>
      <Navbar openModal={openModal} />
      {element}
      <ContactModal isOpen={isContactOpen} onClose={closeModal} />
      <Footer openModal={openModal}/>
    </>
  );
};

export default App;
