'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';
import { addProgram } from '@/lib/adminApi';
import { FaGraduationCap, FaArrowLeft, FaSave } from 'react-icons/fa';

const inputClass =
    'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all';
const selectClass = 'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all';
const textareaClass = 'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] transition-all';

export default function AddProgramPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [program, setProgram] = useState({
        name: '',
        code: '',
        description: '',
        duration: '',
        level: ''
    });

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'name' && !program.code) {
            // Auto-gen code: "Bachelor of Technology" -> "BTECH"
            const autoCode = value.toUpperCase().replace(/[^A-Z0-0]/g, '').slice(0, 10);
            setProgram(prev => ({ ...prev, name: value, code: autoCode }));
        } else {
            setProgram(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!program.name || !program.code || !program.duration || !program.level) {
            toast.error('Please fill all required fields');
            return;
        }

        try {
            setLoading(true);
            const res = await addProgram(program);
            if (res.status === 201 || res.status === 200) {
                toast.success('Program created successfully!');
                setTimeout(() => router.push('/admin/dashboard/programs'), 1500);
            }
        } catch (error: any) {
            const msg = error?.response?.data?.error || 'Failed to create program';
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Toaster position="top-center" richColors />

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
                        <h1 className="text-xl font-bold text-gray-900">Create Academic Program</h1>
                        <p className="text-sm text-gray-500">Define a new degree or diploma course</p>
                    </div>
                </div>
                <button
                    form="program-form"
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md disabled:bg-blue-300"
                >
                    <FaSave /> {loading ? 'Creating...' : 'Save Program'}
                </button>
            </div>

            <main className="max-w-4xl mx-auto mt-10 px-6">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-10 text-white relative">
                        <FaGraduationCap className="text-8xl absolute right-8 top-1/2 -translate-y-1/2 opacity-10" />
                        <h2 className="text-3xl font-bold">Program Details</h2>
                        <p className="text-blue-100 mt-2 max-w-lg">
                            Provide the core details for this academic offering. Programs will be used as templates for batches and students.
                        </p>
                    </div>

                    <form id="program-form" onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Section 1: Identity */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Program Identity</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700 flex justify-between">
                                        Program Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={program.name}
                                        onChange={onValueChange}
                                        placeholder="e.g., Bachelor of Technology"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700 flex justify-between">
                                        Identifier/Code <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="code"
                                        value={program.code}
                                        onChange={onValueChange}
                                        placeholder="e.g., BTECH"
                                        required
                                        className={inputClass}
                                    />
                                    <p className="text-xs text-gray-400">Used for IDs and internal references</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Structure */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Academic Structure</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Academic Level <span className="text-red-500">*</span></label>
                                    <select
                                        name="level"
                                        value={program.level}
                                        onChange={onValueChange}
                                        required
                                        className={selectClass}
                                    >
                                        <option value="">-- Select Level --</option>
                                        <option value="UG">Undergraduate (UG)</option>
                                        <option value="PG">Postgraduate (PG)</option>
                                        <option value="PhD">Doctoral (PhD)</option>
                                        <option value="Diploma">Diploma</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-gray-700">Duration (Years) <span className="text-red-500">*</span></label>
                                    <input
                                        type="number"
                                        name="duration"
                                        value={program.duration}
                                        onChange={onValueChange}
                                        placeholder="e.g., 4"
                                        step="0.5"
                                        min="0.5"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Narrative */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Description</h3>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Program Description / Overview</label>
                                <textarea
                                    name="description"
                                    value={program.description}
                                    onChange={onValueChange}
                                    placeholder="Outline the goals and outcomes of this program..."
                                    className={textareaClass}
                                ></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Info Card */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 flex gap-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg h-fit">
                        <FaGraduationCap size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-900">Why are programs important?</h4>
                        <p className="text-sm text-blue-800 mt-1 opacity-80 leading-relaxed">
                            A Program acts as a template for all academic activities. Once created, you can link it to Departments, assign Courses to it, and enroll Students into specific Programs.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
