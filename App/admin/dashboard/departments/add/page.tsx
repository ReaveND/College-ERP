'use client';

import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import { addDepartment, getFacultys, getPrograms, getDepartments } from '@/lib/adminApi';

const inputClass =
    'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500';
const selectClass = 'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500';
const textareaClass = 'bg-white text-black border border-gray-300 rounded-md px-3 py-2 w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]';

export default function AddDepartmentPage() {
    const [dept, setDept] = useState({
        code: '',
        name: '',
        shortName: '',
        description: '',
        hod: '',
        establishedYear: '',
        email: '',
        phone: '',
        location: '',
        programs: [] as string[],
        status: true as boolean,
        type: '',
        parentDepartment: '',
        facultySanctioned: '',
        labsCount: '',
        budgetCode: '',
        affiliatedUniversity: ''
    });

    const [faculties, setFaculties] = useState<any[]>([]);
    const [allPrograms, setAllPrograms] = useState<any[]>([]);
    const [allDepartments, setAllDepartments] = useState<any[]>([]);

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        try {
            const [facRes, progRes, deptRes] = await Promise.all([
                getFacultys(),
                getPrograms(),
                getDepartments()
            ]);

            if (facRes?.data) setFaculties(facRes.data);
            if (progRes?.data) setAllPrograms(progRes.data);
            if (deptRes?.data) setAllDepartments(deptRes.data);
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setDept({ ...dept, [name]: checked });
        } else {
            // Auto-generate code from name if code is empty or matches previous auto-gen
            if (name === 'name' && !dept.code) {
                const autoCode = value.split(' ').map(word => word[0]).join('').toUpperCase();
                setDept({ ...dept, name: value, code: autoCode });
            } else {
                setDept({ ...dept, [name]: value });
            }
        }
    };

    const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const values = Array.from(e.target.selectedOptions).map(opt => opt.value);
        setDept({ ...dept, programs: values });
    };

    const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!dept.code) { toast.error('Please enter Department Code!'); return; }
        if (!dept.name) { toast.error('Please enter Department Name!'); return; }
        if (!dept.hod) { toast.error('Please select Head of Department!'); return; }
        if (dept.programs.length === 0) { toast.error('Please select at least one Program!'); return; }

        try {
            const res = await addDepartment(dept);
            if (res && (res.status === 201 || res.status === 200)) {
                toast.success('Department created successfully!');
                setDept({
                    code: '', name: '', shortName: '', description: '',
                    hod: '', establishedYear: '', email: '', phone: '',
                    location: '', programs: [], status: true, type: '',
                    parentDepartment: '', facultySanctioned: '',
                    labsCount: '', budgetCode: '', affiliatedUniversity: ''
                });
            } else {
                toast.error(res?.data?.error || 'Something went wrong. Please try again!');
            }
        } catch (error: any) {
            const msg = error?.response?.data?.error || error?.message || 'Something went wrong while adding Department!';
            toast.error(String(msg));
            console.error('Add department error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 rounded-2xl overflow-hidden pb-12">
            <Toaster position="bottom-right" />

            {/* Header */}
            <header className="bg-blue-950 flex flex-col sm:flex-row items-center justify-center px-4 py-4 mb-6 gap-4 shadow-md text-white">
                <div className="flex items-center gap-4">
                    <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white" />
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center ml-3">
                        Vedanta Institute of Technology
                    </h2>
                </div>
            </header>

            <section className="px-4 text-center">
                <hr className="bg-black/10 w-[60%] mx-auto" />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-6 text-blue-950">Department Creation Form</h1>
                <hr className="bg-black/10 w-[60%] mx-auto" />
            </section>

            <section className="px-4 sm:px-6 lg:px-10 my-6">
                <form className="w-full space-y-8" onSubmit={submitData}>

                    {/* 1. Basic Information */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white">1. Basic Information</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Department Name <span className="text-red-500">*</span></label>
                                <input type="text" name="name" value={dept.name} onChange={onValueChange} placeholder="e.g., Computer Science & Engineering" required className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Department Code <span className="text-red-500">*</span></label>
                                <input type="text" name="code" value={dept.code} onChange={onValueChange} placeholder="e.g., CSE" required className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Short Name</label>
                                <input type="text" name="shortName" value={dept.shortName} onChange={onValueChange} placeholder="e.g., Comp. Sci." className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full lg:col-span-3">
                                <label className="mb-1 font-medium text-gray-700">Description / Mission</label>
                                <textarea name="description" value={dept.description} onChange={onValueChange} placeholder="Department overview and objectives..." className={textareaClass}></textarea>
                            </div>
                        </div>
                    </div>

                    {/* 2. Administrative Details */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white">2. Administrative Details</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Head of Department (HOD) <span className="text-red-500">*</span></label>
                                <select name="hod" value={dept.hod} onChange={onValueChange} required className={selectClass}>
                                    <option value="">--Select Faculty--</option>
                                    {faculties.map((f) => (
                                        <option key={f._id} value={f._id}>{f.name} ({f.designation})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Establishment Year</label>
                                <input type="number" name="establishedYear" value={dept.establishedYear} onChange={onValueChange} placeholder="e.g., 2005" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Contact Email</label>
                                <input type="email" name="email" value={dept.email} onChange={onValueChange} placeholder="dept@institute.edu" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Contact Phone</label>
                                <input type="text" name="phone" value={dept.phone} onChange={onValueChange} placeholder="+91 ..." className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full lg:col-span-2">
                                <label className="mb-1 font-medium text-gray-700">Office Location</label>
                                <input type="text" name="location" value={dept.location} onChange={onValueChange} placeholder="Building, Room No." className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 3. Academic Structure */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white">3. Academic Structure</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Offered Programs <span className="text-red-500">*</span></label>
                                <select
                                    multiple
                                    name="programs"
                                    value={dept.programs}
                                    onChange={handleMultiSelectChange}
                                    className={`${selectClass} min-h-[120px]`}
                                >
                                    {allPrograms.map((p) => (
                                        <option key={p._id} value={p._id}>{p.name} ({p.level})</option>
                                    ))}
                                </select>
                                <p className="text-xs mt-1 text-gray-500 italic">Hold Ctrl/Cmd to select multiple programs</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Affiliated University / Board</label>
                                <input type="text" name="affiliatedUniversity" value={dept.affiliatedUniversity} onChange={onValueChange} placeholder="Governing body name" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 4. Status & Settings */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white">4. Status & Settings</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Department Type</label>
                                <select name="type" value={dept.type} onChange={onValueChange} className={selectClass}>
                                    <option value="">--Select Type--</option>
                                    <option value="Teaching">Teaching</option>
                                    <option value="Research">Research</option>
                                    <option value="Administrative">Administrative</option>
                                    <option value="Combined">Combined</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Parent Department</label>
                                <select name="parentDepartment" value={dept.parentDepartment} onChange={onValueChange} className={selectClass}>
                                    <option value="">--None (Main Department)--</option>
                                    {allDepartments.map((d) => (
                                        <option key={d._id} value={d._id}>{d.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Status</label>
                                <div className="flex items-center gap-3 mt-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="status"
                                            checked={dept.status}
                                            onChange={onValueChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                        <span className="ms-3 text-sm font-medium text-gray-700">{dept.status ? 'Active' : 'Inactive'}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Resource Management */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4">
                            <h3 className="text-xl font-semibold text-white">5. Resource Management</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Faculty Sanctioned</label>
                                <input type="number" name="facultySanctioned" value={dept.facultySanctioned} onChange={onValueChange} placeholder="Max strength" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Labs / Classrooms Count</label>
                                <input type="number" name="labsCount" value={dept.labsCount} onChange={onValueChange} placeholder="Number of rooms" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1 font-medium text-gray-700">Budget Code / Allocation</label>
                                <input type="text" name="budgetCode" value={dept.budgetCode} onChange={onValueChange} placeholder="Financial reference" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <button
                            type="reset"
                            onClick={() => setDept({
                                code: '', name: '', shortName: '', description: '',
                                hod: '', establishedYear: '', email: '', phone: '',
                                location: '', programs: [], status: true, type: '',
                                parentDepartment: '', facultySanctioned: '',
                                labsCount: '', budgetCode: '', affiliatedUniversity: ''
                            })}
                            className="px-8 py-3 rounded-lg border-2 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                        >
                            Reset Form
                        </button>
                        <button
                            type="submit"
                            className="px-10 py-3 rounded-lg bg-blue-950 text-white font-semibold hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Create Department
                        </button>
                    </div>
                </form>
            </section>

            {/* Preview Section */}
            <section className="px-4 sm:px-6 lg:px-10 mt-12">
                <div className="bg-gray-200/50 p-6 rounded-2xl border-2 border-dashed border-gray-400">
                    <h3 className="text-xl font-bold text-gray-600 mb-4 uppercase tracking-wider">Preview</h3>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-md">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="text-2xl font-bold text-blue-950">{dept.name || 'Department Name'}</h4>
                                <p className="text-blue-600 font-mono font-bold tracking-widest">{dept.code || 'CODE'}</p>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${dept.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {dept.status ? 'ACTIVE' : 'INACTIVE'}
                            </span>
                        </div>
                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                            <p><span className="font-semibold text-gray-800">HOD:</span> {faculties.find(f => f._id === dept.hod)?.name || 'Not Selected'}</p>
                            <p><span className="font-semibold text-gray-800">Programs:</span> {dept.programs.length} selected</p>
                            <p><span className="font-semibold text-gray-800">Location:</span> {dept.location || 'Not Specified'}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
