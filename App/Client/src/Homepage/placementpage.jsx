import React, { useState } from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";

import adobeLogo from "../assets/HomeIMG/adobe.jpg";
import TCS from "../assets/HomeIMG/tcs.png";
import Accenture from "../assets/HomeIMG/accenture.jpg";
import Infosys from "../assets/HomeIMG/infosys.png";

// Sample Data
const placementDomainData = [
  { name: "IT", value: 45 },
  { name: "Management", value: 25 },
  { name: "Data Science", value: 15 },
  { name: "Core Engineering", value: 10 },
  { name: "Others", value: 5 },
];

const yearlyPlacementData = [
  { year: "2021", placed: 120 },
  { year: "2022", placed: 150 },
  { year: "2023", placed: 180 },
  { year: "2024", placed: 200 },
];

const COLORS = ["#facc15", "#3b82f6", "#fbbf24", "#1e3a8a", "#fde68a"];

const recruiters = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Adobe", logo: adobeLogo }, 
  { name: "Infosys", logo: Infosys },
  { name: "TCS", logo: TCS },
  { name: "Accenture", logo: Accenture },
];

const blogs = [
  { title: "World-Class Infrastructure", desc: "Our campus provides state-of-the-art labs, modern classrooms, and collaborative spaces that inspire innovation." },
  { title: "Strong Industry Connections", desc: "Partnerships with top companies ensure real-world exposure, internships, and career opportunities." },
  { title: "Holistic Development", desc: "Beyond academics, students thrive through clubs, cultural events, and leadership programs." },
];

const alumni = [
  { name: "Rohit Sharma", role: "Software Engineer at Google", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Ananya Gupta", role: "Data Scientist at Microsoft", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Karan Patel", role: "Product Manager at Amazon", img: "https://randomuser.me/api/portraits/men/65.jpg" },
];

const highlights = [
  { label: "Highest Package", value: "₹45 LPA" },
  { label: "Average Package", value: "₹12 LPA" },
  { label: "Total Recruiters", value: "200+" },
  { label: "Placement Rate", value: "95%" },
];

const PlacementPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Vedanta Institute of Technology</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Placement Highlights</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Preparing students for careers in top-tier companies with strong technical foundations, leadership, and industry exposure.
        </p>
      </section>

      {/* Placement Quick Stats */}
      <section className="bg-yellow-50 py-16">
        <h2 className="text-3xl font-bold text-blue-950 mb-10 text-center">Quick Placement Facts</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-950">{item.value}</h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Placement Statistics</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Pie Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-blue-950 mb-4 text-center">Domain-wise Placement</h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={placementDomainData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  activeIndex={activeIndex}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {placementDomainData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold text-blue-950 mb-4 text-center">Year-wise Placement Trend</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={yearlyPlacementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="placed" fill="#c9711eff" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">Top Recruiters</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {recruiters.map((rec, idx) => (
            <div key={idx} className="flex flex-col items-center w-36 hover:scale-110 transition-transform cursor-pointer">
              <img src={rec.logo} alt={rec.name} className="h-16 object-contain mb-2" /> {/* ✅ Smaller icons */}
              <span className="text-gray-700 font-medium text-sm">{rec.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">Our Proud Alumni</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {alumni.map((a, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 text-center">
              <img src={a.img} alt={a.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-blue-950">{a.name}</h3>
              <p className="text-gray-600">{a.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">Life at Vedanta</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8">
              <h3 className="text-xl font-semibold text-blue-950 mb-4">{blog.title}</h3>
              <p className="text-gray-600">{blog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white px-6 py-10">
        <div className="flex justify-between items-start w-full text-sm max-w-7xl mx-auto flex-wrap gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Placement Office</h3>
            <p>Email: placements@vedanta.edu</p>
            <p>Tel: 123-456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Career Guidance</h3>
            <p>Email: careers@vedanta.edu</p>
            <p>Tel: 123-456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Student Support</h3>
            <p>Email: support@vedanta.edu</p>
            <p>Tel: 123-456-7890</p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-300 text-sm">
          © 2025 Vedanta Institute of Technology. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default PlacementPage;
