import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, ThumbsUp, Landmark } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import noDrImage from '../assets/images/no-dr.jpg';
import drywallImage from '../assets/images/drywall.jpg';
import popcornImage from '../assets/images/popcorn.jpg';
import textureImage from '../assets/images/texture.jpg';
import paintingImage from '../assets/images/painting.jpg';
import drywallRepairImage from '../assets/images/drywall-repair.png';
import commercialImage from '../assets/images/commercial.jpg';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${noDrImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional <span className="text-yellow">Drywall Services</span><br />
            for Your Home and Business
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Top-quality drywall installation, repair, and finishing from experienced professionals you can trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/quote" 
              className="bg-yellow hover:bg-yellow-400 text-teal font-medium py-3 px-8 rounded-md transition-colors duration-300 text-lg"
            >
              Get a Free Quote
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white hover:border-yellow text-white hover:text-yellow font-medium py-3 px-8 rounded-md transition-colors duration-300 text-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/*}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-yellow mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in delivering exceptional drywall services with quality, 
              reliability, and customer satisfaction as our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Quality Guaranteed</h3>
              <p className="text-gray-600 text-center">
                We stand behind our work with a satisfaction guarantee and use only premium materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">On-Time Completion</h3>
              <p className="text-gray-600 text-center">
                We respect your time and ensure projects are completed according to schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">10+ Years Experience</h3>
              <p className="text-gray-600 text-center">
                Our skilled team brings over 10 years of expertise to every project, big or small.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Licensed</h3>
              <p className="text-gray-600 text-center">
                Fully licensed for your peace of mind on residential and commercial projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-yellow mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive drywall solutions for residential and commercial properties, 
              delivered with quality and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Drywall Installation"
              description="Complete drywall installation for new construction or renovation projects with precision and attention to detail."
              icon="Install"
              image={drywallImage}
            />
            <ServiceCard 
              title="Popcorn Removal"
              description="Professional removal of outdated popcorn ceilings for a smooth, modern finish."
              icon="Eraser"
              image={popcornImage}
            />
            <ServiceCard 
              title="Texture Application"
              description="Custom texture applications to match existing walls or create a new look for your space."
              icon="Brush"
              image={textureImage}
            />
            <ServiceCard 
              title="Painting Services"
              description="High-quality interior and exterior painting services to give your space a fresh, new look."
              icon="Paintbrush"
              image={paintingImage}
            />
            <ServiceCard 
              title="Drywall Repair"
              description="Expert drywall repair services to fix cracks, holes, and other damage seamlessly."
              icon="Hammer"
              image={drywallRepairImage}
            />
            <ServiceCard 
              title="Commercial Services"
              description="Comprehensive drywall solutions tailored for commercial properties and businesses."
              icon="Building"
              image={commercialImage}
            />
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/services" 
              className="inline-flex items-center text-teal hover:text-teal-700 font-medium transition-colors duration-200"
            >
              View All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section> 

      {/* CTA Section */}
      <section className="py-12 bg-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6 text-gray-200">
              Contact us today for a free, no-obligation quote and consultation for your drywall project.
            </p>
            <Link 
              to="/quote" 
              className="bg-yellow hover:bg-yellow-400 text-teal font-medium py-3 px-8 rounded-md transition-colors duration-300 text-lg inline-flex items-center"
            >
              Get a Free Quote <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {/*}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
            <div className="w-24 h-1 bg-yellow mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent work to see the quality and craftsmanship we bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Modern Living Room Renovation"
              category="Residential"
              location="Mississauga, ON"
              image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <ProjectCard 
              title="Office Space Remodeling"
              category="Commercial"
              location="Etobicoke, ON"
              image="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <ProjectCard 
              title="Custom Ceiling Design"
              category="Specialty"
              location="Brampton, ON"
              image="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>

          {/* 
          <div className="text-center mt-8">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-teal hover:text-teal-700 font-medium transition-colors duration-200"
            >
              View Full Portfolio <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          {/*}
        </div>
      </section> 
      */}

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-yellow mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our drywall services.
            </p>
          </div>

    {/* <TestimonialSlider /> */}

          <div className="text-center mt-8">
            <a 
              href="https://www.google.com/search?q=kaloga+drywall+google+reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-teal hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Read More on Google Reviews
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;