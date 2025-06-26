import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Jennifer Anderson',
    role: 'Homeowner',
    content: 'Kaloga Drywall did an amazing job on our home renovation. Their attention to detail and quality of work is outstanding. The team was professional, punctual, and left the site clean every day. I highly recommend their services!',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Roberts',
    role: 'Property Manager',
    content: 'We\'ve used Kaloga Drywall for multiple properties and they consistently deliver exceptional results. Their team is knowledgeable, efficient, and their pricing is fair. They\'ve become our go-to drywall contractors.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    role: 'Interior Designer',
    content: 'As an interior designer, I need contractors who can execute my vision perfectly. Kaloga Drywall has exceeded my expectations every time. Their craftsmanship and ability to handle complex designs make them an invaluable partner.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'General Contractor',
    content: 'I\'ve worked with many drywall companies over the years, and Kaloga Drywall is by far the most reliable and skilled. They meet deadlines, communicate effectively, and the quality of their work is consistently excellent.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonials, setActiveTestimonials] = useState<number[]>([]);
  
  const itemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };
  
  useEffect(() => {
    const updateActiveTestimonials = () => {
      const count = itemsToShow();
      const indices = [];
      for (let i = 0; i < count; i++) {
        indices.push((currentIndex + i) % testimonials.length);
      }
      setActiveTestimonials(indices);
    };
    
    updateActiveTestimonials();
    
    const handleResize = () => {
      updateActiveTestimonials();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < rating ? 'text-yellow fill-yellow' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Customer Testimonials</h3>
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTestimonials.map((index) => {
          const testimonial = testimonials[index];
          return (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSlider;