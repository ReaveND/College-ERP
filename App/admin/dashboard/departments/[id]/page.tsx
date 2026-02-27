'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'sonner';
import { updateDepartment, getDepartmentById, getFacultys, getPrograms, getDepartments } from '@/lib/adminApi';
import { FaBuilding, FaArrowLeft, FaSave, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const inputClass =
    'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all';
const selectClass = 'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all';
const textareaClass = 'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] transition-all';

export default function EditDepartmentPage() {
    const router = useRouter();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

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
        if (id) {
            fetchInitialData();
        }
    }, [id]);

    const fetchInitialData = async () => {
        try {
            setLoading(true);
            const [facRes, progRes, deptRes, currentDeptRes] = await Promise.all([
                getFacultys(),
                getPrograms(),
                getDepartments(),
                getDepartmentById(id as string)
            ]);

            if (facRes?.data) setFaculties(facRes.data);
            if (progRes?.data) setAllPrograms(progRes.data);
            if (deptRes?.data) setAllDepartments(deptRes.data.filter((d: any) => d._id !== id));

            if (currentDeptRes?.data) {
                const data = currentDeptRes.data;
                setDept({
                    ...data,
                    hod: data.hod?._id || data.hod || '',
                    programs: data.programs?.map((p: any) => p._id || p) || [],
                    parentDepartment: data.parentDepartment?._id || data.parentDepartment || '',
                    establishedYear: data.establishedYear?.toString() || '',
                    facultySanctioned: data.facultySanctioned?.toString() || '',
                    labsCount: data.labsCount?.toString() || '',
                });
            }
        } catch (error) {
            console.error('Error fetching initial data:', error);
            toast.error('Failed to load department data');
        } finally {
            setLoading(false);
        }
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setDept({ ...dept, [name]: checked });
        } else {
            setDept({ ...dept, [name]: value });
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

        try {
            setSaving(true);
            const res = await updateDepartment(id as string, dept);
            if (res && (res.status === 200)) {
                toast.success('Department updated successfully!');
                setTimeout(() => router.push('/admin/dashboard/departments'), 1500);
            } else {
                toast.error(res?.data?.error || 'Something went wrong. Please try again!');
            }
        } catch (error: any) {
            const msg = error?.response?.data?.error || error?.message || 'Something went wrong while updating Department!';
            toast.error(String(msg));
            console.error('Update department error:', error);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 font-medium">Loading department details...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">

            {/* Navigation Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                    >
                        <FaArrowLeft />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Edit Department</h1>
                        <p className="text-sm text-gray-500">Update details for {dept.name}</p>
                    </div>
                </div>
                <button
                    form="dept-form"
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 bg-blue-950 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-900 transition-all shadow-md disabled:bg-blue-300 active:scale-95"
                >
                    <FaSave /> {saving ? 'Updating...' : 'Save Changes'}
                </button>
            </div>

            <main className="max-w-5xl mx-auto mt-8 px-4 sm:px-6">
                <form id="dept-form" className="space-y-8" onSubmit={submitData}>

                    {/* 1. Basic Information */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4 flex items-center gap-2">
                            <FaInfoCircle className="text-white opacity-70" />
                            <h3 className="text-lg font-semibold text-white">1. Basic Information</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Department Name <span className="text-red-500">*</span></label>
                                <input type="text" name="name" value={dept.name} onChange={onValueChange} placeholder="e.g., Computer Science & Engineering" required className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Department Code <span className="text-red-500">*</span></label>
                                <input type="text" name="code" value={dept.code} onChange={onValueChange} placeholder="e.g., CSE" required className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Short Name</label>
                                <input type="text" name="shortName" value={dept.shortName} onChange={onValueChange} placeholder="e.g., Comp. Sci." className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full lg:col-span-3">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Description / Mission</label>
                                <textarea name="description" value={dept.description} onChange={onValueChange} placeholder="Department overview and objectives..." className={textareaClass}></textarea>
                            </div>
                        </div>
                    </div>

                    {/* 2. Administrative Details */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4 flex items-center gap-2">
                            <FaBuilding className="text-white opacity-70" />
                            <h3 className="text-lg font-semibold text-white">2. Administrative Details</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Head of Department (HOD)</label>
                                <select name="hod" value={dept.hod} onChange={onValueChange} className={selectClass}>
                                    <option value="">--Select Faculty--</option>
                                    {faculties.map((f) => (
                                        <option key={f._id} value={f._id}>{f.name} ({f.designation})</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Establishment Year</label>
                                <input type="number" name="establishedYear" value={dept.establishedYear} onChange={onValueChange} placeholder="e.g., 2005" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Contact Email</label>
                                <input type="email" name="email" value={dept.email} onChange={onValueChange} placeholder="dept@institute.edu" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Contact Phone</label>
                                <input type="text" name="phone" value={dept.phone} onChange={onValueChange} placeholder="+91 ..." className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full lg:col-span-2">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Office Location</label>
                                <input type="text" name="location" value={dept.location} onChange={onValueChange} placeholder="Building, Room No." className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 3. Academic Structure */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4 flex items-center gap-2">
                            <FaCheckCircle className="text-white opacity-70" />
                            <h3 className="text-lg font-semibold text-white">3. Academic Structure</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Offered Programs</label>
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
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Affiliated University / Board</label>
                                <input type="text" name="affiliatedUniversity" value={dept.affiliatedUniversity} onChange={onValueChange} placeholder="Governing body name" className={inputClass} />
                            </div>
                        </div>
                    </div>

                    {/* 4. Settings & Resources */}
                    <div className="bg-white border border-gray-200 w-full rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-blue-950 px-6 py-4">
                            <h3 className="text-lg font-semibold text-white">4. Settings & Resources</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex flex-col w-full text-black">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Department Type</label>
                                <select name="type" value={dept.type} onChange={onValueChange} className={selectClass}>
                                    <option value="">--Select Type--</option>
                                    <option value="Teaching">Teaching</option>
                                    <option value="Research">Research</option>
                                    <option value="Administrative">Administrative</option>
                                    <option value="Combined">Combined</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-full text-black">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Parent Department</label>
                                <select name="parentDepartment" value={dept.parentDepartment} onChange={onValueChange} className={selectClass}>
                                    <option value="">--None (Main Department)--</option>
                                    {allDepartments.map((d) => (
                                        <option key={d._id} value={d._id}>{d.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Status</label>
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
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Faculty Sanctioned</label>
                                <input type="number" name="facultySanctioned" value={dept.facultySanctioned} onChange={onValueChange} placeholder="Max strength" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Labs Count</label>
                                <input type="number" name="labsCount" value={dept.labsCount} onChange={onValueChange} placeholder="Number of rooms" className={inputClass} />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="mb-1.5 font-semibold text-gray-700 text-sm">Budget Code</label>
                                <input type="text" name="budgetCode" value={dept.budgetCode} onChange={onValueChange} placeholder="Financial reference" className={inputClass} />
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}
