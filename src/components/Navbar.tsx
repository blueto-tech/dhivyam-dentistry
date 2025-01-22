import { Menu, X, Stethoscope } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dd from '../assets/dd2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // ----------Close the mobile menu after scroll-------
    setTimeout(() => {
      setIsOpen(false);
    }, 1000); 
   
    
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md h-16 top-0' : 'bg-transparent h-20 top-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
             
            >
              {/* <div
  className={`w-5 h-1 ${isScrolled ? 'bg-blue-600' : 'bg-white'}`}
  style={{ backgroundImage: `url(${dd})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
>
</div> */}
<div className="logo"></div>
              {/* <Stethoscope className={`w-5 h-5 ${isScrolled ? 'text-blue-600' : 'text-white'}`} /> */}
              <img src={dd} alt='DD' className={`w-9 h-9 ${isScrolled ? 'text-blue-600' : 'text-white'}`}/>
            </motion.div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}>
              Dhivyam Dentistry
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Services
            </button>
            
            <button
              onClick={() =>{
                scrollToSection('appointment')
              
              } }
              className={`px-5 py-2 rounded-full text-sm transition-colors duration-300 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-900 hover:bg-gray-100'
              }`}
            >
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            Services
          </button>
         
          <button
            onClick={() => {
              scrollToSection('appointment')
             
            }}
            className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Book Appointment
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}