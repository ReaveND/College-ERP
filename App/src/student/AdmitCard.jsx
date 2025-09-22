
import React from "react";
import collegeLogo from "../../assets/logo college.jpeg"; 
import studentPhoto from "../../assets/faculty-photo.jpeg";

const AdmitCard = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-200 p-4">
      
      {/* Outer Container with White Gap */}
      <div className="bg-white w-full max-w-5xl p-6 sm:p-10 shadow-2xl rounded-xl relative">
        
        {/* Single Border Inside with White Margin */}
        <div className="relative w-full bg-white border-[3px] sm:border-[4px] border-blue-950 p-4 sm:p-8">
          
          {/* Watermark */}
          <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-15 z-0 select-none pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => (
              <p
                key={i}
                className={`text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-gray-400 m-2 ${i % 2 === 0 ? "rotate-12" : "-rotate-12"}`}
              >
                Vedanta Institute of Technology
              </p>
            ))}
          </div>

          {/* College Header */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between border-b-2 border-black pb-4 z-10 gap-4">
            
            {/* Logo */}
            <img
              src={collegeLogo}
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-gray-400 object-cover"
            />

            {/* Heading Center */}
            <div className="flex-1 text-center font-bold">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide whitespace-normal sm:whitespace-nowrap">
                Vedanta Institute of Technology
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-1">
                Anandapur Rd, Uchhepota, Kolkata, West Bengal 700150
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 underline">Admit Card</p>
            </div>
          </div>

          {/* Student Details with Photo beside Name */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center z-10 relative font-semibold gap-6">
            {/* Student Info */}
            <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 flex-1">
              <p><span className="font-bold">Name of Student:</span> Ishika Das</p>
              <p><span className="font-bold">Roll No:</span> 21301021001</p>
              <p><span className="font-bold">Course & Semester:</span> BCA, 5th Semester</p>
              <p><span className="font-bold">Exam Type:</span> Odd Semester Examination (2023-24)</p>
            </div>

            {/* Student Photo (beside Name) */}
            <div className="flex justify-center">
              <img
                src={studentPhoto}
                alt="Student"
                className="w-24 h-28 sm:w-28 sm:h-32 md:w-32 md:h-36 border-2 border-black object-cover"
              />
            </div>
          </div>

          {/* Subject Table */}
          <div className="mt-6 z-10 relative font-semibold overflow-x-auto">
            <table className="w-full border-2 border-black text-xs sm:text-sm md:text-base text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border-2 border-black p-2 sm:p-3">Subject Code</th>
                  <th className="border-2 border-black p-2 sm:p-3">Subject Name</th>
                  <th className="border-2 border-black p-2 sm:p-3">Date</th>
                  <th className="border-2 border-black p-2 sm:p-3">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 border-black p-2 sm:p-3">BCA-501</td>
                  <td className="border-2 border-black p-2 sm:p-3">Internet Technology</td>
                  <td className="border-2 border-black p-2 sm:p-3">25-Nov-2023</td>
                  <td className="border-2 border-black p-2 sm:p-3">10:00 AM - 1:00 PM</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-2 sm:p-3">BCA-502</td>
                  <td className="border-2 border-black p-2 sm:p-3">Computer Networking</td>
                  <td className="border-2 border-black p-2 sm:p-3">27-Nov-2023</td>
                  <td className="border-2 border-black p-2 sm:p-3">10:00 AM - 1:00 PM</td>
                </tr>
                <tr>
                  <td className="border-2 border-black p-2 sm:p-3">BCA-503</td>
                  <td className="border-2 border-black p-2 sm:p-3">Cloud Computing</td>
                  <td className="border-2 border-black p-2 sm:p-3">29-Nov-2023</td>
                  <td className="border-2 border-black p-2 sm:p-3">10:00 AM - 1:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Instruction */}
          <div className="mt-4 text-xs sm:text-sm md:text-base italic z-10 relative font-semibold">
            <p>* This Admit Card must be carried to the Examination Hall. Keep it safe and bring it on every exam day.</p>
          </div>

          {/* Signatures */}
          <div className="flex flex-col sm:flex-row justify-between mt-10 text-center text-xs sm:text-sm md:text-base lg:text-lg z-10 relative font-semibold gap-6 sm:gap-0">
            <div className="flex-1">
              <div className="h-10 sm:h-12 border-b-2 border-black"></div>
              <p className="mt-1">Principal</p>
            </div>
            <div className="flex-1">
              <div className="h-10 sm:h-12 border-b-2 border-black"></div>
              <p className="mt-1">College Seal</p>
            </div>
            <div className="flex-1">
              <div className="h-10 sm:h-12 border-b-2 border-black"></div>
              <p className="mt-1">Exam Controller</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmitCard;
