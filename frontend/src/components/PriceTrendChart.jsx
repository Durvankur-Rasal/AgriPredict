import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const PriceTrendChart = ({ history }) => {
  if (!history || history.length === 0) {
    return <div>No data available to display chart.</div>;
  }

  const labels = history.map(entry => entry['Price Date']);
  const modalPrices = history.map(entry => entry['Modal Price (Rs./Quintal)']);

  const data = {
    labels,
    datasets: [
      {
        label: 'Modal Price (Rs./Quintal)',
        data: modalPrices,
        borderColor: 'rgba(34,197,94,1)',
        backgroundColor: 'rgba(34,197,94,0.2)',
        tension: 0.3,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Price Trend Over Time' },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Modal Price (Rs./Quintal)' } },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceTrendChart;