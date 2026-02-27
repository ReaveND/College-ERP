'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'sonner';
import { getProgramById, updateProgram } from '@/lib/adminApi';
import { FaGraduationCap, FaArrowLeft, FaSave } from 'react-icons/fa';

const inputClass =
    'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all';
const selectClass = 'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all';
const textareaClass = 'bg-white text-black border border-gray-300 rounded-lg px-4 py-2.5 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] transition-all';

export default function EditProgramPage() {
    const router = useRouter();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [program, setProgram] = useState({
        name: '',
        code: '',
        description: '',
        duration: '',
        level: ''
    });

    useEffect(() => {
        if (id) {
            fetchProgram();
        }
    }, [id]);

    const fetchProgram = async () => {
        try {
            setLoading(true);
            const res = await getProgramById(id as string);
            if (res && res.data) {
                setProgram(res.data);
            }
        } catch (error) {
            console.error('Error fetching program:', error);
            toast.error('Failed to load program data');
        } finally {
            setLoading(false);
        }
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProgram(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!program.name || !program.code || !program.duration || !program.level) {
            toast.error('Please fill all required fields');
            return;
        }

        try {
            setSaving(true);
            const res = await updateProgram(id as string, program);
            if (res.status === 200) {
                toast.success('Program updated successfully!');
                setTimeout(() => router.push('/admin/dashboard/programs'), 1500);
            }
        } catch (error: any) {
            const msg = error?.response?.data?.error || 'Failed to update program';
            toast.error(msg);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
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
                        <h1 className="text-xl font-bold text-gray-900">Edit Academic Program</h1>
                        <p className="text-sm text-gray-500">Update details for {program.name}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button
                        form="program-form"
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md disabled:bg-blue-300"
                    >
                        <FaSave /> {saving ? 'Saving...' : 'Update Program'}
                    </button>
                </div>
            </div>

            <main className="max-w-4xl mx-auto mt-10 px-6">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-10 text-white relative">
                        <FaGraduationCap className="text-8xl absolute right-8 top-1/2 -translate-y-1/2 opacity-10" />
                        <h2 className="text-3xl font-bold">Program Details</h2>
                        <p className="text-blue-100 mt-2 max-w-lg">
                            Keep the information updated to ensure students and faculty have the correct data.
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

                {/* Important Section */}
                <div className="mt-8 flex justify-between items-center text-sm">
                    <div className="text-gray-400">
                        Object ID: <span className="font-mono">{id}</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
