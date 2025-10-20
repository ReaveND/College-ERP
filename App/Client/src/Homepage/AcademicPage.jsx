// AcademicPage.jsx
import React from "react";

const streams = [
  {
    title: "Computer Science",
    description:
      "Our Computer Science programs focus on equipping students with core knowledge in programming, algorithms, data structures, software engineering, and emerging technologies like Artificial Intelligence, Machine Learning, Data Science, and Cybersecurity. The curriculum blends theoretical foundations with practical applications, preparing students for careers in tech innovation and research.",
    courses: [
      {
        name: "AI & ML",
        description:
          "This course introduces students to Artificial Intelligence concepts, Machine Learning algorithms, and practical applications. Students learn to build predictive models, neural networks, and intelligent systems.",
        duration: "4 Years",
        fees: "₹4,50,000",
      },
      {
        name: "Data Science",
        description:
          "Focuses on data analysis, visualization, and predictive modeling. Students gain proficiency in Python, R, SQL, and popular data science libraries to extract insights from large datasets.",
        duration: "4 Years",
        fees: "₹4,50,000",
      },
      {
        name: "Cybersecurity",
        description:
          "Covers network security, ethical hacking, cryptography, and secure software development. Students learn to protect systems from cyber threats and ensure information security.",
        duration: "4 Years",
        fees: "₹4,50,000",
      },
      {
        name: "Software Engineering",
        description:
          "Emphasizes software development life cycle, agile methodologies, design patterns, and full-stack development. Students develop robust applications for real-world scenarios.",
        duration: "4 Years",
        fees: "₹4,50,000",
      },
    ],
  },
  {
    title: "Business Administration",
    description:
      "Our Business Administration programs provide foundational and specialized knowledge in business operations, finance, marketing, and management. Students develop leadership, strategic thinking, and analytical skills essential for modern business environments.",
    courses: [
      {
        name: "BBA General",
        description:
          "Covers fundamental management concepts, organizational behavior, and basic accounting principles. Prepares students for entry-level managerial roles.",
        duration: "3 Years",
        fees: "₹3,00,000",
      },
      {
        name: "BBA Finance",
        description:
          "Focuses on financial management, investment analysis, banking, and corporate finance. Equips students with tools to analyze and manage financial resources.",
        duration: "3 Years",
        fees: "₹3,00,000",
      },
      {
        name: "BBA Marketing",
        description:
          "Covers marketing strategies, consumer behavior, digital marketing, and brand management. Students learn to create and execute marketing plans effectively.",
        duration: "3 Years",
        fees: "₹3,00,000",
      },
    ],
  },
  {
    title: "Bachelor’s Courses",
    description:
      "Our Bachelor's courses provide students with broad-based knowledge in commerce, science, and arts. They prepare students for professional careers, higher studies, or research opportunities.",
    courses: [
      {
        name: "B.Com",
        description:
          "Focuses on commerce, accounting, taxation, and finance. Students gain practical skills for business and financial sectors.",
        duration: "3 Years",
        fees: "₹2,50,000",
      },
      {
        name: "B.Sc",
        description:
          "Offers foundational knowledge in scientific disciplines, laboratory skills, and analytical thinking. Prepares students for careers in research or industry.",
        duration: "3 Years",
        fees: "₹2,50,000",
      },
      {
        name: "BA English",
        description:
          "Covers literature, linguistics, and communication skills. Students develop critical thinking, writing, and analytical abilities.",
        duration: "3 Years",
        fees: "₹2,50,000",
      },
      {
        name: "BA Economics",
        description:
          "Provides understanding of micro and macroeconomics, econometrics, and policy analysis. Prepares students for careers in finance, research, or government.",
        duration: "3 Years",
        fees: "₹2,50,000",
      },
    ],
  },
  
  {
    title: "Masters",
    description:
      "Our Masters programs provide advanced study and research opportunities across technology, management, arts, and sciences. Students gain expertise in their fields and are prepared for professional or academic excellence.",
    courses: [
      {
        name: "M.Tech",
        description:
          "Advanced engineering program focusing on research, design, and application in specialized technology areas.",
        duration: "2 Years",
        fees: "₹5,00,000",
      },
      {
        name: "MBA",
        description:
          "Focuses on strategic management, leadership, finance, marketing, and entrepreneurship. Prepares students for leadership roles in global business.",
        duration: "2 Years",
        fees: "₹5,00,000",
      },
      {
        name: "MCA",
        description:
          "Advanced computer applications program covering programming, software engineering, databases, and emerging technologies.",
        duration: "2 Years",
        fees: "₹5,00,000",
      },
      
    ],
  },
];

const AcademicPage = () => {
  return (
    <div className="max-w-8xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-16 text-blue-950">
        Our Academic Programs
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full bg-blue-100 text-blue-950 rounded-xl p-6 sticky top-20 h-fit shadow-md">
          <h3 className="text-xl font-bold mb-4">Programs</h3>
          <ul className="space-y-2">
            {streams.map((stream, index) => (
              <li key={index}>
                <a
                  href={`#${stream.title.replace(/\s+/g, "-")}`}
                  className="hover:underline"
                >
                  {stream.title}
                </a>
              </li>
            ))}
          </ul>

          <hr className="my-6 border-blue-300" />

          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/Admission" className="hover:underline">
                Admissions
              </a>
            </li>
            <li>
              <a href="/AcademicCalendar" className="hover:underline">
                Academic Calendar
              </a>
            </li>
            <li>
              <a href="/PlacementPage" className="hover:underline">
                Placements
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 w-full">
          {streams.map((stream, index) => (
            <section
              key={index}
              id={stream.title.replace(/\s+/g, "-")}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                {stream.title}
              </h2>
              <p className="mb-8 text-gray-700">{stream.description}</p>

              {stream.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="mb-8 bg-blue-950 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <h3 className="text-2xl font-semibold text-blue-100 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-gray-100 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-yellow-600 text-blue-100 px-3 py-1 rounded-full font-medium">
                      Duration: {course.duration}
                    </span>
                    <span className="bg-yellow-600 text-blue-100 px-3 py-1 rounded-full font-medium">
                      Fees: {course.fees}
                    </span>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 text-white px-6 py-10 mt-16 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-start w-full text-sm gap-8">
          {/* Registration Office */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Registration Office</h3>
            <p>
              Email:{" "}
              <a href="mailto:info@regsite.com">info@regsite.com</a>
            </p>
            <p>Tel: 123-456-7890</p>
          </div>

          {/* Admissions Office */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Admissions Office</h3>
            <p>
              Email:{" "}
              <a href="mailto:info@regsite.com">info@regsite.com</a>
            </p>
            <p>Tel: 123-456-7890</p>
          </div>

          {/* Financial Aid Office */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Financial Aid Office</h3>
            <p>
              Email:{" "}
              <a href="mailto:info@regsite.com">info@regsite.com</a>
            </p>
            <p>Tel: 123-456-7890</p>
          </div>
        </div>

        <div className="mt-10 text-center text-[16px] text-gray-300">
          © 2025 by Vedanta Institute of Technology
        </div>
      </footer>
    </div>
  );
};

export default AcademicPage;
