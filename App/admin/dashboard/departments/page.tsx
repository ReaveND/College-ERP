'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { getDepartments, deleteDepartment } from '@/lib/adminApi';
import { FaEdit, FaTrash, FaPlus, FaBuilding } from 'react-icons/fa';
import { resolveImageUrl } from '@/lib/imageUrl';

export default function DepartmentsPage() {
    const router = useRouter();
    const [departments, setDepartments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchDepartments = async () => {
        try {
            setLoading(true);
            const res = await getDepartments();
            if (res && res.data) {
                setDepartments(res.data);
            }
        } catch (error) {
            console.error('Error fetching departments:', error);
            toast.error('Failed to load departments');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this department?')) return;
        try {
            await deleteDepartment(id);
            toast.success('Department deleted successfully');
            fetchDepartments();
        } catch (error) {
            console.error('Error deleting department:', error);
            toast.error('Failed to delete department');
        }
    };

    return (
        <div className="min-h-screen bg-white p-4">

            <div className="flex justify-between items-center mb-8 bg-blue-950 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 text-white">
                    <div className="bg-white/20 p-3 rounded-xl">
                        <FaBuilding className="text-3xl" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Departments</h1>
                        <p className="text-blue-100 opacity-80">Manage institution departments and units</p>
                    </div>
                </div>
                <button
                    onClick={() => router.push('/admin/dashboard/departments/add')}
                    className="flex items-center gap-2 bg-white text-blue-950 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-md active:scale-95"
                >
                    <FaPlus /> Add New Department
                </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50 text-blue-950 font-bold border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left">Code</th>
                            <th className="px-6 py-4 text-left">Department Name</th>
                            <th className="px-6 py-4 text-left">HOD</th>
                            <th className="px-6 py-4 text-left">Type</th>
                            <th className="px-6 py-4 text-left">Location</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {loading ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-gray-500 font-medium">
                                    <div className="flex justify-center items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-blue-950 border-t-transparent rounded-full animate-spin"></div>
                                        Loading departments...
                                    </div>
                                </td>
                            </tr>
                        ) : departments.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-12 text-center">
                                    <div className="flex flex-col items-center gap-2 text-gray-400">
                                        <FaBuilding className="text-5xl opacity-20" />
                                        <p className="text-lg font-medium">No departments found</p>
                                        <button
                                            onClick={() => router.push('/admin/dashboard/departments/add')}
                                            className="text-blue-600 hover:underline font-semibold"
                                        >
                                            Create your first department
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            departments.map((dept) => (
                                <tr key={dept._id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-blue-900">{dept.code}</td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-800">{dept.name}</div>
                                        {dept.shortName && <div className="text-xs text-gray-500 uppercase tracking-tighter">{dept.shortName}</div>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold border border-gray-200">
                                                {dept.hod?.image ? (
                                                    <img
                                                        src={resolveImageUrl(dept.hod.image)}
                                                        alt={dept.hod.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    dept.hod?.name?.charAt(0) || '?'
                                                )}
                                            </div>
                                            <span className="text-gray-700 font-medium">{dept.hod?.name || 'N/A'}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                            {dept.type || 'Combined'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 text-sm italic">{dept.location || 'Not set'}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${dept.status ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                                            {dept.status ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <button
                                            onClick={() => router.push(`/admin/dashboard/departments/${dept._id}`)}
                                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                                            title="Edit Department"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(dept._id)}
                                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                            title="Delete Department"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
