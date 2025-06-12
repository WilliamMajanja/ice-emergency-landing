import React, { useState } from 'react';
import {
  Menu, X, Shield, Siren, PhoneCall, MapPin, MessageCircle, Heart, FolderPlus, Lightbulb, UserCheck, Search, Cloud,
} from 'lucide-react';

// Main App Component
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-2xl font-bold text-gray-800">In Cases Of Emergency</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200">
                Services
              </a>
              <a href="#preparedness" className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200">
                Preparedness
              </a>
              <a href="#about" className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200">
                About Us
              </a>
              <a href="#contact" className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200">
                Contact
              </a>
            </div>

            {/* Call to Action - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-5 py-2 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 transition-colors duration-200 shadow-sm">
                Log In
              </button>
              <button className="px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 shadow-md">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
              <a
                href="#preparedness"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                onClick={toggleMobileMenu}
              >
                Preparedness
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 px-2 space-y-1">
                <button className="block w-full px-3 py-2 rounded-md text-base font-medium text-red-700 bg-red-100 hover:bg-red-200 text-left">
                  Log In
                </button>
                <button className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 text-left">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-red-50 to-orange-100 py-20 sm:py-32 rounded-b-xl shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Safety Net, <span className="text-red-600">In Cases Of Emergency.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Providing essential tools and resources for emergency preparedness, rapid alerts, and crisis communication when it matters most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 shadow-lg transform transition-transform duration-200 hover:scale-105">
              Explore Our Services
            </button>
            <button className="px-8 py-3 border-2 border-red-600 text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-10 shadow-lg transform transition-transform duration-200 hover:scale-105 flex items-center justify-center">
              <FolderPlus className="h-5 w-5 mr-2" /> Build Your Plan
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Key Services for Your Peace of Mind
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6">
                <Siren className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Alert System</h3>
              <p className="text-gray-700">
                Receive instant notifications for local emergencies, weather warnings, and critical updates.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <PhoneCall className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contact Management</h3>
              <p className="text-gray-700">
                Securely store and quickly access your emergency contacts, family, and medical information.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safe Zone & Evacuation Routes</h3>
              <p className="text-gray-700">
                Locate designated safe zones and optimize evacuation routes based on real-time data.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Two-Way Communication</h3>
              <p className="text-gray-700">
                Facilitate communication with loved ones and emergency services even in compromised network conditions.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medical & Health Profiles</h3>
              <p className="text-gray-700">
                Store vital health information, allergies, and medication lists for quick access by first responders.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-6">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Offline Access & Data Sync</h3>
              <p className="text-gray-700">
                Access critical information even without internet, with seamless data synchronization when connectivity is restored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparedness Section */}
      <section id="preparedness" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
            Be Prepared, Not Scared
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Preparedness Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <Lightbulb className="h-10 w-10 text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Checklists</h3>
              <p className="text-gray-700">
                Comprehensive checklists for various scenarios: natural disasters, home safety, and travel.
              </p>
            </div>

            {/* Preparedness Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <UserCheck className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Communication Plan</h3>
              <p className="text-gray-700">
                Create and share a clear communication plan for your family members in case of separation.
              </p>
            </div>

            {/* Preparedness Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <Search className="h-10 w-10 text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Finder</h3>
              <p className="text-gray-700">
                Locate nearby hospitals, shelters, police stations, and other essential resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-700 text-white rounded-t-xl shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Secure Your Future, Starting Today.
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Don't wait for an emergency. Take proactive steps to protect yourself and your loved ones.
          </p>
          <button className="px-10 py-4 border border-white text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-12 shadow-xl transform transition-transform duration-200 hover:scale-105">
            Create My Emergency Plan
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Logo and Tagline */}
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-7 w-7 text-red-400" />
                <span className="ml-2 text-xl font-bold text-white">In Cases Of Emergency</span>
              </div>
              <p className="text-sm">
                Your reliable partner in safety and preparedness.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="#preparedness" className="hover:text-white transition-colors duration-200">Preparedness</a></li>
                <li><a href="#about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div id="contact">
              <h3 className="text-white font-bold mb-4">Contact Us</h3>
              <p className="text-sm">
                Email: help@incasesofemergency.com<br />
                Address: 456 Safety Blvd, Preparedness City
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} In Cases Of Emergency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
