import axios from 'axios';

const API_KEY = 'f9a52711a3c979385274216cfac8b1ac'; // Replace with your API key

export const getWeatherByCity = (city) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

export const getWeatherByCoords = (lat, lon) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );