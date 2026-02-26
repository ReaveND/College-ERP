import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">College ERP System</h1>
        <p className="text-lg text-gray-600 mb-8">
          A comprehensive management system for educational institutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/admin/login"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Admin Portal</h2>
          <p className="text-gray-600">Manage administrators, faculty, and students</p>
        </Link>

        <Link
          href="/student/login"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Student Portal</h2>
          <p className="text-gray-600">Access your academic information and documents</p>
        </Link>

        <Link
          href="/faculty/login"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Faculty Portal</h2>
          <p className="text-gray-600">Manage courses, assignments, and attendance</p>
        </Link>
      </div>
    </main>
  );
}
