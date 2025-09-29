import React from "react";
import Logo from "../assets/logo.png";
import { toast } from 'react-toastify';
import { useState } from 'react';
import { addStudent } from "../Service/api.js";

const inputClass =
  "bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:bg-blue-950 file:text-white file:px-2 file:rounded-sm file:cursor-pointer";
const selectClass = inputClass;

const Admission = () => {

    const[student, setStudent] = useState({
        name:'',
        fname:'',
        mname:'',
        mobile:'',
        email:'',
        dob:'',
        gender:'',
        address:'',
        district:'',
        state:'',
        course:'',
        image:'',
        SCName:'',
        marks:'',
        yop:'',
        HSCName:'',
        HSmarks:'',
        HSyop:'',
    })

    const onValueChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value})
        console.log(student);
    }

    const fileData = (e) => {
        setStudent({...student, image: e.target.files[0]})
    }

    const submitData = async(e) => {
        e.preventDefault();
        const currentYear = new Date().getFullYear();
        const yop = parseInt(student.yop, 10);
        
        //Validation
        if(!student.name)
        {
            // document.getElementById('vcheck').style.display='block';
            alert("Please enter your Name!");
        }else if(!student.fname){
            alert("Please enter your Father's Name!");
        }else if(!student.mname){
            alert("Please enter your Mother's Name!");
        }else if(!student.mobile){
            alert("Please enter your Mobile Number!");
        }else if(student.mobile.length!==10){
            alert("Enter a Valid Mobile Number!");
        }else if(!student.email){
            alert("Please enter your Email ID!");
        }else if(!student.dob){
            alert("Please enter your Date of Birth!");
        }else if(!student.gender){
            alert("Pleasre select your Gender!");
        }else if(!student.address){
            alert("Please enter your Address!");
        }else if(!student.district){
            alert("Please enter your District!");
        }else if(!student.state){
            alert("Please enter your State!");
        }else if(!student.course){
            alert("Please enter your Course!");
        }else if(!student.image){
            alert("Please upload your Profile Picture!");
        }else if(!student.SCName){
            alert("Please enter your High School Name!");
        }else if(!student.marks){
            alert("Please enter your Madhyamik Marks!");
        }else if(student.marks < 0 || student.marks > 100){
            alert("Marks must be between 0 to 100!");
        }else if(!student.yop){
            alert("Please enter your Tenth Grade Year of Passing!");
        }else if(student.yop.length !== 4 || yop < 1995 || yop > currentYear - 2){
            alert("Enter a valid Year!");
        }else if(!student.HSCName){
            alert("Please enter your Higher Secondary School Name!");
        }else if(!student.HSmarks){
            alert("Please enter your H.S. Marks!");
        }else if(student.HSmarks < 0 || student.HSmarks > 100){
            alert("Marks must be between 0 to 100!");
        }else if(!student.HSyop){
            alert("Please enter your Twelvth Grade Year of Passing!");
        }else if(student.HSyop.length !== 4 || student.HSyop < 1995 || student.HSyop > new Date().getFullYear()){
            alert("Enter a valid Year!");
        }else{
            const formData = new FormData()
            formData.append('image', student.image, student.image.name);
            formData.append('name', student.name);
            formData.append('fname', student.fname);
            formData.append('mname', student.mname);
            formData.append('mobile', student.mobile);
            formData.append('email', student.email);
            formData.append('dob', student.dob);
            formData.append('gender', student.gender);
            formData.append('address', student.address);
            formData.append('district', student.district);
            formData.append('state', student.state);
            formData.append('course', student.course);
            formData.append('SCName', student.SCName);
            formData.append('marks', student.marks);
            formData.append('yop', student.yop);
            formData.append('HSCName', student.HSCName);
            formData.append('HSmarks', student.HSmarks);
            formData.append('HSyop', student.HSyop);

            try {
                const res = await addStudent(formData);
                console.log("Response status:", res.status);
                if(res.status === 201){
                    toast.success(res.data || "User added successfully!");
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
                    toast.error("Something went wrong while adding student!");
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
            Student Admission Form
            </h1>
            <hr className="bg-black w-[60%] mx-auto" />
        </section>

        {/* Form */} {/* Student Details */}
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
                        <p id="vcheck"><i>Enter your name?</i></p>
                        </div>

                        {/* Father's Name */}
                        <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 self-start w-full max-w-xs">Father's Name <span className="text-white">*</span></label>
                        <input type="text" name="fname" onChange={onValueChange} placeholder="Enter Your Father's Name" required className={inputClass} />
                        </div>

                        {/* Mother's Name */}
                        <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 self-start w-full max-w-xs">Mother's Name <span className="text-white">*</span></label>
                        <input type="text" name="mname" onChange={onValueChange} placeholder="Enter Your Mother's Name" required className={inputClass} />
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

                        {/* Course */}
                        <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 self-start w-full max-w-xs">Course <span className="text-white">*</span></label>
                        <select name="course" onChange={onValueChange} required className={selectClass}>
                            <option disabled selected value="">--Select Your Course--</option>
                            <option value="BCA">BCA</option>
                            <option value="BTech">BTech</option>
                            <option value="BBA">BBA</option>
                            <option value="CSBS">CSBS</option>
                        </select>
                        </div>

                        {/* Profile Picture */}
                        <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-1 self-start w-full max-w-xs">Profile Picture <span className="text-white">*</span></label>
                        <input type="file" name="image" onChange={fileData} required className={inputClass} />
                        </div>

                    </div>
                </div>

                {/* Academic Details */}
                <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full max-w-6xl rounded-xl shadow-2xl p-6 space-y-6 mt-8">
                    <h3 className="text-2xl sm:text-3xl text-center mb-2">Academic Details</h3>
                    <hr className="bg-white mb-4" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        {/* School Name */}
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="mb-1 text-white">School Name <span className="text-white">*</span></label>
                            <input type="text" name="SCName" onChange={onValueChange} placeholder="Enter Your School Name" required className={inputClass} />
                        </div>

                        {/* Tenth Marks */}
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="mb-1 text-white">Marks in Madhyamik (%) <span className="text-white">*</span></label>
                            <input type="text" name="marks" onChange={onValueChange} placeholder="Enter Your Madhyamik Marks" required className={inputClass} />
                        </div>

                        {/* Year of Passing */}
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="mb-1 text-white">Year of Passing <span className="text-white">*</span></label>
                            <input type="text" name="yop" onChange={onValueChange} placeholder="Enter Your Passing Year" required className={inputClass} />
                        </div>
                    </div>

                    {/* <h3 className="text-2xl font-medium text-center mb-6">Marks in Tenth Grade Examination</h3>
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
                    </div> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        {/* School Name */}
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="mb-1 text-white">School Name <span className="text-white">*</span></label>
                            <input type="text" name="HSCName" onChange={onValueChange} placeholder="Enter Your School Name" required className={inputClass} />
                        </div>

                        {/* H.S. Marks */}
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="mb-1 text-white">Marks in H.S. (%) <span className="text-white">*</span></label>
                            <input type="text" name="HSmarks" onChange={onValueChange} placeholder="Enter Your H.S. Marks" required className={inputClass} />
                        </div>

                        {/* Year of Passing */}
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="mb-1 text-white">Year of Passing <span className="text-white">*</span></label>
                            <input type="text" name="HSyop" onChange={onValueChange} placeholder="Enter Your Passing Year" required className={inputClass} />
                        </div>
                    </div>

                    {/* <h3 className="text-2xl font-medium text-center mb-6">Marks in Twelvth Grade Examination</h3>
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
                    </div> */}
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
  );
};

export default Admission;