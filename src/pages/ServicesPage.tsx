import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ServiceDetail from '../components/ServiceDetail';
import popcornImage from '../assets/images/popcorn.jpg';
import textureImage from '../assets/images/texture.jpg';
import commercialImage from '../assets/images/commercial.jpg'; 
import drywall2Image from '../assets/images/drywall2.jpg';
import bna1Image from '../assets/images/bna1.jpg';
import kitchenImage from '../assets/images/kitchen.png';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <div className="relative bg-teal py-20 mb-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Professional drywall solutions for residential and commercial properties.
            Quality craftsmanship guaranteed.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Drywall Services</h2>
              <div className="w-24 h-1 bg-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                From new installations to repairs and specialty finishes, we provide a full range of drywall services
                for both residential and commercial clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-teal">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">New home drywall installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Home renovation drywall updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Basement finishing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Ceiling repairs and popcorn removal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Patching and small repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Custom texture applications</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-yellow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Office buildings and retail spaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Restaurants and hospitality venues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Medical facilities and clean rooms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Multi-unit housing and apartments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Tenant improvements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-teal mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Fire-rated assemblies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ServiceDetail 
              title="Drywall Installation"
              description="Complete drywall installation services for new construction or renovation projects with precision and attention to detail. We handle everything from framing to finishing."
              features={[
                "Metal and wood stud framing",
                "Sheetrock hanging and finishing",
                "Moisture-resistant drywall for bathrooms",
                "Fire-resistant drywall",
                "Sound-dampening solutions",
                "Insulation installation"
              ]}
              image={bna1Image}
              reversed={false}
            />
            
            <ServiceDetail 
              title="Drywall Repair"
              description="Expert repair of holes, cracks, water damage, and other drywall issues to restore your walls to perfect condition. No job is too small or too complex for our skilled team."
              features={[
                "Patching holes and cracks",
                "Water damage restoration",
                "Settlement crack repair",
                "Stress crack remediation",
                "Corner bead replacement",
                "Seamless matching of existing textures"
              ]}
              image={drywall2Image}
              reversed={true}
            />
            
            <ServiceDetail 
              title="Texture Application"
              description="Custom texture applications to match existing walls or create a new look for your space. Our skilled technicians can replicate any texture style or create something completely custom."
              features={[
                "Knockdown texture",
                "Orange peel texture",
                "Skip trowel finish",
                "Smooth finish",
                "Custom artistic textures",
                "Texture matching for repairs and additions"
              ]}
              image={textureImage}
              reversed={false}
            />
            
            <ServiceDetail 
              title="Popcorn Ceiling Removal"
              description="Professional removal of outdated popcorn ceilings for a smooth, modern finish. Our dust containment systems minimize mess during the removal process."
              features={[
                "Complete popcorn texture removal",
                "Ceiling repair and re-texturing",
                "Smooth ceiling finish",
                "Preparation for painting",
                "Ceiling paint prep",
                "LED lighting installation prep"
              ]}
              image={popcornImage}
              reversed={true}
            />
            
            <ServiceDetail 
              title="Painting Services"
              description="Complete interior painting services to give your newly finished walls the perfect color and finish. We offer color consultation to help you choose the perfect palette."
              features={[
                "Interior wall painting",
                "Ceiling painting",
                "Cabinet painting",
                "Trim and molding painting",
                "Color consultation",
                "Eco-friendly paint options"
              ]}
              image={kitchenImage}
              reversed={false}
            />
            
            <ServiceDetail 
              title="Commercial Drywall Services"
              description="Specialized drywall solutions for office buildings, retail spaces, and other commercial properties. We understand the unique requirements of commercial spaces."
              features={[
                "Fire-rated assemblies",
                "Acoustic solutions",
                "Tenant improvements",
                "Steel stud framing",
                "Commercial-grade materials",
                "After-hours scheduling available"
              ]}
              image={commercialImage}
              reversed={true}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <div className="w-24 h-1 bg-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your project is completed efficiently, 
                with the highest quality standards and minimal disruption to your home or business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Consultation</h3>
                <p className="text-gray-700 text-center">
                  We begin with a thorough consultation to understand your project needs, timeline, and budget.
                </p>
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
              </div>
              
              <div className="relative">
                <div className="bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Detailed Quote</h3>
                <p className="text-gray-700 text-center">
                  We provide a comprehensive quote outlining all costs, materials, timeline, and scope of work.
                </p>
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
              </div>
              
              <div className="relative">
                <div className="bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Project Execution</h3>
                <p className="text-gray-700 text-center">
                  Our experienced team works efficiently to complete your project with minimal disruption.
                </p>
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
              </div>
              
              <div>
                <div className="bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Final Inspection</h3>
                <p className="text-gray-700 text-center">
                  We complete a thorough inspection with you to ensure your complete satisfaction with the finished work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-yellow mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does a typical drywall project take?</h3>
                <p className="text-gray-700">
                  Project duration varies based on size and complexity. A standard room repair might take 1-2 days, while a whole-house installation could take 1-2 weeks. We provide specific timeline estimates with every quote.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Are you licensed and insured?</h3>
                <p className="text-gray-700">
                  Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your peace of mind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do you handle dust and clean-up?</h3>
                <p className="text-gray-700">
                  We use dust containment systems and plastic barriers to minimize dust spread. We clean the work area daily and perform a thorough clean-up upon project completion.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you provide warranties on your work?</h3>
                <p className="text-gray-700">
                  Yes, we offer a 1-year warranty on workmanship for all our drywall services. This covers any issues that might arise from the installation or repair process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What types of payment do you accept?</h3>
                <p className="text-gray-700">
                  We accept cash, checks, and all major credit cards. For larger projects, we typically require a deposit, with the balance due upon completion.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you match existing texture?</h3>
                <p className="text-gray-700">
                  Yes, our experienced technicians are skilled at matching existing textures for seamless repairs and additions, ensuring a uniform look across your walls and ceilings.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Drywall Project?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact us today for a free, no-obligation quote and consultation. We're here to help bring your vision to life.
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
    </div>
  );
};

export default ServicesPage;