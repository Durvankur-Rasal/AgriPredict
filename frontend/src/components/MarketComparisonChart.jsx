import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MarketComparisonChart = ({ data }) => {
  if (!data || data.length === 0) return <div>No data to display.</div>;

  const labels = data.map(entry => entry.market);
  const modalPrices = data.map(entry => entry.modal_price);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Modal Price (Rs./Quintal)',
        data: modalPrices,
        backgroundColor: 'rgba(34,197,94,0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Market-wise Modal Price Comparison' },
    },
    scales: {
      y: { title: { display: true, text: 'Modal Price (Rs./Quintal)' } },
      x: { title: { display: true, text: 'Market' } },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default MarketComparisonChart;