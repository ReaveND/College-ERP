import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { toast } from "react-toastify";
import { addAdmin } from "../Service/api.js";

const inputClass =
  "bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-blue-950 file:text-white file:px-2 file:rounded-sm file:cursor-pointer";


const AddAdmin = () => {
  const [admin, setAdmin] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    address: "",
    district: "",
    state: "",
    image: "",
    username: "",
    password: "",
  });

  // handle text input changes
  const onValueChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
    console.log(admin);
  };

  // handle file input
  const fileData = (e) => {
    setAdmin({ ...admin, image: e.target.files[0] });
  };

  // handle form submission
  const submitData = async (e) => {
    e.preventDefault();

    // validation
    if (!admin.name) {
      alert("Please enter your Name!");
    } else if (!admin.mobile) {
      alert("Please enter your Mobile Number!");
    } else if (admin.mobile.length !== 10) {
      alert("Enter a valid 10-digit Mobile Number!");
    } else if (!admin.email) {
      alert("Please enter your Email ID!");
    } else if (!admin.username) {
      alert("Please enter your Username!");
    } else if (admin.username.length < 5) {
      alert("Username must be at least 5 characters long!");
    } else if (!/^[A-Z]/.test(admin.username)) {
      alert("Username must start with a capital letter!");
    } else if (!admin.password) {
      alert("Please enter your Password!");
    } else if (admin.password.length < 8) {
      alert("Password must be at least 8 characters long!");
    } else if (!admin.dob) {
      alert("Please enter your Date of Birth!");
    } else if (!admin.address) {
      alert("Please enter your Address!");
    } else if (!admin.district) {
      alert("Please enter your District!");
    } else if (!admin.state) {
      alert("Please enter your State!");
    } else if (!admin.image) {
      alert("Please upload your Profile Picture!");
    } else {
      // Create FormData object
      const formData = new FormData();
      formData.append("image", admin.image, admin.image.name);
      formData.append("name", admin.name);
      formData.append("mobile", admin.mobile);
      formData.append("email", admin.email);
      formData.append("dob", admin.dob);
      formData.append("address", admin.address);
      formData.append("district", admin.district);
      formData.append("state", admin.state);
      formData.append("username", admin.username);
      formData.append("password", admin.password);

      try {
        const res = await addAdmin(formData);
        console.log("Response status:", res.status);
        if (res.status === 201) {
          toast.success(res.data || "Admin added successfully!");
        } else {
          toast.error("Something went wrong. Please try again!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              background: "#ff4d4f",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
            },
          });
        }
      } catch (error) {
        console.error("Caught error:", error);

        if (error.code === 11000 && error.keyPattern?.email) {
          toast.error("Email already exists. Please use a different one.");
        } else {
          toast.error("Something went wrong while adding Admin!");
        }
      }
    }
  };

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

        {/* Form */}
        <section className="flex justify-center px-4 sm:px-6 lg:px-10 my-6">
          <form>
            <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl text-center mb-2">
                Add New Admin
              </h3>
              <hr className="bg-white mb-4" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
                {/* Name */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Name <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={onValueChange}
                    placeholder="Enter Your Name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Mobile */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Mobile Number <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    onChange={onValueChange}
                    placeholder="Enter Your Mobile Number"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Email ID <span className="text-white">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={onValueChange}
                    placeholder="Enter Your Email ID"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Username */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Username <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={onValueChange}
                    placeholder="Enter Your Username"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Password <span className="text-white">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={onValueChange}
                    minLength="8"
                    placeholder="Enter Your Password"
                    required
                    className={inputClass}
                  />
                </div>

                {/* DOB */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Date of Birth <span className="text-white">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    onChange={onValueChange}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Address <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    onChange={onValueChange}
                    placeholder="Enter Your Address"
                    required
                    className={inputClass}
                  />
                </div>

                {/* District */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    District <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="district"
                    onChange={onValueChange}
                    placeholder="Enter Your District"
                    required
                    className={inputClass}
                  />
                </div>

                {/* State */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    State <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    onChange={onValueChange}
                    placeholder="Enter Your State"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Image */}
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-1 self-start w-full max-w-xs">
                    Profile Picture <span className="text-white">*</span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={fileData}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-start my-6">
              <button
                type="submit"
                onClick={submitData}
                className="ml-3 bg-transparent text-green-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-green-600 hover:text-white outline-3 outline-green-500"
              >
                Submit
              </button>
              <button
                type="reset"
                className="mx-3 bg-transparent text-red-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-red-600 hover:text-white outline-3 outline-red-500"
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddAdmin;
