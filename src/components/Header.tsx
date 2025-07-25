import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <Logo />
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-teal-900 border-b-2 border-yellow' 
                      : isScrolled 
                        ? 'text-gray-800 hover:text-teal'
                        : isHome ? 'text-white hover:text-yellow' : 'text-teal hover:text-yellow'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-teal-900 border-b-2 border-yellow' 
                      : isScrolled 
                        ? 'text-gray-800 hover:text-teal'
                        : isHome ? 'text-white hover:text-yellow' : 'text-teal hover:text-yellow'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-teal-900 border-b-2 border-yellow' 
                      : isScrolled 
                        ? 'text-gray-800 hover:text-teal'
                        : isHome ? 'text-white hover:text-yellow' : 'text-teal hover:text-yellow'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-teal-900 border-b-2 border-yellow' 
                      : isScrolled 
                        ? 'text-gray-800 hover:text-teal'
                        : isHome ? 'text-white hover:text-yellow' : 'text-teal hover:text-yellow'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
            
            <NavLink 
              to="/quote" 
              className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                isScrolled
                  ? 'bg-teal text-white hover:bg-teal-700'
                  : 'bg-yellow text-teal hover:bg-yellow-400'
              }`}
            >
              Get a Quote
            </NavLink>
            
            <a 
              href="tel:+14167863541" 
              className="flex items-center space-x-2 text-base font-medium"
            >
              <div className={`rounded-full p-2 ${
                isScrolled ? 'bg-teal text-white' : 'bg-yellow text-teal'
              }`}>
                <Phone size={18} />
              </div>
              <span className={isScrolled ? 'text-gray-800' : isHome ? 'text-white' : 'text-teal'}>
                (416) 786-3541
              </span>
            </a>
          </div>

          <button 
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : isHome ? 'text-white' : 'text-teal'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : isHome ? 'text-white' : 'text-teal'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors duration-200 ${
                  isActive ? 'text-teal bg-gray-100' : 'text-gray-800 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors duration-200 ${
                  isActive ? 'text-teal bg-gray-100' : 'text-gray-800 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors duration-200 ${
                  isActive ? 'text-teal bg-gray-100' : 'text-gray-800 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-base font-medium p-2 transition-colors duration-200 ${
                  isActive ? 'text-teal bg-gray-100' : 'text-gray-800 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/quote" 
              className="py-3 px-4 rounded-md text-center bg-teal text-white font-medium hover:bg-teal-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </NavLink>
            <a 
              href="tel:+14167863541" 
              className="flex items-center justify-center space-x-2 p-2 text-gray-800 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="rounded-full p-2 bg-teal text-white">
                <Phone size={18} />
              </div>
              <span>(416) 786-3541</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;