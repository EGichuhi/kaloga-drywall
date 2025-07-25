import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 mt-4">
              Professional drywall services with over 15 years of experience. Quality workmanship guaranteed.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-teal hover:bg-teal-700 p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-teal hover:bg-teal-700 p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-teal hover:bg-teal-700 p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Portfolio
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Drywall Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Drywall Repair
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Texture Application
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Popcorn Removal
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Painting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow flex items-center transition-colors duration-200">
                  <ArrowRight size={14} className="mr-2" /> Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Construction Ave, Building City, ST 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors duration-200">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow flex-shrink-0" />
                <a href="mailto:info@kalogadrywall.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  info@kalogadrywall.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/quote" 
                className="bg-yellow hover:bg-yellow-400 text-teal font-medium py-2 px-4 rounded transition-colors duration-300 inline-flex items-center"
              >
                Get a Free Quote <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} Kaloga Drywall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;