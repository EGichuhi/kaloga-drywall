import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  reversed?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
  title, 
  description, 
  features, 
  image, 
  reversed = false 
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 py-12 border-b border-gray-200`}>
      <div className="md:w-1/2">
        <div className="relative h-72 md:h-full overflow-hidden rounded-lg shadow-md">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="w-16 h-1 bg-yellow mb-6"></div>
        <p className="text-gray-700 mb-6">
          {description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;