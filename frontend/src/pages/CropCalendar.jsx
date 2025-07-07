import React, { useState } from 'react';
import { getCropCalendar, addReminder, getReminders } from '../services/calendar';
import CalendarView from '../components/CalendarView';
import ReminderForm from '../components/ReminderForm';

const CropCalendar = () => {
  const [crop, setCrop] = useState('');
  const [district, setDistrict] = useState('');
  const [calendar, setCalendar] = useState(null);
  const [reminders, setReminders] = useState([]);

  const fetchCalendar = () => {
    getCropCalendar(crop, district).then(res => setCalendar(res.data));
  };

  const fetchReminders = () => {
    getReminders().then(res => setReminders(res.data));
  };

  const handleAddReminder = (reminder) => {
    addReminder(reminder).then(fetchReminders);
  };

  React.useEffect(() => {
    fetchReminders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Crop Calendar & Reminders</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Crop"
            value={crop}
            onChange={e => setCrop(e.target.value)}
            className="border p-2 rounded w-1/2"
          />
          <input
            type="text"
            placeholder="District"
            value={district}
            onChange={e => setDistrict(e.target.value)}
            className="border p-2 rounded w-1/2"
          />
          <button onClick={fetchCalendar} className="bg-green-600 text-white px-4 py-2 rounded">
            Show Calendar
          </button>
        </div>
        <CalendarView calendar={calendar} />
        <ReminderForm onAdd={handleAddReminder} />
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Your Reminders</h2>
          <ul>
            {reminders.map((rem, idx) => (
              <li key={idx} className="mb-1">
                <span className="font-medium">{rem.activity}</span> on <span className="text-green-700">{rem.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CropCalendar;