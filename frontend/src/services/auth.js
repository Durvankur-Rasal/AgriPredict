// filepath: [auth.js](http://_vscodecontentref_/2)
import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const register = (data) => axios.post(`${API_URL}/register`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);

export const logout = () => {
  localStorage.removeItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};