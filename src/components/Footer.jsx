import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0 flex flex-col md:flex-row md:items-center">
          <div className="text-teal-400 font-bold text-2xl mb-4 md:mb-0 md:mr-4">logo</div>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li><a href="#home" className="text-teal-400 hover:text-teal-200 cursor-pointer">Home</a></li>
            <li><a href="#About" className="text-teal-400 hover:text-teal-200 cursor-pointer">About</a></li>
            <li><a href="#Roadmap" className="text-teal-400 hover:text-teal-200 cursor-pointer">Roadmap</a></li>
            <li><a href="#Token" className="text-teal-400 hover:text-teal-200 cursor-pointer">Token Distribution</a></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-300">123 Street, City Name, Country</p>
          <p className="text-gray-300">Email: info@example.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-teal-400 hover:text-teal-200">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-200">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-teal-400 hover:text-teal-200">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
