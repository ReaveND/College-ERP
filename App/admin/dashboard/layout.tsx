'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { FaSignOutAlt } from 'react-icons/fa';

// ── Nav link helper ────────────────────────────────────────────────────
const SideNavLink = ({
  href,
  icon,
  label,
  currentPath,
  router,
}: {
  href: string;
  icon: string;
  label: string;
  currentPath: string;
  router: ReturnType<typeof useRouter>;
}) => {
  const isActive = currentPath === href;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If already on this page, toggle back to the welcome page
    router.push(isActive ? '/admin/dashboard' : href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`block px-5 py-2 rounded transition-colors cursor-pointer ${
        isActive ? 'bg-blue-950 text-white font-bold' : 'hover:bg-gray-200'
      }`}
    >
      <i className={`${icon} mr-3`}></i>
      {label}
    </a>
  );
};

// ── Layout ─────────────────────────────────────────────────────────────
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminImage, setAdminImage] = useState('');

  useEffect(() => {
    setAdminName(localStorage.getItem('adminName') || 'Admin');
    setAdminEmail(localStorage.getItem('adminEmail') || '');
    setAdminImage(localStorage.getItem('adminImage') || '');
  }, []);

  const handleLogout = () => {
    const name = localStorage.getItem('adminName');
    localStorage.removeItem('token');
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('adminImage');
    localStorage.removeItem('adminId');
    toast.info(`See you soon, ${name || 'Admin'} 👋`, {
      position: 'top-right',
      autoClose: 3000,
      style: {
        background: '#f44336',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '8px',
      },
    });
    setTimeout(() => router.push('/admin/login'), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-20 p-4 pt-1 hidden md:flex md:flex-col overflow-y-auto">
        <div className="flex justify-center items-center py-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full"
          />
          <h3 className="text-2xl text-blue-950 font-bold text-center py-2 ml-2">
            Admin Panel
          </h3>
        </div>
        <hr className="bg-yellow-600 h-0.5 mb-2" />

        {/* Admin Profile Card */}
        <div
          onClick={() => router.push('/admin/dashboard/profile')}
          className="flex items-center gap-3 px-3 py-2.5 my-2 bg-gradient-to-r from-blue-950 to-blue-800 rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 flex-shrink-0 bg-blue-700 flex items-center justify-center">
            {adminImage ? (
              <img
                src={`https://college-erp-5cd2.onrender.com/${adminImage}`}
                alt={adminName}
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            ) : (
              <span className="text-white font-bold text-base">
                {(adminName || 'A').charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">{adminName || 'Admin'}</p>
            <p className="text-[11px] text-blue-300 truncate">{adminEmail || ''}</p>
          </div>
          <span className="text-[10px] bg-yellow-500 text-blue-950 px-1.5 py-0.5 rounded font-bold flex-shrink-0">Admin</span>
        </div>

        <nav className="flex-1 space-y-2 font-sans text-sm font-semibold text-gray-700 overflow-y-auto">
          <SideNavLink href="/admin/dashboard/overview" icon="fas fa-chart-line" label="Dashboard" currentPath={pathname} router={router} />
          <SideNavLink href="/admin/dashboard/admission" icon="fa-solid fa-users" label="Admission" currentPath={pathname} router={router} />
          <SideNavLink href="/admin/dashboard/students" icon="fa-solid fa-eye" label="View Students" currentPath={pathname} router={router} />
          <SideNavLink href="/admin/dashboard/admins/add" icon="fa-solid fa-user-plus" label="Add Admin" currentPath={pathname} router={router} />
          <SideNavLink href="/admin/dashboard/admins" icon="fa-solid fa-eye" label="View Admin" currentPath={pathname} router={router} />
          <SideNavLink href="/admin/dashboard/faculty/add" icon="fa-solid fa-user-plus" label="Add Faculty" currentPath={pathname} router={router} />
          <SideNavLink href="/admin/dashboard/faculty" icon="fa-solid fa-eye" label="View Faculty" currentPath={pathname} router={router} />
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto w-full flex items-center justify-left gap-2 px-3 py-2 rounded transition-colors hover:bg-red-100 text-red-600 font-bold"
        >
          <FaSignOutAlt className="w-4 h-4 flex-shrink-0 pt-0.5" />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-64 px-4 sm:px-6 lg:px-6 py-4 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto bg-white shadow-md rounded-md p-6 min-h-full">
          {children}
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}
