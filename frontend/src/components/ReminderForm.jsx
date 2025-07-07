import React, { useState } from 'react';

const ReminderForm = ({ onAdd }) => {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (activity && date) {
      onAdd({ activity, date });
      setActivity('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-lg font-semibold mb-2">Set Reminder</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={e => setActivity(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add Reminder
      </button>
    </form>
  );
};

export default ReminderForm;