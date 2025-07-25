import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Paintbrush, Eraser, Building, Brush, Package } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'Hammer':
        return <Hammer size={24} className="text-teal" />;
      case 'Paintbrush':
        return <Paintbrush size={24} className="text-teal" />;
      case 'Eraser':
        return <Eraser size={24} className="text-teal" />;
      case 'Building':
        return <Building size={24} className="text-teal" />;
      case 'Brush':
        return <Brush size={24} className="text-teal" />;
      case 'Install':
        return <Package size={24} className="text-teal" />;
      default:
        return <Hammer size={24} className="text-teal" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            to="/services" 
            className="bg-yellow text-teal font-medium py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to="/services" 
          className="inline-flex items-center text-teal hover:text-teal-700 font-medium transition-colors duration-200"
        >
          Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;