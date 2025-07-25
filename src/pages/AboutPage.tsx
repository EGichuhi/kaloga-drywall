import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Clock, Award, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <div className="relative bg-teal py-20 mb-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Kaloga Drywall</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            A trusted drywall contractor with over 10 years of experience delivering quality craftsmanship.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://images.pexels.com/photos/8134789/pexels-photo-8134789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="About Kaloga Drywall" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <div className="w-16 h-1 bg-yellow mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Founded in 2016, Kaloga Drywall has established itself as a leading drywall contractor serving residential and commercial clients throughout the region.
                </p>
                <p className="text-gray-700 mb-4">
                  What began as a small family business has grown into a trusted company known for exceptional craftsmanship, reliability, and customer satisfaction. Our founder, Alex Kaloga, brought over a decade of industry experience when he established the company with a mission to deliver superior drywall services.
                </p>
                <p className="text-gray-700 mb-4">
                  Today, our team of skilled professionals continues that tradition of excellence, bringing expertise and dedication to every project, big or small.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/services" 
                    className="bg-teal hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
                  >
                    Explore Our Services <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
              <div className="w-24 h-1 bg-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to delivering exceptional quality while maintaining the highest standards of professionalism and customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To provide superior drywall services that enhance the beauty, functionality, and value of residential and commercial properties while exceeding customer expectations through craftsmanship, reliability, and integrity.
                </p>
                <p className="text-gray-700">
                  We aim to build lasting relationships with our clients by delivering projects on time, within budget, and with unwavering attention to detail and quality.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-teal mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Quality:</strong> We take pride in our work and never compromise on quality, using only premium materials and proven techniques.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-teal mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Integrity:</strong> We operate with honesty and transparency in all aspects of our business, from pricing to project execution.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-teal mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Reliability:</strong> We honor our commitments, meet deadlines, and communicate clearly throughout the project.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-teal mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Respect:</strong> We treat every customer, property, and team member with respect and professionalism.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kaloga Drywall?</h2>
              <div className="w-24 h-1 bg-yellow mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Expertise</h3>
                <p className="text-gray-700">
                  Our team consists of skilled professionals with years of experience in all aspects of drywall installation, repair, and finishing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guarantee</h3>
                <p className="text-gray-700">
                  We stand behind our work with a satisfaction guarantee and use only premium materials to ensure long-lasting results.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Clock className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Completion</h3>
                <p className="text-gray-700">
                  We respect your time and ensure projects are completed according to schedule without sacrificing quality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-teal w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
                <p className="text-gray-700">
                  We prioritize your satisfaction, listening to your needs and providing personalized solutions that meet your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project with Us?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact us today for a free, no-obligation quote and consultation for your drywall project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/quote" 
                className="bg-yellow hover:bg-yellow-400 text-teal font-medium py-3 px-8 rounded-md transition-colors duration-300 text-lg"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white hover:border-yellow hover:text-yellow text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;