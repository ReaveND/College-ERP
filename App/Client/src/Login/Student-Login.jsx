import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { logStudent } from '../Service/api';
import '../assets/css/login1.css';

const StudentLogin = () => {


  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.trim()) {
      setMessage('Email is required');
      return false;
    }
    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      return false;
    }
    if (!mobile.trim()) {
      setMessage('Password is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; //Stop if validation fails

    try {
      const { data } = await logStudent({ email, mobile, role: 'student' });

      toast.success(`Welcome back, ${data.name}!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "8px",
        },
      });
  
      // setMessage(data.message);
      localStorage.setItem('token', data.token);
      navigate('/Student');
    } catch (error) {
      toast.error(
        error.response?.status === 404 || error.response?.status === 400
          ? 'Invalid credentials'
          : error.response?.data?.error || 'Something went wrong'
      );
    }
  };

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
          Student Login
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="form-field flex items-center px-3 py-2 rounded-full">
            <i className="fa-solid fa-user fa-beat-fade text-white ml-7 mr-3" />
            <input
              type="text"
              name="email"
              placeholder="Username"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              name="mobile"
              placeholder="Password"
              required
              autoComplete="off"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-yellow-600 text-white font-bold text-lg rounded-full shadow-[3px_3px_3px_#b1b1b1,-3px_-3px_3px_#fff] tracking-wider hover:bg-[#039BE5] cursor-pointer duration-500"
          >
            Login
          </button>
        </form>
        {message && <p className="text-center mt-3 text-red-500">{message}</p>}
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

export default StudentLogin;