// File: ExamForm.jsx
import React from "react";

const ExamForm = () => {
  const studentData = {
    name: "Ishika Das",
    regNo: "2131010210001 OF 2021-22",
    rollNo: "31001221010",
    institute: "VEDANTA INSTITUTE OF TECHNOLOGY (310)",  
    course: "Bachelor of Computer Application",
    semester: "Fifth Semester",
    subjects: [
      { code: "BCAC501", name: "Internet Technology", type: "Theory Paper" },
      { code: "BCAC591", name: "Internet Technology Lab", type: "Practical Paper" },
      { code: "BCAC502", name: "Computer Networking", type: "Theory Paper" },
      { code: "BCAC592", name: "Computer Networking Lab", type: "Practical Paper" },
      { code: "BCAD501A", name: "Cloud Computing", type: "Theory Paper" },
      { code: "BCAD581", name: "Industrial Training & Minor Project", type: "Sessional Paper" },
    ],
    fee: {
      receipt: "order_N3AhtThAfoj5zZ",
      date: "21-11-2023 20:53:37",
      amount: "1200",
      status: "Paid",
    },
  };

  // Print Form
  const handlePrint = () => {
    window.print();
  };

  // Download Form (Text)
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("exam-form").innerText], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ExamForm.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div
        id="exam-form"
        className="bg-white p-8 border border-gray-400 w-full max-w-4xl text-sm"
      >
        {/* Header */}
        <div className="text-center border-b border-gray-400 pb-2 mb-2">
          <h2 className="font-bold">
           VEDANTA INSTITUTE OF TECHNOLOGY
          </h2>
         <p>Kolkata Campus:  Anandapur Rd, Uchhepota, Kolkata, West Bengal 700150</p>
          <p>Website: www.vedanta.net</p>
        </div>

        {/* Title */}
        <h3 className="text-center font-bold underline mb-4">
          Application form for Odd Semester Examinations 2023-24 for REGULAR Students
        </h3>

        {/* Student Info */}
        <div className="border border-gray-400 p-3 mb-4">
          <p>
            <strong>Application Form:</strong> {studentData.semester} Examinations 2023-24
          </p>
          <p>
            <strong>For The Degree of:</strong> {studentData.course}
          </p>
          <p>
            <strong>Name:</strong> {studentData.name}
          </p>
          <p>
            <strong>REG. NO.:</strong> {studentData.regNo}
          </p>
          <p>
            <strong>Roll No.:</strong> {studentData.rollNo}
          </p>
          <p>
            <strong>Institute (Code):</strong> {studentData.institute}
          </p>
        </div>

        {/* Subjects Table */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">PAPER CODE</th>
              <th className="border border-gray-400 px-2 py-1">PAPER NAME</th>
              <th className="border border-gray-400 px-2 py-1">PAPER TYPE</th>
            </tr>
          </thead>
          <tbody>
            {studentData.subjects.map((sub, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-2 py-1">{sub.code}</td>
                <td className="border border-gray-400 px-2 py-1">{sub.name}</td>
                <td className="border border-gray-400 px-2 py-1">{sub.type}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Declaration */}
        <p className="mb-2">
          I declare that I have fulfilled the criteria for appearing in the above Examinations as a Regular Candidate.
        </p>
        <p className="mb-4">
          I accept the rules, guidelines and notifications of the University in respect of the current office mode of end semester examinations.
        </p>

        
        <div className="mb-4">
          <p>
            <strong>Full Signature of the applicant with Date:</strong>
          </p>
          
          <div className="border-b border-gray-600 w-1/2 mt-8"></div>
        </div>

        <div className="mb-4">
          <p>
            <strong>
              Signature of the Principal / Director of the Institute/College with date and seal.
            </strong>
          </p>
          {/* Blank line for principal's signature */}
          <div className="border-b border-gray-600 w-1/2 mt-8"></div>
        </div>

        {/* Fee Details */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1">Receipt No.</th>
              <th className="border border-gray-400 px-2 py-1">Date of Payment</th>
              <th className="border border-gray-400 px-2 py-1">Exam Fees</th>
              <th className="border border-gray-400 px-2 py-1">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-2 py-1">{studentData.fee.receipt}</td>
              <td className="border border-gray-400 px-2 py-1">{studentData.fee.date}</td>
              <td className="border border-gray-400 px-2 py-1">{studentData.fee.amount}</td>
              <td className="border border-gray-400 px-2 py-1">{studentData.fee.status}</td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleDownload}
            className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Download
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Print & Sign
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamForm;
