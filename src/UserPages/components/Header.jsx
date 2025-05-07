import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <h1 className="ml-2 text-2xl font-bold text-gray-900">Comforta</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/shopping" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/shopping') 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/aboutus" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/aboutus') 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contactus" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/contactus') 
                    ? 'text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center">
              <Link 
                to="/cart" 
                className="p-2 text-gray-700 hover:text-indigo-600 relative"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">2</span>
              </Link>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-4 md:hidden bg-white p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/shopping" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/shopping') 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/aboutus" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/aboutus') 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contactus" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contactus') 
                  ? 'bg-indigo-100 text-indigo-600' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
