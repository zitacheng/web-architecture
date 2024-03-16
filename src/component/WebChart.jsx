import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "Différents type d'architecture web",
    },
  },
};

const labels = ['Scalabilité', 'Rapidité de developpement', 'Complexité', 'Maintenabilité'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Client Serveur',
      data: [8, 6, 5, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Monolithic',
      data: [5, 8, 6, 4],
      backgroundColor: 'rgba(155, 99, 132, 0.5)',
    },
    {
      label: 'Microservices',
      data: [9, 5, 9, 8],
      backgroundColor: 'rgba(255, 213, 132, 0.5)',
    },
    {
      label: 'Serverless',
      data: [9, 8, 4, 7],
      backgroundColor: 'rgba(53, 162, 120, 0.5)',
    },
    {
      label: 'SPA',
      data: [7, 7, 6, 6],
      backgroundColor: 'rgba(153, 162, 135, 0.5)',
    },
    {
      label: 'PWA',
      data: [7, 7, 5, 7],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function WebChart() {
  return <Bar options={options} data={data} />;
}