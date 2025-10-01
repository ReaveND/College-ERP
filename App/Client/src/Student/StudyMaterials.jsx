import React, { useState } from "react";
import collegeLogo from "../assets/logo.png";

const StudyMaterials = () => {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materials = [
    {
      subject: "Computer Networks",
      code: "CS301",
      topic: "TCP/IP Protocols",
      description: "Introduction to TCP/IP suite and its layers.",
      link: "#",
    },
    {
      subject: "Operating Systems",
      code: "CS302",
      topic: "CPU Scheduling",
      description: "Detailed explanation of CPU scheduling algorithms.",
      link: "#",
    },
    {
      subject: "Database Systems",
      code: "CS303",
      topic: "Normalization",
      description: "Understanding database normalization forms.",
      link: "#",
    },
    {
      subject: "Cybersecurity",
      code: "CS304",
      topic: "Malware Types",
      description: "Classification and examples of common malware.",
      link: "#",
    },
  ];

  const subjects = ["All", ...new Set(materials.map((m) => m.subject))];

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.subject.toLowerCase().includes(search.toLowerCase()) ||
      material.topic.toLowerCase().includes(search.toLowerCase());
    const matchesSubject =
      subjectFilter === "" ||
      subjectFilter === "All" ||
      material.subject === subjectFilter;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md p-6 h-full space-y-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-2xl shadow-lg p-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={collegeLogo}
              alt="College Logo"
              className="h-20 w-20 mr-4"
            />
            <h1 className="text-3xl font-extrabold text-blue-950 drop-shadow-sm">
              Study Materials
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="/Dashboard"
              className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Back to Dashboard
            </a>
            <a
              href="/logout"
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </a>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Search + Filter Controls */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search by subject or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-2/3 p-3 border rounded-lg shadow-sm"
            />
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="w-full sm:w-1/3 p-3 border rounded-lg shadow-sm"
            >
              {subjects.map((subj, idx) => (
                <option key={idx} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition transform flex flex-col justify-between p-5 h-full border"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-1 text-blue-950">
                    {material.subject}
                  </h2>
                  <p className="text-gray-700 mt-2">{material.topic}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Code: {material.code}
                  </p>
                  <p className="text-gray-600 mt-2 mb-4">
                    {material.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMaterial(material)}
                  className="w-full mt-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  View / Download
                </button>
              </div>
            ))}

            {filteredMaterials.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No materials found.
              </p>
            )}
          </div>
        </div>

        {/* Modal */}
        {selectedMaterial && (
          <div className="fixed inset-0 bg-gradient-to-br from-blue-200/60 via-yellow-100/70 to-blue-300/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-96 p-6 rounded-2xl shadow-xl relative animate-fadeIn">
              <h2 className="text-xl font-bold text-blue-950">
                {selectedMaterial.subject}
              </h2>
              <p className="text-gray-700 mt-2">{selectedMaterial.topic}</p>
              <p className="text-sm text-gray-500 mt-2">
                Code: {selectedMaterial.code}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={selectedMaterial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                >
                  View
                </a>

                <a
                  href={selectedMaterial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition"
                  download
                >
                  Download
                </a>

                <button
                  onClick={() => setSelectedMaterial(null)}
                  className="w-full py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          Vedanta Institute of Technology <br />
          Anandapur Rd, Uchhepota, Kolkata, West Bengal 700150
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
