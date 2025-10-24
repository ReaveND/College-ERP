import React from 'react';
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
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
  Legend
);


// Chart.js Data
const chartjsData = {
  labels: ['Students', 'Courses', 'Teachers', 'Subjects'],
  datasets: [
    {
      label: 'Enrollment Breakdown',
      data: [6500, 2300, 1200, 1200],
      backgroundColor: ['#FF6384', '#D91818', '#FFCE56', '#4BC0C0'],
      borderWidth: 1,
      hoverOffset: 20,
      hoverBorderColor: '#000',
      hoverBorderWidth: 2,
    },
  ],
};

// Chart.js Options with Animation
const chartjsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1400,
    easing: 'easeInOutBounce',
    animateScale: true,
    animateRotate: true,
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels:{
        boxWidth:25,
        boxHeight:15,
        font:{
            family: 'Inter, sans-serif',
            size:14,
            weight:'bold',
        }
      }
    },
    tooltip: {
      enabled: true,
    },
  },
};

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Enrollment',
      data: [1200, 1500, 1800, 2000, 2200, 2500],
      fill: true,
      borderColor: '#36A2EB',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true,
    },
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: 'Inter, sans-serif',
          size: 13,
          weight: 'bold',
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 12 } },
    },
    y: {
      beginAtZero: true,
      ticks: { stepSize: 500, font: { size: 12 } },
    },
  },
};



// Pie Chart Component
const DashboardCharts = () => (
  <div className="grid grid-cols-1 flex-row md:grid-cols-2 gap-6 max-w-6xl mx-auto p-6">
    {/* Doughnut Chart */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">Dashboard</h2>
      <div className="relative h-[300px] md:grid-cols-12">
        <Doughnut data={chartjsData} options={chartjsOptions} />
      </div>
    </div>

    {/* Line Chart */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">Monthly Enrollment</h2>
      <div className="relative h-[300px] md:grid-cols-12">
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
    </div>
  </div>
);


// Dashboard Component
const Dashboard = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Students */}
        <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF6384] shadow-md">
            <i className="fa-solid fa-user-group text-white"></i>
          </div>
          <div className="ml-4">
            <p className="text-xl font-bold">6,500</p>
            <p className="text-sm text-gray-600">Students</p>
          </div>
        </div>

        {/* Courses */}
        <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D91818] shadow-md">
            <i className="fa-solid fa-book-open text-white"></i>
          </div>
          <div className="ml-4">
            <p className="text-xl font-bold">2,300</p>
            <p className="text-sm text-gray-600">Courses</p>
          </div>
        </div>

        {/* Teachers */}
        <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFCE56] shadow-md">
            <i className="fa-solid fa-graduation-cap text-white"></i>
          </div>
          <div className="ml-4">
            <p className="text-xl font-bold">1,200</p>
            <p className="text-sm text-gray-600">Teachers</p>
          </div>
        </div>

        {/* Subjects */}
        <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#4BC0C0] shadow-md">
            <i className="fa-solid fa-address-book text-white"></i>
          </div>
          <div className="ml-4">
            <p className="text-xl font-bold">1,200</p>
            <p className="text-sm text-gray-600">Subjects</p>
          </div>
        </div>
      </div>

      {/* Chart.js Pie Chart */}
        <DashboardCharts />
    </div>
  );
};

export default Dashboard;
