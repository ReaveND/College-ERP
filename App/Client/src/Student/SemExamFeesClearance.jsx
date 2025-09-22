// File: SemExamFeesClearance.jsx
import React from "react";

const SemExamFeesClearance = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl border border-gray-400">
        
        {/* College Header */}
        <div className="border border-gray-400 rounded-md p-4 text-center mb-4">
          <h1 className="text-xl font-bold">Vedanta Institute of Technology</h1>
          <p className="text-sm text-gray-700">
            Anandapur Rd, Uchhepota, Kolkata, West Bengal 700150
          </p>
        </div>

        {/* Receipt Title */}
        <h2 className="text-lg font-bold text-center mb-4 underline">
          Fees Payment Receipt
        </h2>

        {/* Student Details */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-4 border-b border-gray-300 pb-4">
          <p><span className="font-semibold">Receipt No :</span> MR/187/22/020369</p>
          <p><span className="font-semibold">Academic Session :</span> 2022-2023</p>
          <p><span className="font-semibold">Receipt Date :</span> 03/10/2022</p>
          <p><span className="font-semibold">Semester :</span> 5th Semester</p>
          <p><span className="font-semibold">Name :</span> Abhishek Kumar</p>
          <p><span className="font-semibold">Course :</span> 4 yr B.Tech</p>
          <p><span className="font-semibold">Enrollment Id :</span> EN/187/20/BTECH/IT/025</p>
          <p><span className="font-semibold">Stream :</span> Information Technology</p>
          <p><span className="font-semibold">Student Id :</span> 2018702029</p>
          <p><span className="font-semibold">Admission Year :</span> 2020</p>
        </div>

        {/* Fees Details */}
        <div className="border border-gray-400 rounded-md mb-4">
          <h3 className="text-center font-bold border-b border-gray-400 py-2">
            Fees Details
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-400">
                <th className="py-2 px-4 text-left">Fees Head</th>
                <th className="py-2 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-4">Library cum Book - Bank Fee</td>
                <td className="py-2 px-4 text-right">750</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-2 px-4">Tuition Fees</td>
                <td className="py-2 px-4 text-right">42000</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Student Welfare &amp; Sports Fee</td>
                <td className="py-2 px-4 text-right">500</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Details */}
        <div className="border border-gray-400 rounded-md mb-4">
          <h3 className="text-center font-bold border-b border-gray-400 py-2">
            Payment Details
          </h3>
          <table className="w-full border-collapse">
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
                <td className="py-2 px-4">Online</td>
                <td className="py-2 px-4">pay_KPJljfmvdxLHge</td>
                <td className="py-2 px-4">03/10/2022</td>
                <td className="py-2 px-4 text-right">43250</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Amount in Words */}
        <p className="mt-2 font-semibold text-sm">
          Total Amount In Words :{" "}
          <span className="ml-2">
            RUPEES FORTY-THREE THOUSAND TWO HUNDRED FIFTY ONLY
          </span>
        </p>
      </div>
    </div>
  );
};

export default SemExamFeesClearance;
