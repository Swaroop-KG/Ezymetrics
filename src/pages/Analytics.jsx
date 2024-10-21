import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import for Chart.js

const Analytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Important for responsiveness
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analytics-container">
      <h1>Analytics Overview</h1>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
