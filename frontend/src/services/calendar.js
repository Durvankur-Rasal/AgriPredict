import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getCropCalendar = (crop, district) =>
  axios.get(`${API_URL}/crop_calendar?crop=${crop}&district=${district}`);

export const addReminder = (reminder) =>
  axios.post(`${API_URL}/add_reminder`, reminder);

export const getReminders = () =>
  axios.get(`${API_URL}/reminders`);