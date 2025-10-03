import React from "react";
import Logo from "../assets/logo.png";

const inputClass =
  "bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-blue-950 file:text-white file:px-2 file:rounded-sm file:cursor-pointer";
// const selectClass = inputClass;

const AddAdmin = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 rounded-2xl overflow-hidden">
            {/* Header */}
                <header className="bg-blue-950 flex flex-col sm:flex-row items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md">
                    <div className="flex items-center gap-4">
                        <img
                        src={Logo}
                        alt="Logo"
                        className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white"
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
                Admin Registration
                </h1>
                <hr className="bg-black w-[60%] mx-auto" />
            </section>
    
            {/* Form */} {/* Student Details */}
            <section className="flex justify-center px-4 sm:px-6 lg:px-10 my-6">
                <form >
                    <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6">
                        <h3 className="text-2xl sm:text-3xl text-center mb-2">Add New Admin</h3>
                        <hr className="bg-white mb-4" />
    
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
                            {/* Name */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Name <span className="text-white">*</span></label>
                                <input type="text" name="name" placeholder="Enter Your Name" required className={inputClass} />
                                <p id="vcheck"><i>Enter your name?</i></p>
                            </div>
    
                            {/* Mobile Number */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Mobile Number <span className="text-white">*</span></label>
                                <input type="text" name="mobile" placeholder="Enter Your Mobile Number" required className={inputClass} />
                            </div>
    
                            {/* Email ID */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Email ID <span className="text-white">*</span></label>
                                <input type="email" name="email" placeholder="Enter Your Email ID" required className={inputClass} />
                            </div>

                            {/* Username */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Username <span className="text-white">*</span></label>
                                <input type="text" name="username" placeholder="Enter Your Username" required className={inputClass} />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Password <span className="text-white">*</span></label>
                                <input type="passsword" name="password" minlength="8" placeholder="Enter Your Password" required className={inputClass} />
                            </div>
    
                            {/* Date of Birth */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Date of Birth <span className="text-white">*</span></label>
                                <input type="date" name="dob" required className={inputClass} />
                            </div>
    
                            {/* Address */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Address <span className="text-white">*</span></label>
                                <input type="text" name="address"  placeholder="Enter Your Address" required className={inputClass} />
                            </div>
    
                            {/* District */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">District <span className="text-white">*</span></label>
                                <input type="text" name="district"  placeholder="Enter Your District" required className={inputClass} />
                            </div>
    
                            {/* State */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">State <span className="text-white">*</span></label>
                                <input type="text" name="state" placeholder="Enter Your State" required className={inputClass} />
                            </div>
    
    
                            {/* Profile Picture */}
                            <div className="flex flex-col w-full max-w-xs">
                                <label className="mb-1 self-start w-full max-w-xs">Profile Picture <span className="text-white">*</span></label>
                                <input type="file" name="image"  required className={inputClass} />
                            </div>
                        </div>
                    </div>
    
                    {/* Submit Button */}
                    <div className="flex justify-start my-6">
                        <button type="submit"  className="ml-3 bg-transparent text-green-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-green-600 hover:text-white outline-3 outline-green-500">
                        Submit
                        </button>
                        <button type="reset" className="mx-3 bg-transparent text-red-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-red-600 hover:text-white outline-3 outline-red-500">
                        Reset
                        </button>
                    </div>
                
                </form>
            </section>
            </div>
        </>
      );
}

export default AddAdmin;