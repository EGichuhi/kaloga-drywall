import React from 'react';
import KDImage from '../assets/images/KD.png'; 

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-yellow rounded-full p-2">
        <img 
          src={KDImage}
          alt="Kaloga Drywall Logo" 
          className="h-6 w-6 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl text-teal leading-tight">KALOGA</span>
        <span className="font-medium text-sm text-gray-600 leading-tight">DRYWALL</span>
      </div>
    </div>
  );
};

export default Logo;