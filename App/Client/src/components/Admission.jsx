import React from "react";
import Logo from "../assets/logo.png";

const inputClass =
  "bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-blue-950 file:text-white file:px-2 file:rounded-sm file:cursor-pointer";
const selectClass = inputClass;

const Admission = () => {
  return (
    <div className="min-h-screen bg-gray-100 rounded-2xl overflow-hidden">
      {/* Header */}
        <header className="bg-blue-950 flex flex-col sm:flex-row items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md">
            <div className="flex items-center gap-4">
                <img
                src={Logo}
                alt="Logo"
                className="w-24 h-24 mx-auto object-cover rounded-full [box-shadow:_0_0_25px_#FFD700]"
                />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center ml-3">
                Vedanta Institute of Technology
                </h2>
            </div>
        </header>


      {/* Title */}
      <section className="px-4 text-center">
        <hr className="bg-black w-[60%] mx-auto" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6">
          Student Admission Form
        </h1>
        <hr className="bg-black w-[60%] mx-auto" />
      </section>

      {/* Form */} {/* Student Details */}
      <section className="flex justify-center px-4 sm:px-6 lg:px-10 my-6">
        <form >
            <div className="bg-blue-950 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6">
                <h3 className="text-2xl sm:text-3xl text-center mb-2">Personal Details</h3>
                <hr className="bg-white mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {/* Name */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Name <span className="text-white">*</span></label>
                    <input type="text" name="name" placeholder="Enter Your Name" required className={inputClass} />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Mobile Number <span className="text-white">*</span></label>
                    <input type="text" name="mob" placeholder="Enter Your Mobile Number" required className={inputClass} />
                    </div>

                    {/* Email ID */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Email ID <span className="text-white">*</span></label>
                    <input type="email" name="email" placeholder="Enter Your Email ID" required className={inputClass} />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Date of Birth <span className="text-white">*</span></label>
                    <input type="date" name="dob" required className={inputClass} />
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Gender <span className="text-white">*</span></label>
                    <select name="gender" required className={selectClass}>
                        <option disabled selected value="">--Select Your Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Address <span className="text-white">*</span></label>
                    <input type="text" name="addr" placeholder="Enter Your Address" required className={inputClass} />
                    </div>

                    {/* District */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">District <span className="text-white">*</span></label>
                    <input type="text" name="district" placeholder="Enter Your District" required className={inputClass} />
                    </div>

                    {/* State */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">State <span className="text-white">*</span></label>
                    <input type="text" name="state" placeholder="Enter Your State" required className={inputClass} />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Category <span className="text-white">*</span></label>
                    <select name="category" required className={selectClass}>
                        <option disabled selected value="">--Select Your Category--</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="OBC">OBC</option>
                        <option value="General">General</option>
                    </select>
                    </div>

                    {/* Religion */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Religion <span className="text-white">*</span></label>
                    <select name="religion" required className={selectClass}>
                        <option disabled selected value="">--Select Your Religion--</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Christian">Christian</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Profile Picture <span className="text-white">*</span></label>
                    <input type="file" name="image" required className={inputClass} />
                    </div>

                    {/* Signature */}
                    <div className="flex flex-col w-full max-w-xs">
                    <label className="mb-1 self-start w-full max-w-xs">Signature <span className="text-white">*</span></label>
                    <input type="file" name="sign" required className={inputClass} />
                    </div>
                </div>
            </div>

            {/* Guardian Details */}
            <div className="bg-blue-950 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6 mt-8">
                <h3 className="text-2xl sm:text-3xl text-center mb-2">Guardian Details</h3>
                <hr className="bg-white mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {/* Father's Name */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Father's Name <span className="text-white">*</span></label>
                        <input type="text" name="fatherName" placeholder="Enter Your Father's Name" required className={inputClass} />
                    </div>

                    {/* Father's Mobile Number */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Father's Mobile Number <span className="text-white">*</span></label>
                        <input type="text" name="fatherMobile" placeholder="Enter Your Father's Mobile Number" required className={inputClass} />
                    </div>

                    {/* Father's Email */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Father's Email <span className="text-white">*</span></label>
                        <input type="email" name="fatherEmail" placeholder="Enter Your Father's Email" required className={inputClass} />
                    </div>

                    {/* Father's Educational Qualification */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Father's Educational Qualification <span className="text-white">*</span></label>
                        <input type="text" name="fatherEducation" placeholder="Enter Father's Educational Qualification" required className={inputClass} />
                    </div>

                    {/* Father's Occupation */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Father's Occupation <span className="text-white">*</span></label>
                        <input type="text" name="fatherOccupation" placeholder="Enter Father's Occupation" required className={inputClass} />
                    </div>

                    {/* Mother's Name */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Mother's Name <span className="text-white">*</span></label>
                        <input type="text" name="motherName" placeholder="Enter Your Mother's Name" required className={inputClass} />
                    </div>

                    {/* Mother's Mobile */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Mother's Mobile Number <span className="text-white">*</span></label>
                        <input type="text" name="motherMobile" placeholder="Enter Your Mother's Mobile Number" required className={inputClass} />
                    </div>

                    {/* Mother's Educational Qualification */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Mother's Educational Qualification <span className="text-white">*</span></label>
                        <input type="text" name="motherEducation" placeholder="Enter Mother's Educational Qualification" required className={inputClass} />
                    </div>

                    {/* Mother's Occupation */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Mother's Occupation <span className="text-white">*</span></label>
                        <input type="text" name="motherOccupation" placeholder="Enter Mother's Occupation" required className={inputClass} />
                    </div>
                </div>
            </div>

            {/* Academic Details */}
            <div className="bg-blue-950 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6 mt-8">
                <h3 className="text-2xl sm:text-3xl text-center mb-2">Academic Details</h3>
                <hr className="bg-white mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {/* School Name */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">School Name <span className="text-white">*</span></label>
                        <input type="text" name="schoolName" placeholder="Enter Your School Name" required className={inputClass} />
                    </div>

                    {/* Board */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Board <span className="text-white">*</span></label>
                        <input type="text" name="boardTen" placeholder="Enter Your Education Board" required className={inputClass} />
                    </div>

                    {/* Year of Passing */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Year of Passing <span className="text-white">*</span></label>
                        <input type="text" name="yopTen" placeholder="Enter Your Passing Year" required className={inputClass} />
                    </div>
                </div>

                <h3 className="text-2xl font-medium text-center mb-6">Marks in Tenth Grade Examination</h3>
                <div className="grid grid-cols-1 bg-[#efefef] text-black rounded-xl shadow-md p-4 w-full max-w-5xl mx-auto mt-5">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-center border-collapse rounded-2xl shadow-2xl">
                        <thead>
                            <tr className="bg-gray-400">
                            <th className="px-4 py-2 bg-[#efefef]">Subjects</th>
                            <th className="px-4 py-2">First</th>
                            <th className="px-4 py-2">Second</th>
                            <th className="px-4 py-2">Third</th>
                            <th className="px-4 py-2">Fourth</th>
                            <th className="px-4 py-2">Fifth</th>
                            <th className="px-4 py-2">Sixth</th>
                            <th className="px-4 py-2">Seventh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="font-semibold px-4 py-2">Marks</td>
                            <td><input type="text" name="mark1" className="border rounded px-2 py-1 w-full" /></td>
                            <td><input type="text" name="mark2" className="border rounded px-2 py-1 w-full" /></td>
                            <td><input type="text" name="mark3" className="border rounded px-2 py-1 w-full" /></td>
                            <td><input type="text" name="mark4" className="border rounded px-2 py-1 w-full" /></td>
                            <td><input type="text" name="mark5" className="border rounded px-2 py-1 w-full" /></td>
                            <td><input type="text" name="mark6" className="border rounded px-2 py-1 w-full" /></td>
                            <td><input type="text" name="mark7" className="border rounded px-2 py-1 w-full" /></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {/* School Name */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">School Name <span className="text-white">*</span></label>
                        <input type="text" name="schoolName" placeholder="Enter Your School Name" required className={inputClass} />
                    </div>

                    {/* Board */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Board <span className="text-white">*</span></label>
                        <input type="text" name="boardTen" placeholder="Enter Your Education Board" required className={inputClass} />
                    </div>

                    {/* Year of Passing */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Year of Passing <span className="text-white">*</span></label>
                        <input type="text" name="yopTen" placeholder="Enter Your Passing Year" required className={inputClass} />
                    </div>
                </div>

                <h3 className="text-2xl font-medium text-center mb-6">Marks in Twelvth Grade Examination</h3>
                <div className="grid grid-cols-1 bg-[#efefef] text-black rounded-xl shadow-md p-4 w-full max-w-5xl mx-auto mt-5">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-center border-collapse rounded-2xl shadow-2xl">
                    <thead>
                        <tr className="bg-gray-400">
                        <th className="px-4 py-2 bg-[#efefef]">Subjects</th>
                        <th className="px-4 py-2">First</th>
                        <th className="px-4 py-2">Second</th>
                        <th className="px-4 py-2">Third</th>
                        <th className="px-4 py-2">Fourth</th>
                        <th className="px-4 py-2">Fifth</th>
                        <th className="px-4 py-2">Sixth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="font-semibold px-4 py-2">Marks</td>
                        <td><input type="text" name="mark1" className="border rounded px-2 py-1 w-full" /></td>
                        <td><input type="text" name="mark2" className="border rounded px-2 py-1 w-full" /></td>
                        <td><input type="text" name="mark3" className="border rounded px-2 py-1 w-full" /></td>
                        <td><input type="text" name="mark4" className="border rounded px-2 py-1 w-full" /></td>
                        <td><input type="text" name="mark5" className="border rounded px-2 py-1 w-full" /></td>
                        <td><input type="text" name="mark6" className="border rounded px-2 py-1 w-full" /></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>

          {/* Submit Button */}
          <div className="flex justify-start my-6">
            <button type="submit" className="ml-3 bg-transparent text-green-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-green-600 hover:text-white outline-3 outline-green-500">
              Submit
            </button>
            <button type="reset" className="mx-3 bg-transparent text-red-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-red-600 hover:text-white outline-3 outline-red-500">
              Reset
            </button>
          </div>
          
        </form>
      </section>
    </div>
  );
};

export default Admission;