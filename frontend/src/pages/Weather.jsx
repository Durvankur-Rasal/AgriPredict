import React from 'react';
import WeatherWidget from '../components/WeatherWidget';

const Weather = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-8">Real-Time Weather Forecast</h1>
    <WeatherWidget />
  </div>
);

export default Weather;