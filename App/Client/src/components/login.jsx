import React from "react";
import bgImage from "../assets/college.jpg";
import collegeLogo from "../assets/logo.png";

function Login() {

  


  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[340px] px-6 py-10 pb-8 rounded-xl bg-white/80 text-center shadow-lg">
        {/* College Logo */}
        <img
          src={collegeLogo}
          alt="College Logo"
          className="w-[100px] mx-auto rounded-full shadow-md mb-4"
        />

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Login to Dashboard</h2>

        {/* Username input */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border border-gray-400 outline-none backdrop-blur-sm"
          />
        </div>

        {/* Password input */}
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-gray-400 outline-none backdrop-blur-sm"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between items-center text-sm text-gray-700 mb-5">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#" className="text-blue-900 font-medium hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="mx-auto w-[150px] py-3 mt-1 bg-gradient-to-br from-blue-900 to-blue-700 text-white font-bold text-[15px] rounded-md hover:from-blue-800 hover:to-blue-900 transform hover:scale-105 transition">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
