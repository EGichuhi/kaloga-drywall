import React, { useState, useEffect } from 'react';
import { CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const QuotePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    serviceType: '',
    projectDescription: '',
    projectTimeline: '',
    budget: '',
    howDidYouHear: '',
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
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await emailjs.send(
        'sservice_bfqi75h', // Replace with your service ID
        'template_s7v7cd6', // Replace with your template ID
        formData,
        'OI-Te6SPHn4FSg9IK' // Replace with your public key
      );
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        serviceType: '',
        projectDescription: '',
        projectTimeline: '',
        budget: '',
        howDidYouHear: '',
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('There was an error submitting your request. Please try again later.');
    }
  };
  

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 size={64} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Request!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your quote request has been successfully submitted. One of our representatives will contact you within 24 hours to discuss your project in detail.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <div className="flex items-center">
              <Phone size={20} className="text-teal mr-2" />
              <span>(416) 786-3541</span>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="text-teal mr-2" />
              <span>info@kalogadrywall.com</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="text-teal mr-2" />
              <span>Mon-Fri: 8am-6pm</span>
            </div>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-teal hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <div className="relative bg-teal py-20 mb-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Request a Free Quote</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Fill out the form below to get a free, no-obligation quote for your drywall project.
            Our team will get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Form Section */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tell Us About Your Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-600">*</span>
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
                  
                  {/* Email */}
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
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  
                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200 ${
                        errors.serviceType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="Drywall Installation">Drywall Installation</option>
                      <option value="Drywall Repair">Drywall Repair</option>
                      <option value="Texture Application">Texture Application</option>
                      <option value="Popcorn Removal">Popcorn Removal</option>
                      <option value="Painting">Painting</option>
                      <option value="Commercial Services">Commercial Services</option>
                      <option value="Other">Other (Please specify in description)</option>
                    </select>
                    {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>}
                  </div>
                </div>
                
                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  {/* State */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  {/* ZIP */}
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>
                
                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Please describe your project including dimensions, current condition, and what you'd like done."
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200 ${
                      errors.projectDescription ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.projectDescription && <p className="mt-1 text-sm text-red-600">{errors.projectDescription}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Timeline */}
                  <div>
                    <label htmlFor="projectTimeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Timeline
                    </label>
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      value={formData.projectTimeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a timeline</option>
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within 1-2 weeks">Within 1-2 weeks</option>
                      <option value="Within a month">Within a month</option>
                      <option value="In 1-3 months">In 1-3 months</option>
                      <option value="Just planning for now">Just planning for now</option>
                    </select>
                  </div>
                  
                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a budget range</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="Over $25,000">Over $25,000</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>
                
                {/* How did you hear about us */}
                <div>
                  <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <select
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Friend or Family">Friend or Family</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Online Review">Online Review</option>
                    <option value="Previous Customer">Previous Customer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-yellow hover:bg-yellow-400 text-teal font-medium py-3 px-6 rounded-md transition-colors duration-300 text-lg"
                  >
                    Submit Quote Request
                  </button>
                  <p className="mt-2 text-sm text-gray-600 text-center">
                    * Required fields
                  </p>
                </div>
              </form>
            </div>
            
            {/* Info Section */}
            <div className="md:w-1/3 bg-teal p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+14167863541" className="text-gray-200 hover:text-white transition-colors duration-200">
                      (416) 786-3541
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@kalogadrywall.com" className="text-gray-200 hover:text-white transition-colors duration-200">
                      info@kalogadrywall.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-200">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-200">Saturday: 9am - 2pm</p>
                    <p className="text-gray-200">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-yellow flex-shrink-0" />
                    <span>Free, no-obligation quotes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-yellow flex-shrink-0" />
                    <span>Licensed and insured professionals</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-yellow flex-shrink-0" />
                    <span>10+ years of industry experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-yellow flex-shrink-0" />
                    <span>Satisfaction guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-yellow flex-shrink-0" />
                    <span>Competitive pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
