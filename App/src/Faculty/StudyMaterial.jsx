import React, { useState } from "react";

const FacultyStudyMaterial = () => {
  const [materials, setMaterials] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [stream, setStream] = useState("");
  const [searchStream, setSearchStream] = useState("");

  // Handle file select
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle upload
  const handleUpload = (e) => {
    e.preventDefault();

    if (!title || !file || !stream) {
      alert("Please provide title, stream and choose a file.");
      return;
    }

    const newMaterial = {
      id: Date.now(),
      title: title,
      stream: stream,
      fileName: file.name,
      fileURL: URL.createObjectURL(file), // just for preview, in real app -> backend
    };

    setMaterials([...materials, newMaterial]);
    setTitle("");
    setStream("");
    setFile(null);
    e.target.reset();
  };

  // Filtered materials based on search stream
  const filteredMaterials = searchStream
    ? materials.filter((mat) =>
        mat.stream.toLowerCase().includes(searchStream.toLowerCase())
      )
    : materials;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        {/* Page Header */}
        <h1 className="text-2xl font-bold text-blue-950 mb-6">
          📚 Upload Study Material
        </h1>

        {/* Upload Form */}
        <form
          onSubmit={handleUpload}
          className="flex flex-col gap-4 mb-8 bg-gray-50 p-6 rounded-xl"
        >
          <input
            type="text"
            placeholder="Enter Material Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Stream Input */}
          <select
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Stream</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="BCA">BCA</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
            <option value="MTech">MTech</option>
            <option value="MBA">MBA</option>
          </select>

          {/* File Upload */}
          <label className="block">
            <span className="text-gray-700 font-medium">Choose File</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                         file:rounded-lg file:border-0 
                         file:text-sm file:font-semibold 
                         file:bg-blue-950 file:text-white 
                         hover:file:bg-yellow-600 cursor-pointer"
            />
          </label>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Upload
          </button>
        </form>

        {/* Search by Stream */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search by Stream (e.g., CSE)"
            value={searchStream}
            onChange={(e) => setSearchStream(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Uploaded Materials */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📂 Uploaded Materials
        </h2>

        {filteredMaterials.length === 0 ? (
          <p className="text-gray-500">No materials found.</p>
        ) : (
          <ul className="space-y-4">
            {filteredMaterials.map((material) => (
              <li
                key={material.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
              >
                <div>
                  <p className="font-semibold text-blue-950">{material.title}</p>
                  <p className="text-sm text-gray-600">
                    {material.fileName} ({material.stream})
                  </p>
                </div>
                <a
                  href={material.fileURL}
                  download={material.fileName}
                  className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FacultyStudyMaterial;
