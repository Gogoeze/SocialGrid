import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Instagram', 'LinkedIn', 'TikTok', 'X', 'Facebook'],
    datasets: [
      {
        label: 'Interactions',
        data: [1200, 1900, 3000, 500, 2400],
        backgroundColor: '#834F32',
        borderColor: '#834F32',
        borderWidth: 0,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Post Performance',
        color: '#834f32',
        font: {
          size: 16,
          weight: 600,
        },
        padding: { bottom: 20, left: 0, right: 0, top: 0 },
      },
      tooltip: {
        backgroundColor: '#834f32',
        titleColor: '#F5ECD7',
        bodyColor: '#F5ECD7',
        padding: 10,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => {
            return ` ${context.parsed.y.toLocaleString()} interactions`;
          },
          title: (context: any) => {
            return context[0].label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#7A5C48',
          font: {
            size: 13,
          },
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

    return (
    <div
      style={{
        backgroundColor: '#F5F0EB',
        borderRadius: '16px',
        padding: '24px',
        maxWidth: '1200px',
        height: '700px', 
        margin: '0 auto',
        boxShadow: '0 2px 12px rgba(131, 79, 50, 0.08)',
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );

};

export default BarChart;