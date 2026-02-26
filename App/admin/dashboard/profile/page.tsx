'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAdmins } from '@/lib/adminApi';
import { Admin } from '@/types';
import dayjs from 'dayjs';

const API_URL = 'https://college-erp-5cd2.onrender.com';

export default function AdminProfilePage() {
  const router = useRouter();
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const adminId = localStorage.getItem('adminId');
    getAdmins()
      .then((res) => {
        const list: Admin[] = res.data;
        const found = list.find((a) => a._id === adminId) || null;
        setAdmin(found);
      })
      .catch(() => setAdmin(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <i className="fas fa-spinner fa-spin text-4xl text-blue-950"></i>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="text-center py-20 text-gray-400">
        <i className="fa-solid fa-user-slash text-6xl mb-4 block"></i>
        <p className="text-lg font-semibold">Profile not found.</p>
        <p className="text-sm mt-1">Try logging out and back in.</p>
      </div>
    );
  }

  const InfoItem = ({
    icon,
    label,
    value,
  }: {
    icon: string;
    label: string;
    value: string;
  }) => (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="w-9 h-9 rounded-full bg-blue-950 flex items-center justify-center flex-shrink-0">
        <i className={`${icon} text-yellow-400 text-sm`}></i>
      </div>
      <div className="min-w-0">
        <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-0.5 break-words">
          {value || '—'}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-950">My Profile</h2>
          <p className="text-sm text-gray-500 mt-0.5">Your account information</p>
        </div>
        <button
          onClick={() =>
            router.push(`/admin/dashboard/admins/${admin._id}/edit`)
          }
          className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
        >
          <i className="fa-solid fa-pen-to-square"></i>
          Edit Profile
        </button>
      </div>

      {/* Hero card */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 rounded-2xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full border-4 border-yellow-500 overflow-hidden flex-shrink-0 bg-blue-700 flex items-center justify-center shadow-lg">
            {admin.image ? (
              <img
                src={`${API_URL}/${admin.image}`}
                alt={admin.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <span className="text-white text-4xl font-bold">
                {admin.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Name + badges */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-2xl font-bold">{admin.name}</h3>
            <p className="text-blue-300 text-sm mt-1">{admin.email}</p>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-3 flex-wrap">
              <span className="bg-yellow-500 text-blue-950 text-xs font-bold px-3 py-1 rounded-full">
                Admin
              </span>
              <span className="bg-blue-700 text-blue-100 text-xs px-3 py-1 rounded-full">
                @{admin.username}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoItem
          icon="fa-solid fa-user"
          label="Full Name"
          value={admin.name}
        />
        <InfoItem
          icon="fa-solid fa-at"
          label="Username"
          value={admin.username}
        />
        <InfoItem
          icon="fa-solid fa-envelope"
          label="Email Address"
          value={admin.email}
        />
        <InfoItem
          icon="fa-solid fa-phone"
          label="Mobile"
          value={String(admin.mobile)}
        />
        <InfoItem
          icon="fa-solid fa-calendar"
          label="Date of Birth"
          value={admin.dob ? dayjs(admin.dob).format('DD MMM YYYY') : '—'}
        />
        <InfoItem
          icon="fa-solid fa-location-dot"
          label="Address"
          value={admin.address}
        />
        <InfoItem
          icon="fa-solid fa-map"
          label="District"
          value={admin.district}
        />
        <InfoItem
          icon="fa-solid fa-flag"
          label="State"
          value={admin.state}
        />
      </div>
    </div>
  );
}
