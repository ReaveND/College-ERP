'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FaTachometerAlt, FaRegUser, FaRegCalendarAlt, FaUpload, FaPenSquare, FaFileAlt, FaEnvelopeOpen, FaSignOutAlt, FaChalkboardTeacher } from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard',              href: '/faculty/dashboard/overview',       icon: FaTachometerAlt },
  { label: 'Time Table',             href: '/faculty/dashboard/timetable',      icon: FaRegCalendarAlt },
  { label: 'Attendance',             href: '/faculty/dashboard/attendance',     icon: FaChalkboardTeacher },
  { label: 'Upload Study Materials', href: '/faculty/dashboard/study-materials', icon: FaUpload },
  { label: 'Marks Upload',           href: '/faculty/dashboard/marks-upload',   icon: FaPenSquare },
  { label: 'Assignment',             href: '/faculty/dashboard/assignment',     icon: FaFileAlt },
  { label: 'Leave Request',          href: '/faculty/dashboard/leave-request',  icon: FaEnvelopeOpen },
];

const WELCOME_PATH = '/faculty/dashboard';

export default function FacultyDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (_) { /* ignore */ }
    localStorage.removeItem('facultyName');
    router.push('/faculty/login');
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    // If the clicked item is already active, go back to the welcome page
    router.push(pathname === href ? WELCOME_PATH : href);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-20 p-4 pt-3 hidden md:flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
          <h3 className="text-xl text-blue-950 font-bold">Faculty Panel</h3>
        </div>
        <hr className="border-yellow-600 border mb-4" />

        <nav className="flex-1 space-y-1 font-sans text-sm font-semibold text-gray-700 overflow-y-auto">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={pathname === href ? WELCOME_PATH : href}
              onClick={(e) => handleNavClick(e, href)}
              className={`flex items-center gap-3 px-4 py-2 rounded transition-colors ${
                pathname === href
                  ? 'bg-blue-950 text-white font-bold'
                  : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-4 flex flex-row gap-1">
          <Link
            href={pathname === '/faculty/dashboard/profile' ? WELCOME_PATH : '/faculty/dashboard/profile'}
            onClick={(e) => handleNavClick(e, '/faculty/dashboard/profile')}
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded transition-colors font-bold flex-1 ${
              pathname === '/faculty/dashboard/profile'
                ? 'bg-blue-950 text-white'
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            <FaRegUser className="w-4 h-4 flex-shrink-0" />
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded transition-colors hover:bg-red-100 text-red-600 font-bold flex-1"
          >
            <FaSignOutAlt className="w-4 h-4 flex-shrink-0" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 px-4 sm:px-6 py-4">
        {children}
      </main>
    </div>
  );
}

