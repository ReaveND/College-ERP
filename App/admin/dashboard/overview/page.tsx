'use client';

import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement, LineElement, PointElement,
  CategoryScale, LinearScale, Filler, Tooltip, Legend
);

const chartjsData = {
  labels: ['Students', 'Courses', 'Teachers', 'Subjects'],
  datasets: [{
    label: 'Enrollment Breakdown',
    data: [6500, 2300, 1200, 1200],
    backgroundColor: ['#FF6384', '#D91818', '#FFCE56', '#4BC0C0'],
    borderWidth: 1,
    hoverOffset: 20,
    hoverBorderColor: '#000',
    hoverBorderWidth: 2,
  }],
};

const chartjsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 1400, easing: 'easeInOutBounce' as const, animateScale: true, animateRotate: true },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: { boxWidth: 25, boxHeight: 15, font: { family: 'Inter, sans-serif', size: 14, weight: 'bold' as const } },
    },
    tooltip: { enabled: true },
  },
};

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Monthly Enrollment',
    data: [1200, 1500, 1800, 2000, 2200, 2500],
    fill: true,
    borderColor: '#36A2EB',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    tension: 0.4,
    pointRadius: 5,
    pointHoverRadius: 7,
  }],
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animations: { tension: { duration: 1000, easing: 'linear' as const, from: 1, to: 0, loop: true } },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: { font: { family: 'Inter, sans-serif', size: 13, weight: 'bold' as const } },
    },
    tooltip: { enabled: true },
  },
  scales: {
    x: { grid: { display: false }, ticks: { font: { size: 12 } } },
    y: { beginAtZero: true, ticks: { stepSize: 500, font: { size: 12 } } },
  },
};

const stats = [
  { label: 'Students', value: '6,500', color: '#FF6384', icon: 'fa-solid fa-user-group' },
  { label: 'Courses',  value: '2,300', color: '#D91818', icon: 'fa-solid fa-book-open' },
  { label: 'Teachers', value: '1,200', color: '#FFCE56', icon: 'fa-solid fa-graduation-cap' },
  { label: 'Subjects', value: '1,200', color: '#4BC0C0', icon: 'fa-solid fa-address-book' },
];

export default function OverviewPage() {
  return (
    <div className="p-4 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 p-6 rounded-xl shadow-lg flex items-center gap-4">
        <img src="/images/logo.png" alt="College Logo" className="w-20 h-20 rounded-full" />
        <h1 className="text-3xl font-bold text-blue-950">Admin Dashboard</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, color, icon }) => (
          <div key={label} className="flex items-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 p-4 rounded-md">
            <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md" style={{ backgroundColor: color }}>
              <i className={`${icon} text-white`}></i>
            </div>
            <div className="ml-4">
              <p className="text-xl font-bold">{value}</p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-center">Enrollment Breakdown</h2>
          <div className="relative h-[300px]">
            <Doughnut data={chartjsData} options={chartjsOptions} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-center">Monthly Enrollment</h2>
          <div className="relative h-[300px]">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
