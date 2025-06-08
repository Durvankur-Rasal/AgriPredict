import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getCommodities = () => axios.get(`${API_URL}/get_options`);
export const getDistricts = (commodity) => axios.get(`${API_URL}/get_options?commodity=${commodity}`);
export const getMarkets = (commodity, district) => axios.get(`${API_URL}/get_options?commodity=${commodity}&district=${district}`);
export const predictPrices = (data) => axios.post(`${API_URL}/predict`, data);
export const getHistoricalData = (commodity, district, market) => axios.get(`${API_URL}/historical?commodity=${commodity}&district=${district}&market=${market}`);
export const predictCrop = (data) => axios.post(`${API_URL}/api/predict_crop`, data);