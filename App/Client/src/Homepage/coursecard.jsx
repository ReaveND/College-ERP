import React, { useState } from "react";

const courseData = [
  {
    title: "Engineering",
    icons: "fas fa-cogs",
    color: "bg-blue-900",
    bgcolor: "bg-blue-50",
    courses: ["Mechanical", "Civil", "Electrical", "Electronics"],
  },
  {
    title: "Computer Science",
    icons: "fas fa-laptop-code",
    color: "bg-blue-900",
    bgcolor: "bg-blue-50",
    courses: ["AI & ML", "Data Science", "Cybersecurity", "Software Engineering"],
  },
  {
    title: "Business Administration",
    icons: "fas fa-briefcase",
    color: "bg-blue-900",
    bgcolor: "bg-blue-50",
    courses: ["BBA General", "BBA Finance", "BBA Marketing"],
  },
  
  {
    title: "Masters's Courses",
    icons: "fas fa-university",
    color: "bg-blue-900",
    bgcolor: "bg-blue-50",
    courses: ["M.Tech", "MBA", "MCA"],
  },
];

export default function CourseCards() {
  const [flipped, setFlipped] = useState(null);

  return (
    <div className="p-6">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {courseData.map((item, index) => (
          <div
            key={index}
            className="relative w-72 h-55 cursor-pointer"
            onMouseEnter={() => setFlipped(index)}
            onMouseLeave={() => setFlipped(null)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-[1000ms] transform-style-preserve-3d ${
                flipped === index ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
<div
  className={`absolute inset-0 ${item.bgcolor} rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 backface-hidden`}
>
  {/* Icon + Title */}
  <div
    className={`p-4 rounded-full mb-4 flex items-center justify-center text-3xl ${item.color} text-white shadow-md`}
  >
    <i className={`${item.icons}`}></i>
  </div>
  <div className="text-xl font-semibold text-gray-800 tracking-wide border-b-4 pb-1 px-2"
       style={{ borderColor: "rgb(30 58 138)" }} // dark blue
  >
    {item.title}
  </div>
</div>


              {/* Back Side */}
              <div
                className={`absolute inset-0 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden`}
              >
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 border-b pb-2">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.courses.map((course, i) => (
                      <li
                        key={i}
                        className="text-gray-700 text-base font-medium hover:text-gray-900 transition "
                      >
                         {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}
