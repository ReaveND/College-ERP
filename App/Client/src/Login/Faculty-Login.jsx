import React from 'react';
import Logo from '../assets/logo.png'
import '../assets/css/login1.css'

const FacultyLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-[Poppins]">
      <div className="grow-down max-w-sm w-full bg-[#0A243A] rounded-[15px] shadow-[8px_8px_8px_#cbced1,-8px_-8px_8px_#fff] p-8">
        {/* Logo */}
        <div className="mb-1">
          <img
            src={Logo}
            alt="cinex"
            className="w-56 h-[200px] object-cover mx-auto"
          />
        </div>

        {/* Title */}
        <div className="text-center text-white text-xl font-semibold tracking-wider mb-5">
          Faculty Login
        </div>

        {/* Form */}
        <form action="Admin_valid" method="post" className="space-y-5">
          <div className="form-field flex items-center px-3 py-2 rounded-full">
            <i className="fa-solid fa-user fa-beat-fade text-white ml-7 mr-3" />
            <input
              type="text"
              name="uname"
              id="userName"
              placeholder="Username"
              required
              autoComplete="off"
            />
          </div>

          {/* <div className="form-field flex items-center px-3 py-2 rounded-full">
            <i className="fa-solid fa-at fa-beat-fade text-white ml-7 mr-3" />
            <input
              type="email"
              name="uemail"
              id="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
          </div> */}

          <div className="form-field flex items-center px-3 py-2 rounded-full">
            <i className="fa-solid fa-key fa-beat-fade text-white ml-7 mr-3" />
            <input
              type="password"
              name="upass"
              id="pwd"
              placeholder="Password"
              required
              autoComplete="off"
              
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-yellow-600 text-white font-bold text-lg rounded-full shadow-[3px_3px_3px_#b1b1b1,-3px_-3px_3px_#fff] tracking-wider hover:bg-[#039BE5]"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center text-md mt-4 text-white">
          <a href="#" className="text-yellow-400 [text-shadow:2px_2px_4px_rgba(0,0,0,2)] hover:text-[#039BE5]">Forget password?</a>
          <span className="mx-2">or</span>
          <a href="#" className="text-yellow-400 hover:text-[#039BE5]">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;