import React, { useState } from 'react';
import { getWeatherByCity, getWeatherByCoords } from '../services/weather';

const WeatherWidget = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setError('');
    setWeather(null);
    try {
      const res = await getWeatherByCity(city);
      setWeather(res.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Could not fetch weather. Check city name.');
      }
    }
  };

  const fetchWeatherByLocation = () => {
    setError('');
    setWeather(null);
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          const res = await getWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
          setWeather(res.data);
        } catch (err) {
          setError('Could not fetch weather for your location.');
        }
      },
      () => {
        setError('Unable to retrieve your location.');
      }
    );
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md mx-auto">
      <h3 className="font-bold mb-4 text-xl text-center">Weather Forecast</h3>
      <div className="flex mb-4">
        <input
          className="border p-2 flex-1 rounded-l"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button
          className="bg-green-600 text-white px-4 rounded-r"
          onClick={fetchWeather}
        >
          Get Weather
        </button>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-2 w-full"
        onClick={fetchWeatherByLocation}
      >
        Use My Location
      </button>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {weather && (
        <div className="mt-3 text-center">
          <div className="font-semibold text-lg">{weather.name}</div>
          <div className="capitalize">{weather.weather[0].description}</div>
          <div>Temp: {weather.main.temp}°C</div>
          <div>Humidity: {weather.main.humidity}%</div>
          <div>Wind: {weather.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;