import React from 'react';

const CalendarView = ({ calendar }) => {
  if (!calendar) return null;
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Crop Calendar</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Activity</th>
            <th className="border px-2 py-1">Start</th>
            <th className="border px-2 py-1">End</th>
          </tr>
        </thead>
        <tbody>
          {calendar.activities.map((act, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1">{act.activity}</td>
              <td className="border px-2 py-1">{act.start}</td>
              <td className="border px-2 py-1">{act.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarView;