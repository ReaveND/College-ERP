import React, { useState } from "react";
import { Mail, Users, ChevronDown, ChevronUp } from "lucide-react";

const facultyData = [
  // Engineering
  { name: "Dr. Rohit Kumar", designation: "Associate Professor", department: "Mechanical", stream: "Engineering", email: "rohit@college.edu" },
  { name: "Dr. Amit Verma", designation: "Professor", department: "Civil", stream: "Engineering", email: "amit@college.edu" },
  { name: "Dr. Neha Sharma", designation: "Assistant Professor", department: "Electrical", stream: "Engineering", email: "neha@college.edu" },
  { name: "Dr. Sanjay Rao", designation: "Professor", department: "Electronics", stream: "Engineering", email: "sanjay@college.edu" },

  // Computer Science
  { name: "Dr. Aritri Sen", designation: "Professor", department: "AI & ML", stream: "Computer Science", email: "aritri@college.edu" },
  { name: "Dr. Rajesh Mehta", designation: "Associate Professor", department: "Data Science", stream: "Computer Science", email: "rajesh@college.edu" },
  { name: "Dr. Kavita Nair", designation: "Assistant Professor", department: "Cybersecurity", stream: "Computer Science", email: "kavita@college.edu" },
  { name: "Dr. Vikram Patel", designation: "Professor", department: "Software Engg", stream: "Computer Science", email: "vikram@college.edu" },

  // Business Administration
  { name: "Dr. Anjali Gupta", designation: "Professor", department: "BBA General", stream: "Business Administration", email: "anjali@college.edu" },
  { name: "Dr. Ramesh Iyer", designation: "Associate Professor", department: "BBA Finance", stream: "Business Administration", email: "ramesh@college.edu" },
  { name: "Dr. Shweta Das", designation: "Assistant Professor", department: "BBA Marketing", stream: "Business Administration", email: "shweta@college.edu" },

  // Bachelor’s Courses
  { name: "Dr. Priya Menon", designation: "Professor", department: "B.Com", stream: "Bachelor's Courses", email: "priya@college.edu" },
  { name: "Dr. Alok Reddy", designation: "Associate Professor", department: "B.Sc", stream: "Bachelor's Courses", email: "alok@college.edu" },
  { name: "Dr. Sunita Joshi", designation: "Assistant Professor", department: "BA English", stream: "Bachelor's Courses", email: "sunita@college.edu" },
  { name: "Dr. Rohan Khanna", designation: "Professor", department: "BA Economics", stream: "Bachelor's Courses", email: "rohan@college.edu" },

  // Master’s Courses
  { name: "Dr. Deepak Sharma", designation: "Professor", department: "M.Tech", stream: "Master's Courses", email: "deepak@college.edu" },
  { name: "Dr. Ayesha Khan", designation: "Associate Professor", department: "MBA", stream: "Master's Courses", email: "ayesha@college.edu" },
  { name: "Dr. Manish Arora", designation: "Assistant Professor", department: "MCA", stream: "Master's Courses", email: "manish@college.edu" },
  { name: "Dr. Seema Yadav", designation: "Professor", department: "MSc", stream: "Master's Courses", email: "seema@college.edu" },
];

// Faculty Card
const FacultyCard = ({ name, designation, department, email }) => (
  <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center w-64">
    <img
      src="https://via.placeholder.com/150"
      alt={name}
      className="w-24 h-24 rounded-full object-cover border-2 border-blue-950"
    />
    <h3 className="text-lg font-semibold mt-3 text-blue-950">{name}</h3>
    <p className="text-sm text-gray-600">{designation}</p>
    <p className="text-sm text-gray-500">{department}</p>
    <div className="flex items-center gap-2 mt-2 text-sm text-blue-700">
      <Mail size={16} /> {email}
    </div>
  </div>
);

// Expanded descriptions (10+ lines each)
const departmentDescriptions = {
  "Engineering": `The School of Engineering is committed to producing world-class engineers with strong problem-solving abilities and a research-driven mindset. 
  Our Mechanical department emphasizes design innovation, thermodynamics, and sustainable manufacturing practices. 
  Civil engineering focuses on structural integrity, smart cities, and environmental sustainability. 
  Electrical engineering nurtures talent in power systems, renewable energy, and automation. 
  Electronics engineering highlights cutting-edge communication systems, IoT, and microprocessor design. 
  Students engage in real-world projects, internships, and hands-on labs to reinforce classroom learning. 
  Our faculty members actively collaborate with industry and government bodies on impactful research. 
  Modern labs and state-of-the-art facilities support student development. 
  Frequent workshops and guest lectures prepare students for industry challenges. 
  With innovation at its core, our engineering programs build leaders for tomorrow.`,

  "Computer Science": `The Department of Computer Science prepares students for the digital age with an advanced curriculum and practical focus. 
  We specialize in Artificial Intelligence, Machine Learning, and Data Science, equipping students with future-ready skills. 
  Cybersecurity labs provide hands-on experience in ethical hacking and information security. 
  Software Engineering courses emphasize scalable system design and agile development. 
  Our faculty members are active researchers contributing to AI, blockchain, and cloud computing. 
  Students benefit from coding competitions, hackathons, and research projects with industry partners. 
  Internship opportunities in top companies enhance career readiness. 
  Courses are designed to balance theoretical concepts with practical applications. 
  Graduates pursue roles in software development, AI research, and IT consulting. 
  We aim to nurture innovators and thought leaders in the global tech industry.`,

  "Business Administration": `The School of Business Administration offers diverse BBA programs tailored for future business leaders. 
  The curriculum blends management theory with real-world case studies. 
  Finance specialization builds expertise in banking, investments, and risk management. 
  Marketing students learn brand management, digital marketing, and consumer psychology. 
  General Management focuses on leadership, communication, and organizational strategy. 
  Faculty members are experienced professionals with global exposure. 
  Industrial visits and management simulations enrich the learning process. 
  Entrepreneurial development programs encourage innovation and startups. 
  Guest lectures from business leaders expose students to market trends. 
  Our graduates thrive in corporate roles, startups, and global enterprises.`,

  "Bachelor's Courses": `The Undergraduate School nurtures curiosity and academic growth through its diverse programs. 
  B.Com students gain insights into accounting, taxation, and commerce. 
  B.Sc offers hands-on exposure to core sciences, mathematics, and analytical reasoning. 
  BA English develops critical thinking, creative writing, and communication skills. 
  BA Economics prepares students for roles in policy-making, finance, and research. 
  Our faculty employs an interdisciplinary approach for holistic education. 
  Undergraduate programs emphasize project work, seminars, and interactive learning. 
  Students are encouraged to participate in debates, cultural events, and sports. 
  Research opportunities at the undergraduate level are also available. 
  This strong academic foundation prepares students for higher education or professional careers.`,

  "Master's Courses": `The Postgraduate School offers advanced programs to develop subject expertise and research skills. 
  M.Tech focuses on deep engineering knowledge, specialization, and innovation. 
  MBA trains students in leadership, strategy, and business decision-making. 
  MCA equips learners with advanced computer applications, coding, and IT management. 
  MSc nurtures research and academic excellence in core sciences. 
  Faculty members are renowned scholars with publications in leading journals. 
  Students engage in case studies, dissertations, and research collaborations. 
  Modern infrastructure ensures access to high-tech labs and libraries. 
  Strong alumni networks provide mentorship and career opportunities. 
  Postgraduate education here develops thought leaders and innovators of tomorrow.`
};

export default function FacultyPage() {
  const streams = [...new Set(facultyData.map((f) => f.stream))];
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="bg-blue-950 text-white flex flex-col justify-center items-center h-[35vh] text-center">
        <h1 className="text-5xl font-bold">Vedanta Institute Of Technology</h1>
        <h3 className="text-3xl font-bold text-gray-100">Our Esteemed Faculty</h3>
        <p className="mt-4 text-lg max-w-3xl text-gray-200">
          Meet the brilliant minds dedicated to guiding and mentoring students across multiple disciplines.
        </p>
      </section>

      {/* Content Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
<aside className="lg:w-[330px] w-full bg-blue-100 text-blue-950 rounded-xl p-6 sticky top-20 h-fit shadow-md">          
<h2 className="text-xl font-bold text-blue-950 mb-6">Departments</h2>
          <div className="flex flex-col gap-3">
            {streams.map((stream) => (
              <a
                key={stream}
                href={`#${stream.replace(/\s+/g, "-")}`}
                className="bg-white p-3 rounded-lg shadow hover:shadow-lg transition text-blue-900 font-medium"
              >
                {stream}
              </a>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-8 bg-gray-50">
  {/* Intro section about faculty */}
  <section className="mb-12 border-b border-gray-300 pb-8 text-center">
    <h2 className="text-4xl font-extrabold text-blue-950 mb-6">Introduction</h2>
    <p className="text-gray-700 leading-relaxed text-md mx-auto max-w-3xl">
      Our faculty members are the cornerstone of our institution’s excellence. 
      They bring a wealth of academic knowledge, research experience, and industry exposure 
      that helps bridge the gap between theory and practice. Each department is led by 
      dedicated educators who inspire curiosity, encourage innovation, and cultivate 
      leadership among students. Their commitment goes beyond teaching — they mentor, guide, 
      and nurture students throughout their academic journey. With a strong belief in holistic 
      education, our faculty members focus on character building, ethics, and social responsibility. 
      Collaborative research, publications in leading journals, and participation in global 
      conferences showcase their intellectual contributions. By maintaining strong industry 
      linkages, they ensure students gain real-world exposure and professional opportunities. 
      With passion and expertise, our faculty shape the next generation of leaders, innovators, 
      and responsible citizens.
    </p>
  </section>

  {/* Department Sections */}
  {streams.map((stream) => (
    <section key={stream} id={stream.replace(/\s+/g, "-")} className="mb-12 border-b border-gray-300 pb-8">
      {/* Department Description */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-950 flex items-center gap-3 mb-4">
        <Users className="text-yellow-600" size={28} /> {stream}
      </h2>
      <p className="text-gray-700 mb-6 whitespace-pre-line text-md leading-relaxed">
        {departmentDescriptions[stream]}
      </p>

      {/* Expandable Bar */}
      <div
        className="cursor-pointer bg-blue-100 border border-blue-300 rounded-lg p-4 flex justify-between items-center text-blue-950 font-semibold hover:bg-blue-200 transition"
        onClick={() => setExpanded(expanded === stream ? null : stream)}
      >
        <span>Our Dedicated Faculty</span>
        {expanded === stream ? <ChevronUp /> : <ChevronDown />}
      </div>

      {/* Faculty Cards */}
      {expanded === stream && (
        <div className="flex flex-wrap gap-6 mt-6">
          {facultyData
            .filter((f) => f.stream === stream)
            .map((f, index) => (
              <FacultyCard key={index} {...f} />
            ))}
        </div>
      )}
    </section>
  ))}
</main>

      </div>
      {/* Footer */}
      <footer className="bg-blue-950 text-gray-200 text-center py-6 mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} Your College Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
