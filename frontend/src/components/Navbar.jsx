import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              AgriApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/price-prediction"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Price Prediction
            </Link>
            <Link
              to="/historical-data"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Historical Data
            </Link>
            <Link
              to="/crop-prediction"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Crop Prediction
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/price-prediction"
                className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Price Prediction
              </Link>
              <Link
                to="/historical-data"
                className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Historical Data
              </Link>
              <Link
                to="/crop-prediction"
                className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                Crop Prediction
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;