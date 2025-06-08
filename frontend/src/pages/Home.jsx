import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
          Welcome to the Agricultural Prediction App
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 animate-fade-in-delay">
          Discover powerful tools to predict crop prices, analyze historical data, and find the best crops for your land.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Link
            to="/price-prediction"
            className="group relative bg-green-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 0V6m0 12v2"
                />
              </svg>
              <span className="text-lg font-semibold">Price Prediction</span>
              <p className="text-sm text-gray-100 mt-1">Forecast commodity prices with precision.</p>
            </div>
          </Link>
          <Link
            to="/historical-data"
            className="group relative bg-green-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-lg font-semibold">Historical Data</span>
              <p className="text-sm text-gray-100 mt-1">Explore past price trends and insights.</p>
            </div>
          </Link>
          <Link
            to="/crop-prediction"
            className="group relative bg-green-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg font-semibold">Crop Prediction</span>
              <p className="text-sm text-gray-100 mt-1">Find the best crops for your conditions.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;