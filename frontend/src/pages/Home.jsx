import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, logout } from '../services/auth';

const features = [
  {
    to: '/price-prediction',
    title: 'Price Prediction',
    description: 'Forecast commodity prices with precision.',
    icon: (
      <svg className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 0V6m0 12v2" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-green-500 to-green-700',
  },
  {
    to: '/historical-data',
    title: 'Historical Data',
    description: 'Explore past price trends and insights.',
    icon: (
      <svg className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-green-400 to-green-600',
  },
  {
    to: '/crop-prediction',
    title: 'Crop Prediction',
    description: 'Find the best crops for your conditions.',
    icon: (
      <svg className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-green-300 to-green-500',
  },
  {
    to: '/weather',
    title: 'Weather Forecast',
    description: 'Check real-time weather for your location.',
    icon: (
      <svg className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 15a4 4 0 004 4h10a4 4 0 100-8 5.5 5.5 0 00-10.9 1.5A4 4 0 003 15z" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-blue-400 to-green-400',
  },
  {
    to: '/market-comparison',
    title: 'Market Comparison',
    description: 'Compare prices across markets visually.',
    icon: (
      <svg className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4v12" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-yellow-400 to-green-500',
  },
  {
    to: '/crop-calendar',
    title: 'Crop Calendar',
    description: 'View sowing/harvesting times & set reminders.',
    icon: (
      <svg className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform duration-300"
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    color: 'bg-gradient-to-br from-pink-400 to-green-400',
  },
];

const testimonials = [
  {
    name: "Ravi, Farmer",
    text: "This app helped me plan my crops and get better prices at the market. The weather and calendar features are a game changer!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sunita, Agri-Consultant",
    text: "The market comparison tool is fantastic for advising my clients. Highly recommended for anyone in agriculture.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const token = getToken();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center p-0 sm:p-0">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 left-0 z-10">
        <Link to="/" className="text-2xl font-bold text-green-700 tracking-tight">AgriPredictor</Link>
        <div>
          {!token ? (
            <>
              <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded mr-2 hover:bg-green-700 transition">Login</Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Logout</button>
          )}
        </div>
      </nav>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center pt-28">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4 animate-fade-in drop-shadow-lg">
          Welcome to the Agricultural Prediction App
        </h1>
        <p className="text-lg sm:text-xl text-green-700 mb-8 animate-fade-in-delay">
          Discover powerful tools to predict crop prices, analyze historical data, compare markets, find the best crops for your land, check real-time weather forecasts, and manage your crop calendar!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {features.map((feature, idx) => (
            <Link
              key={feature.title}
              to={feature.to}
              className={`group relative ${feature.color} text-white px-6 py-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <span className="text-xl font-bold mt-1">{feature.title}</span>
                <p className="text-sm text-green-50 mt-2 text-center">{feature.description}</p>
              </div>
              <span className="absolute top-2 right-4 text-xs bg-white text-green-700 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                Explore
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-green-800">
          <span className="font-semibold">Tip:</span> Hover over each card to learn more. Try the new <Link to="/market-comparison" className="underline text-green-700 hover:text-green-900">Market Comparison</Link> and <Link to="/crop-calendar" className="underline text-green-700 hover:text-green-900">Crop Calendar</Link> tools!
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-700 mb-6">What our users say</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center max-w-xs">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-3 border-2 border-green-400" />
                <p className="italic text-green-900 mb-2">"{t.text}"</p>
                <span className="font-semibold text-green-700">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;