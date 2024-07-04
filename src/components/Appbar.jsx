import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 fixed w-full z-50 shadow-lg   ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-teal-400 font-bold text-2xl flex items-center animate__animated animate__fadeInDown">
          logo
        </a>
        <div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-teal-400 cursor-pointer" size={24} /> : <FaBars className="text-teal-400 cursor-pointer" size={24} />}
        </div>
        <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900 to-blue-700 p-4 z-40 transform ${isOpen ? 'translate-y-0 animate__animated animate__fadeInDown' : '-translate-y-full'} transition-transform duration-500 ease-in-out md:relative md:translate-y-0 md:flex md:items-center md:bg-transparent md:p-0 `}>
          <div className="flex justify-end  md:hidden">
            <div onClick={toggleMenu}>
              <FaTimes className="text-teal-400 cursor-pointer" size={24} />
            </div>
          </div>
          <ul className="flex flex-col items-center justify-center h-auto space-y-6 text-center md:flex-row md:space-x-6 md:space-y-0 md:text-left mt-7 md:mt-0 animate__animated animate__fadeInDown">
            <li><a  className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">Home</a></li>
            <li><a  className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">About</a></li>
            <li><a  className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">Roadmap</a></li>
            <li><a  className="text-teal-400 hover:text-teal-200 cursor-pointer text-xl">Token distripution</a></li>
          </ul>
        </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
