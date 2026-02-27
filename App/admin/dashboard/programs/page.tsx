'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';
import { getPrograms } from '@/lib/adminApi';
import { FaGraduationCap, FaPlus, FaSearch, FaFilter, FaClock, FaBook } from 'react-icons/fa';

export default function ProgramsPage() {
    const router = useRouter();
    const [programs, setPrograms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPrograms = async () => {
        try {
            setLoading(true);
            const res = await getPrograms();
            if (res && res.data) {
                setPrograms(res.data);
            }
        } catch (error) {
            console.error('Error fetching programs:', error);
            toast.error('Failed to load programs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrograms();
    }, []);

    const filteredPrograms = programs.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Toaster position="top-center" richColors />

            {/* Dashboard Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200">
                            <FaGraduationCap className="text-2xl text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Academic Programs</h1>
                            <p className="text-sm text-gray-500 font-medium">Manage and define your institution's degree paths</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name or code..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
                            />
                        </div>
                        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">
                            <FaFilter />
                        </button>
                        <button
                            onClick={() => router.push('/admin/dashboard/programs/add')}
                            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                        >
                            <FaPlus /> New Program
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 h-48 animate-pulse shadow-sm flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="h-6 w-24 bg-gray-100 rounded"></div>
                                    <div className="h-4 w-40 bg-gray-100 rounded"></div>
                                </div>
                                <div className="h-8 w-full bg-gray-50 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                ) : filteredPrograms.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-gray-200 p-20 text-center shadow-lg shadow-gray-100">
                        <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaBook className="text-4xl text-blue-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">No programs found</h2>
                        <p className="text-gray-500 mt-2 max-w-sm mx-auto">
                            Start by creating an academic program. Programs are required to define departments and student admissions.
                        </p>
                        <button
                            onClick={() => router.push('/admin/dashboard/programs/add')}
                            className="mt-8 text-blue-600 font-bold hover:underline inline-flex items-center gap-2 group"
                        >
                            <FaPlus size={14} className="group-hover:rotate-90 transition-transform" /> Create your first program
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPrograms.map((program) => (
                            <div
                                key={program._id}
                                className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3 ${program.level === 'UG' ? 'bg-indigo-100 text-indigo-700' :
                                            program.level === 'PG' ? 'bg-purple-100 text-purple-700' :
                                                program.level === 'PhD' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {program.level} LEVEL
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                            {program.name}
                                        </h3>
                                        <p className="text-blue-600 font-bold text-sm tracking-widest mt-1">
                                            {program.code}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 mt-6">
                                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                                        <FaClock className="text-gray-400" />
                                        <span className="font-medium">{program.duration} Years Full-time</span>
                                    </div>
                                    {program.description && (
                                        <p className="text-gray-500 text-sm line-clamp-2 italic leading-relaxed">
                                            "{program.description}"
                                        </p>
                                    )}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <button
                                        className="text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
                                        onClick={() => router.push(`/admin/dashboard/programs/${program._id}`)}
                                    >
                                        Edit Details
                                    </button>
                                    <button className="bg-gray-50 h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
