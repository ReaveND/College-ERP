// File: SemExamFeesClearance.jsx
import React from "react";
import collegeLogo from "../assets/logo.png";

const SemExamFeesClearance = () => {
  const studentData = {
    name: "Srabani Kar",
    regNo: "MCA25-0010 OF 2024-26",
    rollNo: "MCA2025-017",
    institute: "VEDANTA INSTITUTE OF TECHNOLOGY (310)",
    course: "Master of Computer Application",
    semester: "Third Semester",
    fee: {
      receipt: "order_N3AhtThAfoj5zZ",
      date: "21-11-2023 20:53:37",
      amount: "1200",
      status: "Paid",
    },
    feesBreakup: [
      { head: "Library cum Book - Bank Fee", amount: 750 },
      { head: "Tuition Fees", amount: 42000 },
      { head: "Student Welfare & Sports Fee", amount: 500 },
    ],
    payment: {
      mode: "Online",
      transNo: "pay_KPJljfmvdxLHge",
      transDate: "21-11-2023",
      amount: 43250,
    },
  };

  const handleDownload = () => window.print();

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-100 shadow-md rounded-md h-full p-6 space-y-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Card */}
        <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 shadow-2xl rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={collegeLogo} alt="College Logo" className="h-20 w-20 mr-4" />
            <h1 className="text-3xl font-extrabold text-blue-950 drop-shadow-sm">
              Fees Clearance Document
            </h1>
          </div>
          <div className="flex space-x-4">
            <a href="/Dashboard" className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Back to Dashboard
            </a>
            <a href="/logout" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Logout
            </a>
          </div>
        </div>

        {/* Fees Clearance Form */}
        <div className="p-8 flex justify-center">
          <div id="fees-clearance" className="bg-white p-8 border border-gray-400 w-full max-w-4xl text-sm">
            {/* Institute Header */}
            <div className="text-center border-b border-gray-400 pb-2 mb-2">
              <h2 className="font-bold">VEDANTA INSTITUTE OF TECHNOLOGY</h2>
              <p>Kolkata Campus: Anandapur Rd, Uchhepota, Kolkata, West Bengal 700150</p>
              <p>Website: www.vedanta.net</p>
            </div>

            {/* Title */}
            <h3 className="text-center font-bold underline mb-4">
              Semester Exam Fees Clearance Document
            </h3>

            {/* Student Info */}
            <div className="border border-gray-400 p-3 mb-4">
              <p><strong>Name:</strong> {studentData.name}</p>
              <p><strong>REG. NO.:</strong> {studentData.regNo}</p>
              <p><strong>Roll No.:</strong> {studentData.rollNo}</p>
              <p><strong>Institute:</strong> {studentData.institute}</p>
              <p><strong>Course:</strong> {studentData.course}</p>
              <p><strong>Semester:</strong> {studentData.semester}</p>
            </div>

            {/* Fees Breakup */}
            <div className="border border-gray-400 rounded-md mb-4">
              <h3 className="text-center font-bold border-b border-gray-400 py-2">Fees Details</h3>
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-2 py-1 text-left">Fees Head</th>
                    <th className="border border-gray-400 px-2 py-1 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.feesBreakup.map((fee, idx) => (
                    <tr key={idx} className="border-b border-gray-300">
                      <td className="border border-gray-400 px-2 py-1">{fee.head}</td>
                      <td className="border border-gray-400 px-2 py-1 text-right">{fee.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Payment Details */}
            <div className="border border-gray-400 rounded-md mb-4">
              <h3 className="text-center font-bold border-b border-gray-400 py-2">Payment Details</h3>
              <table className="w-full border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-400">
                    <th className="py-2 px-4 text-left">Pay By</th>
                    <th className="py-2 px-4 text-left">Trans No</th>
                    <th className="py-2 px-4 text-left">Trans Date</th>
                    <th className="py-2 px-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4">{studentData.payment.mode}</td>
                    <td className="py-2 px-4">{studentData.payment.transNo}</td>
                    <td className="py-2 px-4">{studentData.payment.transDate}</td>
                    <td className="py-2 px-4 text-right">{studentData.payment.amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Total Amount in Words */}
            <p className="mt-2 font-semibold text-sm">
              Total Amount In Words: <span className="ml-2">RUPEES FORTY-THREE THOUSAND TWO HUNDRED FIFTY ONLY</span>
            </p>

            {/* Download Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleDownload}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemExamFeesClearance;
