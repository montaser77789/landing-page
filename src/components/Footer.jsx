import { useState } from 'react';
import { FaBars, FaFacebook, FaInstagram, FaTimes, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (event) => {
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(!isOpen);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 fixed top-0 left-0 right-0 max-w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-teal-400 font-bold text-2xl flex items-center animate__animated animate__fadeInDown">
          logo
        </a>
        <div className="flex gap-4">
          <div className="flex ml-4 md:hidden">
            <a href="#" className="text-teal-400 hover:text-teal-200 cursor-pointer mr-4">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-200 cursor-pointer mr-4">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-200 cursor-pointer">
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-teal-400 cursor-pointer" size={24} /> : <FaBars className="text-teal-400 cursor-pointer" size={24} />}
          </div>
        </div>
        <div className={`fixed gap-2 top-0 left-0 w-full h-[70vh] md:h-full bg-gradient-to-r from-blue-900 to-blue-700 p-4 z-40 transform ${isOpen ? 'translate-y-0 animate__animated animate__fadeInDown' : '-translate-y-full'} transition-transform duration-500 ease-in-out md:relative md:translate-y-0 md:flex md:items-center md:bg-transparent md:p-0`}>
          <div className="flex justify-end md:hidden">
            <div onClick={toggleMenu}>
              <FaTimes className="text-teal-400 cursor-pointer" size={24} />
            </div>
          </div>
          <div className="hidden ml-4 md:flex">
            <a href="#" className="text-teal-400 hover:text-teal-200 cursor-pointer mr-4">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-200 cursor-pointer mr-4">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-200 cursor-pointer">
              <FaInstagram size={24} />
            </a>
          </div>
          <ul className="flex flex-col items-center justify-center h-auto space-y-6 text-center md:flex-row md:space-x-6 md:space-y-0 md:text-left mt-7 md:mt-0 animate__animated animate__fadeInDown">
            <li><a href="#home" onClick={handleMenuClick} className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">Home</a></li>
            <li><a href="#About" onClick={handleMenuClick} className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">About</a></li>
            <li><a href="#Roadmap" onClick={handleMenuClick} className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">Roadmap</a></li>
            <li><a href="#Token" onClick={handleMenuClick} className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">Token Distribution</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
