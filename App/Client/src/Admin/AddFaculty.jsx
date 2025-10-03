import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import { toast } from 'react-toastify';
import { addFaculty } from '../Service/api.js';

const inputClass =
  "bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-blue-950 file:text-white file:px-2 file:rounded-sm file:cursor-pointer";
const selectClass = inputClass;

const AddFaculty = () => {

  const[faculty, setFaculty] = useState({
          name:'',
          mobile:'',
          email:'',
          dob:'',
          gender:'',
          address:'',
          district:'',
          state:'',
          image:'',
          qualification:'',
          specialization:'',
          department:'',
          designation:'',
          username:'',
          password:'',
          experience:'',
          publication:'',
          doj:'',
      })
  
      const onValueChange = (e) => {
          setFaculty({...faculty, [e.target.name]: e.target.value})
          console.log(faculty);
      }
  
      const fileData = (e) => {
          setFaculty({...faculty, image: e.target.files[0]})
      }

      const submitData = async(e) => {
              e.preventDefault();
              
              //Validation
              if(!faculty.name)
              {
                  alert("Please enter your Name!");
              }else if(!faculty.mobile){
                  alert("Please enter your Mobile Number!");
              }else if(faculty.mobile.length!==10){
                  alert("Enter a Valid Mobile Number!");
              }else if(!faculty.email){
                  alert("Please enter your Email ID!");
              }else if(!faculty.dob){
                  alert("Please enter your Date of Birth!");
              }else if(!faculty.gender){
                  alert("Pleasre select your Gender!");
              }else if(!faculty.address){
                  alert("Please enter your Address!");
              }else if(!faculty.district){
                  alert("Please enter your District!");
              }else if(!faculty.state){
                  alert("Please enter your State!");
              }else if(!faculty.image){
                  alert("Please upload your Profile Picture!");
              }else if(!faculty.qualification){
                  alert("Please enter your Education Qualifcation!");
              }else if(!faculty.specialization){
                  alert("Please enter your Subject Specializations!");
              }else if(!faculty.department){
                  alert("Please enter your Teaching Department!");
              }else if(!faculty.designation){
                  alert("Please enter your Faculty Designation!");
              }else if(!faculty.username){
                  alert("Please enter your H.S. Marks!");
              }else if (faculty.username.length < 5) {
                  alert("Username must be at least 8 characters long!");
              }else if (!/^[A-Z]/.test(faculty.username)) {
                  alert("Username must start with a capital letter!");
              }else if (!faculty.password) {
                  alert("Please enter your password!");
                  return false;
              }else if (faculty.password.length < 8) {
                  alert("Password must be at least 8 characters long!");
                  return false;
              }else if (!faculty.experience) {
                  alert("Please enter your Experience!");
              }else if (faculty.experience.length>=2) {
                  alert("Experience seems Invalid!");
              }else if (!faculty.publication) {
                  alert("Please enter your Publications!");
              }else if (!faculty.doj) {
                  alert("Please enter your Date of Joining!");
              }else if (new Date(faculty.doj) > new Date(new Date().setMonth(new Date().getMonth() + 3))) {
                  alert("Date of Joining cannot be more than 3 months from now!");
              }else{
                  const formData = new FormData()
                  formData.append('image', faculty.image, faculty.image.name);
                  formData.append('name', faculty.name);
                  formData.append('mobile', faculty.mobile);
                  formData.append('email', faculty.email);
                  formData.append('dob', faculty.dob);
                  formData.append('gender', faculty.gender);
                  formData.append('address', faculty.address);
                  formData.append('district', faculty.district);
                  formData.append('state', faculty.state);
                  formData.append('qualification', faculty.qualification);
                  formData.append('specialization', faculty.specialization);
                  formData.append('department', faculty.department);
                  formData.append('designation', faculty.designation);
                  formData.append('username', faculty.username);
                  formData.append('password', faculty.password);
                  formData.append('experience', faculty.experience);
                  formData.append('publication', faculty.publication);
                  formData.append('doj', faculty.doj);
      
                  try {
                      const res = await addFaculty(formData);
                      console.log("Response status:", res.status);
                      if(res.status === 201){
                          toast.success(res.data || "Faculty Member added successfully!");
                      }else{
                          console.log("Toast firing");
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
      
                      // Handle MongoDB duplicate email error
                      if (error.code === 11000 && error.keyPattern?.email) {
                          toast.error("Email already exists. Please use a different one.");
                      } else {
                          toast.error("Something went wrong while adding Faculty!");
                      }
                  }
              }
          }
  
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
            Faculty Recruitment Form
            </h1>
            <hr className="bg-black w-[60%] mx-auto" />
        </section>
      
        {/* Form */}
        <section className="flex justify-center px-4 sm:px-6 lg:px-10 my-6">
            <form >
                <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6">
                  <h3 className="text-2xl sm:text-3xl text-center mb-2">Personal Details</h3>
                  <hr className="bg-white mb-4" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {/* Name */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Name <span className="text-white">*</span></label>
                      <input type="text" name="name" onChange={onValueChange} placeholder="Enter Your Name" required className={inputClass} />
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Mobile Number <span className="text-white">*</span></label>
                      <input type="text" name="mobile" onChange={onValueChange} placeholder="Enter Your Mobile Number" required className={inputClass} />
                    </div>

                    {/* Email ID */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Email ID <span className="text-white">*</span></label>
                      <input type="email" name="email" onChange={onValueChange} placeholder="Enter Your Email ID" required className={inputClass} />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Date of Birth <span className="text-white">*</span></label>
                      <input type="date" name="dob" onChange={onValueChange} required className={inputClass} />
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Gender <span className="text-white">*</span></label>
                      <select name="gender" onChange={onValueChange} required className={selectClass}>
                          <option disabled selected value="">--Select Your Gender--</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Address <span className="text-white">*</span></label>
                      <input type="text" name="address" onChange={onValueChange} placeholder="Enter Your Address" required className={inputClass} />
                    </div>

                    {/* District */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">District <span className="text-white">*</span></label>
                      <input type="text" name="district" onChange={onValueChange} placeholder="Enter Your District" required className={inputClass} />
                    </div>

                    {/* State */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">State <span className="text-white">*</span></label>
                      <input type="text" name="state" onChange={onValueChange} placeholder="Enter Your State" required className={inputClass} />
                    </div>

                    {/* Profile Picture */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Profile Picture <span className="text-white">*</span></label>
                      <input type="file" name="image" onChange={fileData} required className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Education Qualification */}
                <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6 mt-8">
                  <h3 className="text-2xl sm:text-3xl text-center mb-2">Education Qualification & Joining</h3>
                  <hr className="bg-white mb-4" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {/* Qualification */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Education Qualification <span className="text-white">*</span></label>
                        <input type="text" name="qualification" onChange={onValueChange} placeholder="Enter Your Qualification" required className={inputClass} />
                    </div>

                    {/* Specialization */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Specialization <span className="text-white">*</span></label>
                        <input type="text" name="specialization" onChange={onValueChange} placeholder="Enter Your Specialization" required className={inputClass} />
                    </div>

                    {/* Department */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Department <span className="text-white">*</span></label>
                        <select name="department" onChange={onValueChange} required className={selectClass}>
                          <option disabled selected value="">--Select Department--</option>
                          <option value="BCA">BCA</option>
                          <option value="B.Tech">B.Tech</option>
                          <option value="MCA">MCA</option>
                          <option value="M.Tech">M.Tech</option>
                        </select>
                    </div>

                    {/* Designation */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Designatiom <span className="text-white">*</span></label>
                        <select name="designation" onChange={onValueChange} required className={selectClass}>
                          <option disabled selected value="">--Select Designation--</option>
                          <option value="Professor">Professor</option>
                          <option value="Assistant Professor">Assistant Professor</option>
                          <option value="Lecturer">Lecturer</option>
                          <option value="Senior Lecturer">Senior Lecturer</option>
                          <option value="Visiting Faculty">Visiting Faculty</option>
                          <option value="HoD">HoD</option>
                          <option value="Lab Instructor">Lab Instructor</option>
                          <option value="Industry Expert">Industry Expert</option>
                        </select>
                    </div>

                    {/* Username */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Username <span className="text-white">*</span></label>
                      <input type="text" name="username" onChange={onValueChange} placeholder="Enter Your Username" required className={inputClass} />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Password <span className="text-white">*</span></label>
                      <input type="password" name="password" minLength="8" onChange={onValueChange} placeholder="Enter Your Password" required className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {/* Experience */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Experience <span className="text-white">*</span></label>
                        <input type="number" name="experience" onChange={onValueChange} placeholder="Enter Your Experience" required className={inputClass} />
                    </div>

                    {/* Publications */}
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 text-white">Publications <span className="text-white">*</span></label>
                        <input type="text" name="publication" onChange={onValueChange} placeholder="Enter Your Publications" required className={inputClass} />
                    </div>

                    {/* Date of Joining */}
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1 self-start w-full max-w-xs">Date of Joining <span className="text-white">*</span></label>
                      <input type="date" name="doj" onChange={onValueChange} required className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start my-6">
                  <button type="submit" onClick={submitData} className="ml-3 bg-transparent text-green-600 font-medium px-6 py-2 rounded-md hover:scale-105 transition-all hover:bg-green-600 hover:text-white outline-3 outline-green-500">
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
  )
}

export default AddFaculty;