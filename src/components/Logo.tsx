import React from 'react';
import KDImage from '../assets/images/KD.png'; 

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src={KDImage}
        alt="Kaloga Drywall Logo" 
        className="h-10 w-10 object-contain"
      />
      <div className="flex flex-col">
        <span className="font-bold text-xl text-teal leading-tight">KALOGA</span>
        <span className="font-medium text-sm text-gray-600 leading-tight">DRYWALL</span>
      </div>
    </div>
  );
};

export default Logo;