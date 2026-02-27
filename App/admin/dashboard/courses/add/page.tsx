'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { addCourse, getFacultys, getCourses } from '@/lib/adminApi';

const inputClass =
    'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 file:border-0 file:bg-blue-950 file:text-white file:text-sm file:font-medium file:px-3 file:py-2 file:-my-2 file:-ml-3 file:mr-3 file:rounded-l-md file:cursor-pointer';
const selectClass = 'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500';
const textareaClass = 'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]';

export default function AddCoursePage() {
    const [course, setCourse] = useState({
        code: '', title: '', description: '', department: '', credits: '',
        semester: '', academicYear: '', maxEnrollment: '', schedule: '',
        primaryInstructor: '', coInstructors: [] as string[],
        location: '', prerequisites: [] as string[], courseLevel: '',
        status: true as boolean, gradingScheme: '', fee: '',
        syllabus: null as File | null,
    });

    const [instructors, setInstructors] = useState<any[]>([]);
    const [allCourses, setAllCourses] = useState<any[]>([]);

    useEffect(() => {
        fetchInstructors();
        fetchCourses();
    }, []);

    const fetchInstructors = async () => {
        try {
            const res = await getFacultys();
            if (res && res.data) {
                setInstructors(res.data);
            }
        } catch (error) {
            console.error('Error fetching instructors:', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const res = await getCourses();
            if (res && res.data) {
                setAllCourses(res.data);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setCourse({ ...course, [name]: checked });
        } else {
            setCourse({ ...course, [name]: value });
        }
    };

    const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, field: 'coInstructors' | 'prerequisites') => {
        const values = Array.from(e.target.selectedOptions).map(opt => opt.value);
        setCourse({ ...course, [field]: values });
    };

    const fileData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourse({ ...course, syllabus: e.target.files?.[0] ?? null });
    };

    const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!course.code) { toast.error('Please enter Course Code!'); return; }
        if (!course.title) { toast.error('Please enter Course Title!'); return; }
        if (!course.department) { toast.error('Please select Department!'); return; }
        if (!course.credits) { toast.error('Please enter Credits!'); return; }
        if (!course.primaryInstructor) { toast.error('Please select Primary Instructor!'); return; }

        const formData = new FormData();
        if (course.syllabus) {
            formData.append('syllabus', course.syllabus, course.syllabus.name);
        }

        // Add all other fields
        (['code', 'title', 'description', 'department', 'credits', 'semester', 'academicYear', 'maxEnrollment', 'schedule', 'primaryInstructor', 'location', 'courseLevel', 'status', 'gradingScheme', 'fee'] as const)
            .forEach(k => {
                if (course[k] !== undefined && course[k] !== null && course[k] !== '') {
                    formData.append(k, String(course[k]));
                }
            });

        // Add arrays
        course.coInstructors.forEach(id => formData.append('coInstructors', id));
        course.prerequisites.forEach(id => formData.append('prerequisites', id));

        try {
            const res = await addCourse(formData);
            if (res && (res.status === 201 || res.status === 200)) {
                toast.success('Course created successfully!');
                setCourse({
                    code: '', title: '', description: '', department: '', credits: '',
                    semester: '', academicYear: '', maxEnrollment: '', schedule: '',
                    primaryInstructor: '', coInstructors: [],
                    location: '', prerequisites: [], courseLevel: '',
                    status: true, gradingScheme: '', fee: '',
                    syllabus: null,
                });
            } else {
                toast.error(res?.data || 'Something went wrong. Please try again!');
            }
        } catch (error: any) {
            const msg = error?.response?.data || error?.message || 'Something went wrong while adding Course!';
            toast.error(String(msg));
            console.error('Add course error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 rounded-2xl overflow-hidden pb-12">
            {/* Header */}
            <header className="bg-blue-950 flex flex-col sm:flex-row items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md">
                <div className="flex items-center gap-4">
                    <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white" />
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center ml-3">
                        Vedanta Institute of Technology
                    </h2>
                </div>
            </header>

            <section className="px-4 text-center">
                <hr className="bg-black w-[60%] mx-auto" />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6">Course Creation Form</h1>
                <hr className="bg-black w-[60%] mx-auto" />
            </section>

            <section className="px-4 sm:px-6 lg:px-10 my-6">
                <form className="w-full space-y-8" onSubmit={submitData}>

                    {/* 1. Basic Course Information */}
                    <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6">
                        <h3 className="text-2xl sm:text-3xl text-center mb-2 font-semibold">1. Basic Course Information</h3>
                        <hr className="bg-white/30 mb-4" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Course Code <span className="text-red-400">*</span></label>
                                <input type="text" name="code" value={course.code} onChange={onValueChange} placeholder="e.g., CS101" required className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full lg:col-span-2">
                                <label className="mb-1">Course Title <span className="text-red-400">*</span></label>
                                <input type="text" name="title" value={course.title} onChange={onValueChange} placeholder="e.g., Introduction to Computer Science" required className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full lg:col-span-3">
                                <label className="mb-1">Course Description</label>
                                <textarea name="description" value={course.description} onChange={onValueChange} placeholder="Enter a brief overview or syllabus summary" className={textareaClass}></textarea>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Department <span className="text-red-400">*</span></label>
                                <select name="department" value={course.department} onChange={onValueChange} required className={selectClass}>
                                    <option disabled value="">--Select Department--</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="MCA">MCA</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="Department of Mathematics">Department of Mathematics</option>
                                    <option value="Computer Science">Computer Science</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Credits <span className="text-red-400">*</span></label>
                                <input type="number" name="credits" value={course.credits} onChange={onValueChange} placeholder="e.g., 4" required className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 2. Scheduling & Capacity */}
                    <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6">
                        <h3 className="text-2xl sm:text-3xl text-center mb-2 font-semibold">2. Scheduling & Capacity</h3>
                        <hr className="bg-white/30 mb-4" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Semester / Term <span className="text-red-400">*</span></label>
                                <select name="semester" value={course.semester} onChange={onValueChange} required className={selectClass}>
                                    <option disabled value="">--Select--</option>
                                    <option value="Fall 2024">Fall 2024</option>
                                    <option value="Spring 2025">Spring 2025</option>
                                    <option value="Trimester 1">Trimester 1</option>
                                    <option value="Trimester 2">Trimester 2</option>
                                    <option value="Trimester 3">Trimester 3</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Academic Year <span className="text-red-400">*</span></label>
                                <input type="text" name="academicYear" value={course.academicYear} onChange={onValueChange} placeholder="e.g., 2024-2025" required className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Max Enrollment</label>
                                <input type="number" name="maxEnrollment" value={course.maxEnrollment} onChange={onValueChange} placeholder="e.g., 60" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Schedule</label>
                                <input type="text" name="schedule" value={course.schedule} onChange={onValueChange} placeholder="e.g., Mon, Wed 10:00 AM" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 3. Instructors & Resources */}
                    <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6">
                        <h3 className="text-2xl sm:text-3xl text-center mb-2 font-semibold">3. Instructors & Resources</h3>
                        <hr className="bg-white/30 mb-4" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Primary Instructor <span className="text-red-400">*</span></label>
                                <select name="primaryInstructor" value={course.primaryInstructor} onChange={onValueChange} required className={selectClass}>
                                    <option disabled value="">--Select Faculty--</option>
                                    {instructors.map((item) => (
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Co-Instructors / TAs</label>
                                <select
                                    multiple
                                    name="coInstructors"
                                    value={course.coInstructors}
                                    onChange={(e) => handleMultiSelectChange(e, 'coInstructors')}
                                    className={`${selectClass} min-h-[100px]`}
                                >
                                    {instructors.filter(i => i._id !== course.primaryInstructor).map((item) => (
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                                <p className="text-xs mt-1 text-gray-300">Hold Ctrl/Cmd to select multiple</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Classroom / Location</label>
                                <input type="text" name="location" value={course.location} onChange={onValueChange} placeholder="e.g., Block A, Room 302" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 4. Prerequisites & Status */}
                    <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6">
                        <h3 className="text-2xl sm:text-3xl text-center mb-2 font-semibold">4. Prerequisites & Status</h3>
                        <hr className="bg-white/30 mb-4" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Prerequisites</label>
                                <select
                                    multiple
                                    name="prerequisites"
                                    value={course.prerequisites}
                                    onChange={(e) => handleMultiSelectChange(e, 'prerequisites')}
                                    className={`${selectClass} min-h-[100px]`}
                                >
                                    {allCourses.map((item) => (
                                        <option key={item._id} value={item._id}>{item.code}: {item.title}</option>
                                    ))}
                                </select>
                                <p className="text-xs mt-1 text-gray-300">Hold Ctrl/Cmd to select multiple</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Course Level</label>
                                <select name="courseLevel" value={course.courseLevel} onChange={onValueChange} className={selectClass}>
                                    <option value="">--Select Level--</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Doctoral">Doctoral</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Status</label>
                                <div className="flex items-center gap-3 mt-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            checked={course.status}
                                            onChange={onValueChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                                        <span className="ms-3 text-sm font-medium text-white">{course.status ? 'Active' : 'Inactive'}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Additional Fields */}
                    <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white w-full rounded-xl shadow-2xl p-6 space-y-6">
                        <h3 className="text-2xl sm:text-3xl text-center mb-2 font-semibold">5. Additional Fields</h3>
                        <hr className="bg-white/30 mb-4" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Grading Scheme</label>
                                <select name="gradingScheme" value={course.gradingScheme} onChange={onValueChange} className={selectClass}>
                                    <option value="">--Select Scheme--</option>
                                    <option value="Letter Grade">Letter Grade</option>
                                    <option value="Pass/Fail">Pass/Fail</option>
                                    <option value="Grade Only">Grade Only</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Course Fee / Lab Fee</label>
                                <input type="number" name="fee" value={course.fee} onChange={onValueChange} placeholder="e.g., 500" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1">Syllabus Document Upload</label>
                                <label className="flex items-center w-full border border-gray-300 rounded-md cursor-pointer bg-white p-1 gap-2 overflow-hidden">
                                    <span className="bg-blue-950 text-white text-sm font-medium px-3 py-1.5 flex-shrink-0 hover:bg-blue-900 transition-colors rounded-md">
                                        Choose file
                                    </span>
                                    <span className="px-3 text-gray-500 text-sm truncate flex-grow">
                                        {course.syllabus ? course.syllabus.name : 'No file chosen'}
                                    </span>
                                    <input type="file" name="syllabus" onChange={fileData} className="sr-only" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start my-6">
                        <button type="submit" className="ml-3 bg-transparent text-green-600 font-medium px-10 py-3 rounded-md hover:scale-105 transition-all hover:bg-green-600 hover:text-white outline outline-2 outline-green-500 text-lg">Submit Course</button>
                        <button type="reset" onClick={() => setCourse({
                            code: '', title: '', description: '', department: '', credits: '',
                            semester: '', academicYear: '', maxEnrollment: '', schedule: '',
                            primaryInstructor: '', coInstructors: [],
                            location: '', prerequisites: [], courseLevel: '',
                            status: true, gradingScheme: '', fee: '',
                            syllabus: null,
                        })} className="mx-3 bg-transparent text-red-600 font-medium px-10 py-3 rounded-md hover:scale-105 transition-all hover:bg-red-600 hover:text-white outline outline-2 outline-red-500 text-lg">Reset</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
