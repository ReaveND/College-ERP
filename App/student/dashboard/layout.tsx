'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { href: '/student/dashboard', label: 'Dashboard', icon: 'fa-solid fa-gauge-high' },
  { href: '/student/dashboard/study-materials', label: 'Study Materials', icon: 'fa-regular fa-note-sticky' },
  { href: '/student/dashboard/library', label: 'Library', icon: 'fa-solid fa-book' },
  { href: '/student/dashboard/attendance', label: 'Attendance', icon: 'fa-solid fa-person-chalkboard' },
  { href: '/student/dashboard/assignments', label: 'Assignment', icon: 'fa-solid fa-pen-ruler' },
  { href: '/student/dashboard/exam-form', label: 'Exam Form', icon: 'fab fa-wpforms' },
  { href: '/student/dashboard/admit-card', label: 'Admit Card', icon: 'fa-solid fa-id-card' },
  { href: '/student/dashboard/result', label: 'Result', icon: 'fa-solid fa-square-poll-horizontal' },
  { href: '/student/dashboard/fees-clearance', label: 'Sem/Exam Fees Clearance', icon: 'fa-solid fa-money-check-dollar' },
];

export default function StudentDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    if (typeof window !== 'undefined') {
      localStorage.removeItem('studentName');
      localStorage.removeItem('token');
    }
    router.push('/student/login');
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo + Title */}
      <div className="flex flex-row items-center gap-2 px-4 pt-4 pb-2">
        <Image src="/images/logo.png" alt="Logo" width={56} height={56} className="rounded-full object-cover shrink-0" />
        <h3 className="text-2xl text-blue-950 font-bold leading-tight">Student Panel</h3>
      </div>
      <hr className="bg-yellow-600 h-0.5 mb-4 mx-2" />

      {/* Nav */}
      <nav className="space-y-1 font-sans text-sm font-semibold text-gray-700 flex-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <button
              key={item.href}
              onClick={() => {
                setSidebarOpen(false);
                router.push(isActive ? '/student/dashboard/welcome' : item.href);
              }}
              className={`flex items-center w-full text-left px-5 py-2 rounded transition-colors ${
                isActive ? 'bg-blue-950 text-white font-bold' : 'hover:bg-gray-200'
              }`}
            >
              <i className={`${item.icon} mr-3 w-5 text-center`}></i>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Profile + Logout buttons at bottom */}
      <div className="p-4 flex gap-2">
        <button
          onClick={() => {
            setSidebarOpen(false);
            router.push(pathname === '/student/dashboard/profile' ? '/student/dashboard/welcome' : '/student/dashboard/profile');
          }}
          className={`flex-1 py-2 rounded-lg transition font-semibold text-sm flex items-center justify-center gap-1 ${
            pathname === '/student/dashboard/profile'
              ? 'bg-blue-950 text-white hover:bg-blue-900'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <i className="fa-regular fa-user"></i> Profile
        </button>
        <button
          onClick={handleLogout}
          className="flex-1 py-2 bg-yellow-600 text-white rounded-lg hover:bg-red-600 transition font-semibold text-sm flex items-center justify-center gap-1"
        >
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-20 hidden md:flex flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white shadow flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={36} height={36} className="rounded-full" />
          <span className="font-bold text-blue-950">Student Panel</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-blue-950 text-2xl focus:outline-none"
        >
          <i className={sidebarOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-20 flex">
          <div className="w-64 bg-white h-full shadow-xl flex flex-col pt-14">
            <SidebarContent />
          </div>
          <div className="flex-1 bg-black/40" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  );
}
