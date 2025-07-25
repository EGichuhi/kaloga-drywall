import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, location, image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block bg-yellow text-teal text-sm font-medium px-3 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="flex items-center text-gray-200 text-sm mt-1">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <Link 
          to="/portfolio" 
          className="w-full block text-center text-teal hover:text-teal-700 font-medium transition-colors duration-200"
        >
          View Project Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;