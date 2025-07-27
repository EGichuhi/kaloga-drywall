import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    if (errors[name] && value.trim()) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        console.error('Failed to send message');
        // You might want to show an error message to user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors
    }
  }
};

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <div className="relative bg-teal py-20 mb-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Have questions or ready to start your drywall project? Get in touch with our team today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+14167863541" 
                className="text-gray-600 hover:text-teal transition-colors duration-200"
              >
                (416) 786-3541
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:info@kalogadrywall.com" 
                className="text-gray-600 hover:text-teal transition-colors duration-200"
              >
                info@kalogadrywall.com
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                Toronto, ON
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Mon-Fri: 8am - 6pm<br />
                Sat: 9am - 2pm<br />
                Sun: Closed
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Map Section */}
              <div className="md:w-1/2 h-96 md:h-auto bg-gray-200 flex items-center justify-center p-4">
                <iframe
                  title="Toronto Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184422.0!2d-79.387207!3d43.653963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b8b1c8b1%3A0x4c5e1e5f1f1f1f1f!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 rounded-full p-2">
                        <Send size={24} className="text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200 ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-teal hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
              <div className="w-24 h-1 bg-yellow mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                We provide drywall services throughout the following areas. Contact us to confirm service availability for your location.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  West GTA
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Mississauga</li>
                  <li>Brampton</li>
                  <li>Caledon</li>
                  <li>Oakville</li>
                  <li>Burlington</li>
                  <li>Milton</li>
                  <li>Halton Hills</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Central GTA
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Toronto</li>
                  <li>Downtown</li>
                  <li>Etobicoke</li>
                  <li>North York</li>
                  <li>York</li>
                  <li>East York</li>
                  <li>Scarborough</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  East GTA
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Pickering</li>
                  <li>Ajax</li>
                  <li>Whitby</li>
                  <li>Oshawa</li>
                  <li>Clarington</li>
                  <li>Brock</li>
                  <li>Markham</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
