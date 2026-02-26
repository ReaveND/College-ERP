'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verify admin is logged in
    // This will be handled by middleware
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Admins</h2>
            <p className="text-gray-600">Add, edit, or delete admin accounts</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Students</h2>
            <p className="text-gray-600">View and manage student records</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Faculty</h2>
            <p className="text-gray-600">View and manage faculty members</p>
          </div>
        </div>

        <button
          onClick={() => router.push('/')}
          className="mt-8 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
