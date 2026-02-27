'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';
import { getCourses, deleteCourse } from '@/lib/adminApi';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function CoursesPage() {
    const router = useRouter();
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            const res = await getCourses();
            if (res && res.data) {
                setCourses(res.data);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
            toast.error('Failed to load courses');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this course?')) return;
        try {
            await deleteCourse(id);
            toast.success('Course deleted successfully');
            fetchCourses();
        } catch (error) {
            console.error('Error deleting course:', error);
            toast.error('Failed to delete course');
        }
    };

    return (
        <div className="min-h-screen bg-white p-4">
            <Toaster position="bottom-right" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-blue-950">Courses Management</h1>
                <button
                    onClick={() => router.push('/admin/dashboard/courses/add')}
                    className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
                >
                    <FaPlus /> Add New Course
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50 text-blue-950 font-bold">
                        <tr>
                            <th className="px-6 py-3 border-b text-left">Code</th>
                            <th className="px-6 py-3 border-b text-left">Title</th>
                            <th className="px-6 py-3 border-b text-left">Department</th>
                            <th className="px-6 py-3 border-b text-left">Credits</th>
                            <th className="px-6 py-3 border-b text-left">Instructor</th>
                            <th className="px-6 py-3 border-b text-left">Status</th>
                            <th className="px-6 py-3 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-4 text-center">Loading courses...</td>
                            </tr>
                        ) : courses.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-4 text-center">No courses found</td>
                            </tr>
                        ) : (
                            courses.map((course) => (
                                <tr key={course._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 border-b font-medium">{course.code}</td>
                                    <td className="px-6 py-4 border-b">{course.title}</td>
                                    <td className="px-6 py-4 border-b">{course.department}</td>
                                    <td className="px-6 py-4 border-b">{course.credits}</td>
                                    <td className="px-6 py-4 border-b">{course.primaryInstructor?.name || 'N/A'}</td>
                                    <td className="px-6 py-4 border-b">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${course.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {course.status ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 border-b text-center space-x-3">
                                        <button
                                            onClick={() => router.push(`/admin/dashboard/courses/${course._id}`)}
                                            className="text-blue-600 hover:text-blue-800"
                                            title="Edit Course"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(course._id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Delete Course"
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
