import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Check, ArrowRight } from 'lucide-react';

// Define the portfolio item interface
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  images: string[];
  tags: string[];
}

// Sample portfolio data
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Living Room Renovation",
    category: "Residential",
    location: "Seattle, WA",
    description: "Complete drywall installation and custom texture application for a modern living room renovation. The project included removing old paneling, installing new drywall, and applying a custom smooth finish.",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: ["Drywall Installation", "Texture Application", "Renovation"]
  },
  {
    id: 2,
    title: "Office Space Remodeling",
    category: "Commercial",
    location: "Portland, OR",
    description: "Commercial office renovation with fire-rated drywall partitions and acoustic ceiling installation. The project transformed an open office into private offices with sound insulation properties.",
    images: [
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: ["Commercial", "Fire-Rated Drywall", "Acoustic Ceilings"]
  },
  {
    id: 3,
    title: "Custom Ceiling Design",
    category: "Specialty",
    location: "San Francisco, CA",
    description: "Custom tray ceiling with recessed lighting for a luxury home. The project included complex framing, drywall installation, and finishing to create a dramatic ceiling feature.",
    images: [
      "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: ["Custom Design", "Ceiling Work", "Luxury"]
  },
  {
    id: 4,
    title: "Water Damage Restoration",
    category: "Repair",
    location: "Vancouver, WA",
    description: "Complete water damage restoration after a pipe burst. The project included removing damaged drywall, treating for mold, and installing new moisture-resistant drywall.",
    images: [
      "https://images.pexels.com/photos/8134794/pexels-photo-8134794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8134800/pexels-photo-8134800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8134810/pexels-photo-8134810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: ["Repair", "Water Damage", "Restoration"]
  },
  {
    id: 5,
    title: "New Home Construction",
    category: "Residential",
    location: "Bellevue, WA",
    description: "Complete drywall installation for a new 4,000 sq ft custom home. The project included hanging, taping, and texturing all interior walls and ceilings.",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: ["New Construction", "Residential", "Texture"]
  },
  {
    id: 6,
    title: "Retail Store Renovation",
    category: "Commercial",
    location: "Seattle, WA",
    description: "Commercial renovation for a high-end retail store. The project included custom display niches, suspended ceiling elements, and specialty finishes.",
    images: [
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1884573/pexels-photo-1884573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: ["Commercial", "Retail", "Custom Work"]
  }
];

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [filter, setFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioData);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const categories = ['All', 'Residential', 'Commercial', 'Specialty', 'Repair'];
  
  useEffect(() => {
    if (filter === 'All') {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(portfolioData.filter(item => item.category === filter));
    }
  }, [filter]);
  
  const openProjectDetail = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectDetail = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };
  
  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <div className="relative bg-teal py-20 mb-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Browse our completed projects and see the quality of our drywall services firsthand.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-center mb-12 gap-3">
            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center mr-2">
              <Filter size={18} className="text-teal mr-2" />
              <span className="text-gray-700 font-medium">Filter:</span>
            </div>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 flex items-center ${
                  filter === category 
                    ? 'bg-teal text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter === category && <Check size={16} className="mr-1" />}
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openProjectDetail(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.images[0]} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-yellow text-teal text-sm font-medium px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-200 text-sm">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
              <button
                onClick={() => setFilter('All')}
                className="mt-4 px-4 py-2 bg-teal text-white rounded-md hover:bg-teal-700 transition-colors duration-200"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <div className="h-[50vh] bg-gray-100">
                <img 
                  src={selectedItem.images[currentImageIndex]} 
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation arrows */}
                {selectedItem.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image pagination */}
                {selectedItem.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {selectedItem.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className={`w-3 h-3 rounded-full ${
                          currentImageIndex === index ? 'bg-yellow' : 'bg-white bg-opacity-50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Close button */}
                <button 
                  onClick={(e) => { e.stopPropagation(); closeProjectDetail(); }}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                  <span className="bg-yellow text-teal text-sm font-medium px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2">
                  <strong>Location:</strong> {selectedItem.location}
                </p>
                
                <p className="text-gray-700 mb-6">
                  {selectedItem.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Link 
                    to="/quote" 
                    className="bg-teal hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Request Similar Project <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 mt-16 bg-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Drywall Project?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact us today for a free, no-obligation quote and consultation. Let us bring your vision to life with our expert craftsmanship.
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

export default PortfolioPage;