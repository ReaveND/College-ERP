"use client";

import React, { useEffect, useState } from 'react';
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

// chart data will be constructed inside the component using fetched counts

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

const STAT_CONFIG = [
  { key: 'students', label: 'Students', color: '#FF6384', icon: 'fa-solid fa-user-group' },
  { key: 'courses', label: 'Courses',  color: '#D91818', icon: 'fa-solid fa-book-open' },
  { key: 'faculty', label: 'Faculty', color: '#FFCE56', icon: 'fa-solid fa-graduation-cap' },
  { key: 'programs', label: 'Programs', color: '#4BC0C0', icon: 'fa-solid fa-address-book' },
];

export default function OverviewPage() {
  const [counts, setCounts] = useState<{ students: number; courses: number; faculty: number; programs: number } | null>(null);
  const [monthlyData, setMonthlyData] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchCounts() {
      try {
        const [studentsRes, coursesRes, facultyRes, programsRes, monthlyRes] = await Promise.all([
          fetch('/api/student'),
          fetch('/api/course'),
          fetch('/api/faculty'),
          fetch('/api/program'),
          fetch('/api/stats/monthly'),
        ]);

        const [students, courses, faculty, programs, monthly] = await Promise.all([
          studentsRes.ok ? studentsRes.json() : [],
          coursesRes.ok ? coursesRes.json() : [],
          facultyRes.ok ? facultyRes.json() : [],
          programsRes.ok ? programsRes.json() : [],
          monthlyRes.ok ? monthlyRes.json() : null,
        ]);

        if (!mounted) return;

        setCounts({
          students: Array.isArray(students) ? students.length : 0,
          courses: Array.isArray(courses) ? courses.length : 0,
          faculty: Array.isArray(faculty) ? faculty.length : 0,
          programs: Array.isArray(programs) ? programs.length : 0,
        });

        if (Array.isArray(monthly) && monthly.length === 12) {
          setMonthlyData(monthly.map((n: any) => Number(n || 0)));
        } else {
          setMonthlyData(null);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
        if (mounted) {
          setCounts({ students: 0, courses: 0, faculty: 0, programs: 0 });
          setMonthlyData(null);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchCounts();
    return () => { mounted = false; };
  }, []);

  const formatNumber = (n: number) => n.toLocaleString();

  const chartjsData = {
    labels: ['Students', 'Courses', 'Faculty', 'Programs'],
    datasets: [{
      label: 'Enrollment Breakdown',
      data: counts ? [counts.students, counts.courses, counts.faculty, counts.programs] : [0,0,0,0],
      backgroundColor: ['#FF6384', '#D91818', '#FFCE56', '#4BC0C0'],
      borderWidth: 1,
      hoverOffset: 20,
      hoverBorderColor: '#000',
      hoverBorderWidth: 2,
    }],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Enrollment',
      data: monthlyData ? monthlyData.slice(0, 6) : (counts ? [counts.students/6, counts.students/6, counts.students/6, counts.students/6, counts.students/6, counts.students/6] : [0,0,0,0,0,0]),
      fill: true,
      borderColor: '#36A2EB',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    }],
  };

  return (
    <div className="p-4 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 p-6 rounded-xl shadow-lg flex items-center gap-4">
        <img src="/images/logo.png" alt="College Logo" className="w-20 h-20 rounded-full" />
        <h1 className="text-3xl font-bold text-blue-950">Admin Dashboard</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STAT_CONFIG.map(({ key, label, color, icon }) => (
          <div key={key} className="flex items-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 p-4 rounded-md">
            <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md" style={{ backgroundColor: color }}>
              <i className={`${icon} text-white`}></i>
            </div>
            <div className="ml-4">
              <p className="text-xl font-bold">{loading ? '—' : formatNumber((counts as any)?.[key] ?? 0)}</p>
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
